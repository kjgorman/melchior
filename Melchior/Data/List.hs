module Melchior.Data.List
       (
         -- * functions
         head
       , first
       , map
       , lconcat
       ) where

import Melchior.Dom
import Melchior.Data.String
import Melchior.Data.List
import Language.UHC.JScript.ECMA.Array (listToJSArray, indexJSArray, JSArray)

import Prelude hiding (head, map)

head :: (DomNode a) => Dom [a] -> Dom a
head i = inspect (stringToJSString "head") i >>= \x -> return $ indexJSArray (listToJSArray $ x) 0

first :: [a] -> a
first = primLazyHead

foreign import js "Lists.head(%1)"
  primLazyHead :: [a] -> a

foreign import js "Lists.length(%1)"
  length :: [a] -> Int

foreign import js "log(%2, %1)"
  inspect :: JSString -> a -> a

foreign import js "Lists.safeList(%1)"
  safe :: a -> a

foreign import js "Lists.map(%1, %2)"
  primMap :: (a -> b) -> JSArray a -> [b]

foreign import js "Lists.lconcat(%1)"
  lconcat :: [[a]] -> [a]

map :: (a -> b) -> [a] -> [b]
map f xs = primMap (\i -> f $ indexJSArray ys i) $ listToJSArray $ [0..(length xs)-1]
           where
             ys = safe $ listToJSArray $ inspect (stringToJSString "xs") $ xs


  