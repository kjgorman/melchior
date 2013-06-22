{-#LANGUAGE CPP #-}
module Melchior.Data.String (
    JSString
  , jsStringToString
  , stringToJSString
 ) where

#ifdef __UHC_TARGET_JS__
import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
#else
data JSString
stringToJSString = undefined
jsStringToString = undefined
#endif