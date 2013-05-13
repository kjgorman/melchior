module Melchior.Dom.Selectors
    ( -- * Type
      Selector

      -- * Running selectors
    {-, select-}

      -- * Building selectors
    , byId
    , byClass
    , children
    , inputs
    ) where

import Control.Category
import Control.Monad ((>=>), liftM)
import Data.List (intercalate)
import Data.Maybe (listToMaybe, maybeToList)
import Data.Monoid
import Melchior.Dom
{-import Melchior.Data.List-}
import Language.UHC.JScript.ECMA.String
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
        liftM (if keep then (x :) else id) $ filterIO f xs
    toList = id
    toMaybe = listToMaybe


data Selector a b = Selector (a -> IO b)

instance Functor (Selector a) where
    fmap f (Selector g) = Selector $ liftM f . g

instance Category Selector where
    id = Selector return
    (Selector f) . (Selector g) = Selector $ g >=> f


select :: Selector [Element] b -> Dom b
select = Dom . runSelector

foreign import js "runSelector(%1)"
    runSelector :: Selector [Element] b -> IO b


byId :: (Node a, Nodes f) => String -> Selector (f a) (Maybe a)
byId eid = Selector $
    liftM toMaybe . filterIO (idEq (stringToJSString eid) . unwrap)

foreign import js "idEq(%2, %1)"
    idEq :: JSString -> JSPtr Node -> IO Bool

byClass :: (Node a, Nodes f) => String -> Selector (f a) (f a)
byClass ecl = Selector $ filterIO (clEq (stringToJSString ecl) . unwrap)

foreign import js "clEq(%2, %1)"
    clEq :: JSString -> JSPtr Node -> IO Bool

children :: (Nodes f) => Selector (f Element) [Element]
children = Selector $ liftM (fmap Element) . concatMapIO (chlQ . unwrap)

foreign import js "%1.childNodes"
    chlQ :: JSPtr Node -> IO [JSPtr Node]

inputs :: Nodes f => Selector (f Element) (f Input)
inputs = Selector $ liftM (fmap $ Input . unEl) . filterIO (inpF . unwrap)

foreign import js "tag(%1, 'input')"
    inpF :: JSPtr Node -> IO Bool


