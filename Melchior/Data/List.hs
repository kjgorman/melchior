module Melchior.Data.List
       (
         -- * functions
         head
       , map
       ) where

import Melchior.Dom
import Language.UHC.JScript.ECMA.Array (listToJSArray, indexJSArray, JSArray)
import Language.UHC.JScript.ECMA.String (JSString, stringToJSString)

head :: (DomNode a) => Dom [a] -> Dom a
head i = i >>= \x -> return $ indexJSArray (listToJSArray x) 0

foreign import js "get(%1, 'length')"
  length :: [a] -> Int

foreign import js "log(%2, %1)"
  inspect :: JSString -> a -> a

foreign import js "Lists.safeList(%1)"
  safe :: a -> a

foreign import js "Lists.map(%1, %2)"
  primMap :: (a -> b) -> JSArray a -> [b]

map :: (a -> b) -> [a] -> [b]
map f xs = primMap (\i -> f $! indexJSArray ys i) $ listToJSArray $ [1..length xs]
           where
             ys = safe $ listToJSArray xs