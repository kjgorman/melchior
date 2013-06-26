{-# LANGUAGE CPP, EmptyDataDecls #-}
module Melchior.Dom
    ( -- * Types
      Dom
    , Element (unEl)
    , Node
    , Document
    , Input
    , Div
    , Span
    , Canvas
    , ensures
      -- * Typeclasses
    , DomNode
      -- * Functions
    , toElement
    , toInput
    , toDiv
    , document
    , root
    , addClass
    , removeClass
    , toggle
    , parentOf
    , siblings
    , appendHtml
    , hack
    , set
    , value
    , setV
    ) where

import Melchior.Data.String
import Melchior.Dom.Events
import Melchior.Dom.Html
import Control.Monad (liftM)

#ifdef __UHC_TARGET_JS__
import Language.UHC.JScript.Primitives
#else
data JSPtr a = JSPtr a
#endif

data Dom a = Dom (IO a)
data Node
newtype Element = Element { unEl :: JSPtr Node }
newtype Document = Document {unDoc ::  JSPtr Node }
newtype Input = Input { unIn :: JSPtr Node }
newtype Div = Div { unDiv :: JSPtr Node }
newtype Span = Span {unSpan :: JSPtr Node}
newtype Canvas = Canvas {unCanvas :: JSPtr Node}

ensures :: DomNode a => Maybe a -> a
ensures e = case e of
  Nothing -> error "Assertion Error -- Missing DOM Node"
  Just x  -> x

foreign import js "document"
  document :: Document

root :: [Element]
root = [toElement document]

instance Monad Dom where
  return = Dom . return
  (Dom io) >>= k = Dom $ io >>= \x -> let Dom io' = k x in io'

class DomNode a where
instance DomNode Element where
instance DomNode Input where
instance DomNode Document where
instance DomNode Div where
instance DomNode Span where
instance DomNode Canvas where

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

toggle :: String -> Element -> IO ()
toggle s = primToggle (stringToJSString s)

foreign import js "Dom.toggle(%2, %1)"
  primToggle :: JSString -> Element -> IO ()

set :: Element -> String -> a -> ()
set e s v = primSet e (stringToJSString s) v

foreign import js "Dom.set(%1, %2, %3)"
  primSet :: Element -> JSString -> a -> ()

foreign import js "Dom.hack(%1)"
  hack :: JSString -> JSString

value :: Input -> JSString
value = primGetValue

foreign import js "Dom.value(%1)"
  primGetValue :: Input -> JSString

appendHtml :: Element -> Html -> IO ()
appendHtml = primAppend

foreign import js "Dom.append(%1, %2)"
  primAppend :: Element -> Html -> IO ()

setV :: Input -> String -> IO ()
setV i s = primSetValue i (stringToJSString s)

foreign import js "Dom.value(%1, %2)"
  primSetValue :: Input -> JSString -> IO ()
{-
getAttr :: String -> Element -> Dom String
getAttr s e = Dom . liftM jsStringToString $ primGetAttr e (stringToJSString s)

foreign import js "%1.getAttribute(%2)"
  primGetAttr :: Element -> JSString -> IO JSString-}
