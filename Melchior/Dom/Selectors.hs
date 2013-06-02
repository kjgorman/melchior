module Melchior.Dom.Selectors
    ( -- * Type
      Selector
    , Nodes
      -- * Running selectors
    , select
      -- * Building selectors
    , byId
    , byClass
    , from
    , inputs
    ) where

import Control.Category
import Control.Monad ((>=>), liftM)
import Data.List (intercalate)
import Data.Maybe (listToMaybe, maybeToList)
import Data.Monoid
import Melchior.Dom
import Melchior.Data.String

import Language.UHC.JScript.Primitives
import Prelude hiding ((.), id)

class Node n where
    unwrap :: n -> JSPtr Node

instance Node Element where
    unwrap = unEl

class Functor f => Nodes f where
    concatMapIO :: (a -> IO [b]) -> f a -> IO [b]
    filterIO :: (a -> IO Bool) -> f a -> IO (f a)
    toList :: f a -> [a]
    toMaybe :: f a -> Maybe a

instance Nodes Maybe where
    concatMapIO _ Nothing  = return []
    concatMapIO f (Just a) = f a
    filterIO _ Nothing  = return Nothing
    filterIO f (Just x) = do
        keep <- f x
        return $ if keep then Just x else Nothing
    toList = maybeToList
    toMaybe = id

instance Nodes [] where
    concatMapIO _ []       = return []
    concatMapIO f (x : xs) = do
        list <- f x
        liftM (list ++) $ concatMapIO f xs
    filterIO _ []       = return []
    filterIO f (x : xs) = do
      keep <- f x
      liftM (if keep then (x:) else id) $ filterIO f xs
    toList = id
    toMaybe = listToMaybe


foreign import js "log(%2, %1)"
  pass :: JSString -> a -> a

data Selector a b = Selector (a -> IO b)

instance Functor (Selector a) where
    fmap f (Selector g) = Selector $ \x -> liftM f $ g x
    
instance Category Selector where
    id = Selector return
    (Selector f) . (Selector g) = Selector $ g >=> f
    
select :: Selector a b -> a -> IO b
select (Selector s) = s

byId :: (Node a, Nodes f) => String -> Selector (f a) (Maybe a)
byId eid = Selector $ \x ->
    (liftM toMaybe) $ filterIO (\y -> idEq (stringToJSString eid) $ unwrap y) x

foreign import js "Selectors.idEq(%2, %1)"
    idEq :: JSString -> JSPtr Node -> IO Bool

byClass :: (Node a, Nodes f) => String -> Selector (f a) (f a)
byClass ecl = Selector $ filterIO (\x -> clEq (stringToJSString ecl) $ unwrap x)

foreign import js "Selectors.clEq(%2, %1)"
    clEq :: JSString -> JSPtr Node -> IO Bool

from :: (Nodes f) => Selector (f Element) [Element]
from = Selector $ \y -> liftM (fmap Element) $ concatMapIO (\x -> chlQ $ unwrap x) y

foreign import js "Selectors.children(%1)"
    chlQ :: JSPtr Node -> IO [JSPtr Node]

inputs :: Nodes f => Selector (f Element) (f Input)
inputs = Selector $ \z -> liftM (fmap $ \y -> Input $ unEl y) $ filterIO (\x -> inpF $ unwrap x) z

foreign import js "Selectors.tag(%1, 'input')"
    inpF :: JSPtr Node -> IO Bool

divs :: Nodes f => Selector (f Element) (f Div)
divs = Selector $ \z -> liftM (fmap $ \y -> Input $ unEl y) $ filterIO (\x -> inpF $ unwrap x) z

foreign import js "Selectors.tag(%1, 'divs')"
    inpF :: JSPtr Node -> IO Bool

spans :: Nodes f => Selector (f Element) (f Span)
spans = Selector $ \z -> liftM (fmap $ \y -> Input $ unEl y) $ filterIO (\x -> inpF $ unwrap x) z

foreign import js "Selectors.tag(%1, 'span')"
    inpF :: JSPtr Node -> IO Bool            


