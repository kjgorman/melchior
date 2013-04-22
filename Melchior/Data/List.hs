module Melchior.Data.List where

import Melchior.Dom
import Language.UHC.JScript.ECMA.Array (listToJSArray, indexJSArray, JSArray)

head :: (DomNode a) => Dom [a] -> Dom a
head i = i >>= \x -> return $ indexJSArray (listToJSArray x) 0