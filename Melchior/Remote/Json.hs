module Melchior.Remote.Json (
    parseJson
  , toJson
  , getJsonString
  , Json
  , JsonObject
  ) where

import Melchior.Control
import Melchior.Remote.Internal.Parser
import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)

toJson :: SF JSString (Maybe JsonObject)
toJson s = pipe s (\x -> parseJson (jsStringToString $ pass "str" $  x))

empty :: JsonObject
empty = JsonObject []

getJsonObj :: String -> JsonObject -> Maybe Json
getJsonObj = undefined

getJsonString :: String -> JsonObject -> Maybe String
getJsonString s (JsonObject x) = case dropWhile (\y -> fst y /= s) x of
                                   [] -> Nothing
                                   z  -> case snd $ head x of
                                           (JsonString s) -> Just s
                                           _ -> Nothing


getJsBool :: String -> JsonObject -> Maybe Bool
getJsBool = undefined


pass :: String -> a -> a
pass s x = primPass (stringToJSString s) x

foreign import js "log(%2, %1)"
  primPass :: JSString -> a -> a