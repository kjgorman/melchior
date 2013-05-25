{-# LANGUAGE EmptyDataDecls #-}
module Melchior.Dom
    ( -- * Types
      Dom
    , Element (unEl)
    , Node
    , Document
    , Input
    , Div
      -- * Typeclasses
    , DomNode
      -- * Functions
    , toElement
    , toInput
    , toDiv
    , document
    , docRoot
    , addClass
    , removeClass
    , toggle
    , parentOf
    , siblings
    , append
    , set
    ) where

--dependencies
import Melchior.Data.String
import Melchior.Dom.Events
import Control.Monad (liftM)

import Language.UHC.JScript.Primitives

data Dom a = Dom (IO a)
data Node
newtype Element = Element { unEl :: JSPtr Node }
newtype Document = Document {unDoc ::  JSPtr Node }
newtype Input = Input { unIn :: JSPtr Node }
newtype Div = Div { unDiv :: JSPtr Node }
newtype Span = Span {unSpan :: JSPtr Node}

foreign import js "document"
  document :: Document

docRoot :: [Element]
docRoot = [toElement document]

instance Monad Dom where
  return = Dom . return
  (Dom io) >>= k = Dom $ io >>= \x -> let Dom io' = k x in io'

class DomNode a where
instance DomNode Element where
instance DomNode Input where
instance DomNode Document where

foreign import js "id(%2)"
  toElement :: (DomNode a) => a -> Element

foreign import js "Selectors.toInput(%2)"
  toInput ::(DomNode a) =>  a -> Input

foreign import js "Selectors.toDocument(%2)"
  toDocument ::(DomNode a) =>  a -> Document

foreign import js "Selectors.toDiv(%2)"
  toDiv :: (DomNode a) => a -> Div

foreign import js "Selectors.toSpan(%2)"
  toSpan :: (DomNode a) => a -> Span

foreign import js "%1.parentNode"
  parentOf :: Element -> Element

foreign import js "Dom.siblings(%1)"
  siblings :: Element -> [Element]

addClass :: String -> Element -> JSString
addClass s e = primAddClass (stringToJSString s) e

foreign import js "Dom.addClass(%2, %1)"
  primAddClass :: JSString -> Element -> JSString

removeClass :: String -> Element -> JSString
removeClass s e = primRemoveClass (stringToJSString s) e

foreign import js "Dom.removeClass(%2, %1)"
  primRemoveClass :: JSString -> Element -> JSString

toggle :: String -> Element -> JSString
toggle s = primToggle (stringToJSString s)

foreign import js "Dom.toggle(%2, %1)"
  primToggle :: JSString -> Element -> JSString

set :: Element -> String -> a -> Dom a
set e s v = primSet e (stringToJSString s) v

foreign import js "Dom.set(%1, %2, %3)"
  primSet :: Element -> JSString -> a -> Dom a

foreign import js "Dom.hack(%1)"
  append :: JSString -> JSString

{-
getAttr :: String -> Element -> Dom String
getAttr s e = Dom . liftM jsStringToString $ primGetAttr e (stringToJSString s)

foreign import js "%1.getAttribute(%2)"
  primGetAttr :: Element -> JSString -> IO JSString-}
