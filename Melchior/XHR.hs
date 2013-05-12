module Melchior.XHR where

import Melchior.Control
import Melchior.Dom
import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)

data XHRMethod = GET | POST | PUT | DELETE

instance Show XHRMethod where
  show GET = "GET"
  show POST = "POST"
  show PUT = "PUT"
  show DELETE = "DELETE"

-- getXHRRequest GET, "/all_the_things", sourceSignal

getXHR :: XHRMethod -> String -> Signal (Dom a) -> Signal (Dom JSString)
getXHR x s source = primGetXHR (stringToJSString $ show x) (stringToJSString s) source

foreign import js "XHR.createXHRSignal(%1, %2, %3)"
  primGetXHR :: JSString -> JSString -> Signal (Dom a) -> Signal (Dom JSString)

{-
so getXHR will just be a prim function along the lines of

function getXHR(resource, method) {
   var xhr = native.getXHR(..or whatever, from browser)
   , req = new xhr()
   opts = {method:method, url:url}
   req.open(opts) --this should only 'open' on eval -- does that arise naturally?
   return Signals.createRemoteSignal(req)
}
-}