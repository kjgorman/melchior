{-#LANGUAGE CPP #-}
module Melchior.Data.String (
    JSString
  , jsStringToString
  , stringToJSString
 ) where

#ifdef __UHC_TARGET_JS__
import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)

instance Show JSString where
  show h = jsStringToString h

#else
data JSString
stringToJSString = undefined
jsStringToString = undefined
instance Show JSString where
  show = undefined
#endif



