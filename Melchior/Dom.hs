{-# LANGUAGE EmptyDataDecls #-}
module Melchior.Dom where

import Melchior.Control
import Language.UHC.JScript.ECMA.String
import Language.UHC.JScript.Primitives

data Dom a = Dom a 
data Document = Document
data Input = Input
data Div = Div -- Not too sure about whether it should be literal
               -- html elements or semantic, e.g. TextBody, etc.

instance Monad Dom where
  (Dom a) >>= k = k a
  return a = (Dom a)

document :: Document
document = Document --should be doc root

{- Common element functions -}
class Element a where
  getAttr :: Dom a -> String -> String
  
instance Element Document where
  getAttr d s = jsStringToString $ primGetAttr d $ stringToJSString s
  
instance Element Input where
  getAttr d s = jsStringToString $ primGetAttr d $ stringToJSString s

instance Element Div where
  getAttr d s = jsStringToString $ primGetAttr d $ stringToJSString s

foreign import js "%1.getAttribute(%2)"
  primGetAttr :: (Element a) => Dom a -> JSString -> JSString