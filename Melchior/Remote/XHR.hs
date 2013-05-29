module Melchior.Remote.XHR (
    get
  , remote
  , request
  , server
    -- * Types
  , GET
  , POST
  , PUT
  , DELETE
  ) where

import Control.Applicative
import Melchior.Control
import Melchior.Dom
import Melchior.Data.String
import Melchior.Remote.Json

data XHRMethod = GET | POST | PUT | DELETE

instance Show XHRMethod where
  show GET = "GET"
  show POST = "POST"
  show PUT = "PUT"
  show DELETE = "DELETE"

--TODO - make this parameterise by a signal, with `constant` for only get-ing
server :: (JsonSerialisable a) => String -> Signal a
server channel = (\s -> ensureApplicable $ fromJson $ parseJson $ jsStringToString s) <$> (primGetSocketedSignal $ stringToJSString channel)

foreign import js "Sockets.createSocketedSignal(%1)"
  primGetSocketedSignal :: JSString -> Signal JSString

remote :: XHRMethod -> String -> Signal a -> Signal JSString
remote x s source = primGetXHR (stringToJSString $ show x) (stringToJSString s) source

foreign import js "XHR.pipeXHRSignal(%1, %2, %3)"
  primGetXHR :: JSString -> JSString -> Signal a -> Signal JSString

get :: XHRMethod -> String -> Signal JSString
get x s = primGet (stringToJSString $ show x) (stringToJSString s)

foreign import js "XHR.getXHRSignal(%1, %2)"
  primGet :: JSString -> JSString -> Signal JSString

request :: (JsonSerialisable a) => XHRMethod -> String -> Signal s -> Signal a
request  x s source = (\s -> ensureApplicable $ fromJson (parseJson $ jsStringToString s)) <$> (primGetXHR (stringToJSString $ show x) (stringToJSString s) source)

