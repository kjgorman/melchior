module Melchior.XHR (
    get
  , remote
    -- * Types
  , GET
  , POST
  , PUT
  , DELETE
  ) where

import Melchior.Control
import Melchior.Dom
import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)

data XHRMethod = GET | POST | PUT | DELETE

instance Show XHRMethod where
  show GET = "GET"
  show POST = "POST"
  show PUT = "PUT"
  show DELETE = "DELETE"

remote :: XHRMethod -> String -> Signal a -> Signal JSString
remote x s source = primGetXHR (stringToJSString $ show x) (stringToJSString s) source

foreign import js "XHR.pipeXHRSignal(%1, %2, %3)"
  primGetXHR :: JSString -> JSString -> Signal a -> Signal JSString

get :: XHRMethod -> String -> Signal JSString
get x s = primGet (stringToJSString $ show x) (stringToJSString s)

foreign import js "XHR.getXHRSignal(%1, %2)"
  primGet :: JSString -> JSString -> Signal JSString
