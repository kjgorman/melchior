module Melchior.Dom.Selectors where

import Language.UHC.JScript.ECMA.String
import Melchior.Dom

data Selector a b = ById a b | ByTag a b | ByClass a b

get :: Selector a b -> String -> [a] -> [b]
get (ById a b) pat els = primGetElemById (ById a b) els $ stringToJSString pat
get (ByTag a b) pat els = primGetElemByTag (ByTag a b) els $ stringToJSString pat
get (ByClass a b) pat els = primGetElemByClass (ByClass a b) els $ stringToJSString pat

primGetElemById :: Selector a b -> [a] -> JSString -> [b]
primGetElemById (ById a b) els pat = concatMap getOneFrom els
  where
    getOneFrom = (\el -> primGetByIdInChildrenOf (ById a b) pat el)

foreign import js "%3.getElementById(%2)"
  primGetByIdInChildrenOf :: Selector a b -> JSString -> a -> [b]
    
primGetElemByTag :: Selector a b -> [a] -> JSString -> [b]
primGetElemByTag (ByTag a b) els pat = concatMap getOneFrom els
  where
    getOneFrom = (\el -> primGetByTagInChildrenOf (ByTag a b) pat el)

foreign import js "%3.getElementsByTagName(%2)"
  primGetByTagInChildrenOf :: Selector a b -> JSString -> a -> [b]

primGetElemByClass :: Selector a b -> [a] -> JSString -> [b]
primGetElemByClass (ByClass a b) els pat = concatMap getOneFrom els
  where
    getOneFrom = (\el -> primGetByClassInChildrenOf (ByClass a b) pat el)

foreign import js "%3.getElementsByClassName(%2)"
  primGetByClassInChildrenOf :: Selector a b -> JSString -> a -> [b]

