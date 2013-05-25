module Melchior.Remote.Json (
    parseJson
  , toJson
  , getJsonString
  , Json
  , JsonObject
  ) where


import Control.Applicative
import Melchior.Control
import Melchior.Data.String
import Melchior.Remote.Internal.Parser


toJson :: SF JSString (Maybe JsonObject)
toJson s = (\x -> parseJson (jsStringToString x)) <$> s

empty :: JsonObject
empty = JsonObject []

getKey :: String -> JsonObject -> Maybe [(String, Json)]
getKey s (JsonObject x) = case dropWhile (\y -> fst y /= s) x of
                               [] -> Nothing
                               k  -> Just k

getJsonObj :: String -> JsonObject -> Maybe JsonObject
getJsonObj s j@(JsonObject x) = head <$> (getKey s j) >>= (\x -> case snd x of
                                                             (JsonObj s) -> Just s
                                                             _ -> Nothing)

getJsonString :: String -> JsonObject -> Maybe String
getJsonString s j@(JsonObject x) = head <$> (getKey s j) >>= (\x -> case snd x of
                                                             (JsonString s) -> Just s
                                                             _ -> Nothing)

getJsonBool :: String -> JsonObject -> Maybe Bool
getJsonBool s j@(JsonObject x) = head <$> (getKey s j) >>= (\x -> case snd x of
                                                             (JsonBool s) -> Just s
                                                             _ -> Nothing)

getJsonArray :: String -> JsonObject -> Maybe [Json]
getJsonArray s j@(JsonObject x) = head <$> (getKey s j) >>= (\x -> case snd x of
                                                             (JsonArray s) -> Just s
                                                             _ -> Nothing)

