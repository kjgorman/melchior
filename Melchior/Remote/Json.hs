module Melchior.Remote.Json (
    parseJson
  , toJson
  , fromJson
  , getJsonString
  , JsonSerialisable
  , Json
  , JsonObject
  ) where


import Control.Applicative
import Melchior.Control
import Melchior.Data.String
import Melchior.Remote.Internal.Parser

class JsonSerialisable a where
  fromJson :: (Maybe JsonObject) -> a

toJson :: SF JSString (Maybe JsonObject)
toJson s = (\x -> parseJson (jsStringToString x)) <$> s

empty :: JsonObject
empty = JsonObject []

getKey :: String -> JsonObject -> Maybe Json
getKey s (JsonObject x) = case filter (\x -> matchJson s x) x of
  [] -> Nothing
  x  -> Just $ head x

matchJson :: String -> Json -> Bool
matchJson s (JsonPair j) = matchPair s j
matchJson _ _ = False

matchPair :: String -> (Json, Json) -> Bool
matchPair s (JsonString t, _) = s == t
matchPair _ _ = False

getJsonString :: String -> JsonObject -> Maybe String
getJsonString s j@(JsonObject x) = case getKey s j of
  Nothing -> Nothing
  (Just j) -> stringFrom j

stringFrom :: Json -> Maybe String
stringFrom (JsonPair (x, JsonString y)) = Just y
stringFrom _ = Nothing