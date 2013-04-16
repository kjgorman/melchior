{-# LANGUAGE EmptyDataDecls #-}
module Melchior.Dom where

import Melchior.Control
import Language.UHC.JScript.ECMA.String
import Language.UHC.JScript.Primitives

data Dom a = Dom a
data Node
newtype Element = Element (JSPtr Node)
newtype Document = Document (JSPtr Node)
newtype Input = Input (JSPtr Node)
newtype Div = Div (JSPtr Node)

instance Monad Dom where
  (Dom a) >>= k = k a
  return a = (Dom a)

class DomNode a where
  force :: Dom a -> a

instance DomNode Element where
  force el = toElement $! el

instance DomNode Input where
  force i  = toInput $! i

instance DomNode Document where
  force d = toDocument $! d

foreign import js "id(%1)"
  toElement :: a -> Element

foreign import js "id(%1)"
  toInput :: a -> Input

foreign import js "id(%1)"
  toDocument :: a -> Document

document :: Dom Document
document = Dom primDoc

foreign import js "document"
  primDoc :: Document

getAttr :: Dom Element -> String -> String
getAttr d s = jsStringToString $ primGetAttr d $ stringToJSString s

foreign import js "%1.getAttribute(%2)"
  primGetAttr :: Dom Element -> JSString -> JSString