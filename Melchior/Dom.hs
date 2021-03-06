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
    , Image
    , ListItem
    , ensures
    , assuredly
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
    , prependHtml
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
newtype Image = Image {unImage :: JSPtr Node}
newtype ListItem = ListItem {unListItem :: JSPtr Node}

ensures :: Maybe a -> a
ensures e = case e of
  Nothing -> error "Assertion Error -- Missing DOM Node"
  Just x  -> x

assuredly :: IO (Maybe a) -> IO a
assuredly x = x >>= \m -> return $ ensures m
#ifdef __UHC_TARGET_JS__
foreign import js "document"
  document :: Document
#else
document :: Document
document = undefined
#endif

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
instance DomNode ListItem where
instance DomNode Image where

#ifdef __UHC_TARGET_JS__
foreign import js "id(%2)"
  toElement :: (DomNode a) => a -> Element
#else
toElement :: (DomNode a) => a -> Element
toElement = undefined
#endif
#ifdef __UHC_TARGET_JS__
foreign import js "Selectors.toInput(%2)"
  toInput ::(DomNode a) =>  a -> Input
#else
toInput ::(DomNode a) =>  a -> Input
toInput = undefined
#endif
#ifdef __UHC_TARGET_JS__
foreign import js "Selectors.toDocument(%2)"
  toDocument ::(DomNode a) =>  a -> Document
#else
toDocument ::(DomNode a) =>  a -> Document
toDocument = undefined
#endif
#ifdef __UHC_TARGET_JS__
foreign import js "Selectors.toDiv(%2)"
  toDiv :: (DomNode a) => a -> Div
#else
toDiv :: (DomNode a) => a -> Div
toDiv = undefined
#endif
#ifdef __UHC_TARGET_JS__
foreign import js "Selectors.toSpan(%2)"
  toSpan :: (DomNode a) => a -> Span
#else
toSpan :: (DomNode a) => a -> Span
toSpan = undefined
#endif
#ifdef __UHC_TARGET_JS__
foreign import js "%1.parentNode"
  parentOf :: Element -> Element
#else
parentOf :: Element -> Element
parentOf = undefined
#endif
#ifdef __UHC_TARGET_JS__
foreign import js "Dom.siblings(%1)"
  siblings :: Element -> [Element]
#else
siblings :: Element -> [Element]
siblings = undefined
#endif

addClass :: String -> Element -> JSString
addClass s e = primAddClass (stringToJSString s) e
#ifdef __UHC_TARGET_JS__
foreign import js "Dom.addClass(%2, %1)"
  primAddClass :: JSString -> Element -> JSString
#else
primAddClass :: JSString -> Element -> JSString
primAddClass = undefined
#endif

removeClass :: String -> Element -> JSString
removeClass s e = primRemoveClass (stringToJSString s) e
#ifdef __UHC_TARGET_JS__
foreign import js "Dom.removeClass(%2, %1)"
  primRemoveClass :: JSString -> Element -> JSString
#else
primRemoveClass :: JSString -> Element -> JSString
primRemoveClass = undefined
#endif

toggle :: String -> Element -> IO ()
toggle s = primToggle (stringToJSString s)
#ifdef __UHC_TARGET_JS__
foreign import js "Dom.toggle(%2, %1)"
  primToggle :: JSString -> Element -> IO ()
#else
primToggle :: JSString -> Element -> IO ()
primToggle = undefined
#endif

set :: Element -> String -> a -> ()
set e s v = primSet e (stringToJSString s) v
#ifdef __UHC_TARGET_JS__
foreign import js "Dom.set(%1, %2, %3)"
  primSet :: Element -> JSString -> a -> ()
#else
primSet :: Element -> JSString -> a -> ()
primSet = undefined
#endif
#ifdef __UHC_TARGET_JS__
foreign import js "Dom.hack(%1)"
  hack :: JSString -> JSString
#else
hack :: JSString -> JSString
hack = undefined
#endif

value :: Input -> JSString
value = primGetValue
#ifdef __UHC_TARGET_JS__
foreign import js "Dom.value(%1)"
  primGetValue :: Input -> JSString
#else
primGetValue :: Input -> JSString
primGetValue = undefined
#endif

appendHtml :: Element -> Html -> IO ()
appendHtml = primAppend
#ifdef __UHC_TARGET_JS__
foreign import js "Dom.append(%1, %2)"
  primAppend :: Element -> Html -> IO ()
#else
primAppend :: Element -> Html -> IO ()
primAppend = undefined
#endif

prependHtml :: Element -> Html -> IO ()
prependHtml = primPrepend
#ifdef __UHC_TARGET_JS__
foreign import js "Dom.prepend(%1, %2)"
  primPrepend :: Element -> Html -> IO ()
#else
primPrepend :: Element -> Html -> IO ()
primPrepend = undefined
#endif

setV :: Input -> String -> IO ()
setV i s = primSetValue i (stringToJSString s)
#ifdef __UHC_TARGET_JS__
foreign import js "Dom.value(%1, %2)"
  primSetValue :: Input -> JSString -> IO ()
#else
primSetValue :: Input -> JSString -> IO ()
primSetValue = undefined
#endif
