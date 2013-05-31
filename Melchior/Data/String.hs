--Reexport string functions

module Melchior.Data.String (
    JSString
  , jsStringToString
  , stringToJSString
 ) where

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
