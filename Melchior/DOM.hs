{-# LANGUAGE EmptyDataDecls #-}
module Melchior.DOM where

import Melchior.Control
import Language.UHC.JScript.ECMA.String
import Language.UHC.JScript.Primitives

data Element
data Dom a = Dom a

instance Monad Dom where
  (Dom a) >>= k = k a
  return a = (Dom a)

log :: String -> IO ()
log s = consoleLog $ stringToJSString s

foreign import js "console.log(%1)"
  consoleLog :: JSString -> IO ()

foreign import js "%1.substr(%2, %3)"
  substr :: JSString -> Int -> Int -> JSString

foreign import js "addListener(%1, %2, %3)"
  bind :: Dom Element -> JSString -> SF a b -> Dom ()

foreign import js "document.querySelector(%1)"
  select :: JSString -> Dom Element

foreign import js "%1.value"
  getValue :: Dom Element -> JSString

foreign import js "%1.innerHTML"
  getHTML :: Dom Element -> JSString

foreign import js "set(%1, 'innerHTML', %2)"
  setHTML :: Dom Element -> JSString -> Dom ()