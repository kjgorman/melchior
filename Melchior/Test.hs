module Melchior.Test
       (
         expects
       ) where

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)

expects :: String -> a -> a
expects s a = mexpects (stringToJSString s) a

foreign import js "Melchior.expects(%1, %2)"
  mexpects :: JSString -> a -> a