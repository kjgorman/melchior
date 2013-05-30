module Melchior.Remote.XHR (
    remote
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

data XHRMethod = GET | POST | PUT | DELETE | SIGNAL

instance Show XHRMethod where
  show GET = "GET"
  show POST = "POST"
  show PUT = "PUT"
  show DELETE = "DELETE"

-- | Continuous signal of server output on the input url channel
server :: (JsonSerialisable a) => String -> Signal a
server channel = (\s -> ensureApplicable $ fromJson $ parseJson $ jsStringToString s) <$> (primGetSocketedSignal $ stringToJSString channel)

foreign import js "Sockets.createSocketedSignal(%1)"
  primGetSocketedSignal :: JSString -> Signal JSString

-- | Represents a single xhr call, the signal has value when onreadystatechanged
remote :: XHRMethod -> String -> Signal a -> Signal JSString
remote x s source = primGetXHR (stringToJSString $ show x) (stringToJSString s) source

-- | Return a xhr request, or signal
request :: (JsonSerialisable a) => XHRMethod -> String -> Signal s -> Signal a
request  x s source = (\s -> ensureApplicable $ fromJson (parseJson $ jsStringToString s)) <$> (primGetRemote (stringToJSString $ show x) (stringToJSString s) source)

foreign import js "XHR.getRemote(%1, %2, %3)"
  primGetRemote :: JSString -> JSString -> Signal a -> Signal JSString

