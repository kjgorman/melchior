module Melchior.XHR where

import Melchior.Control

data XHRMethod = GET | POST | PUT | DELETE
data JSON --need to define this somewhere...

instance Show XHRMethod where
  show GET = "GET"
  show POST = "POST"
  show PUT = "PUT"
  show DELETE = "DELETE"

-- getXHRRequest Of JSON, GET, "/all_the_things"

getXHR :: XHRMethod -> String -> Signal JSON
getXHR = undefined

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