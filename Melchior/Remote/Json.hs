{-#LANGUAGE CPP#-}
module Melchior.Remote.Json (
    parseJson
  , toJsonSF
  , toJson
  , toDto
  , toJsonDict
  , fromJson
  , getJsonString
  , stringOrError
  , numberOrNought
  , JsonSerialisable
  , JsonWriteable
  , Json
  , JsonObject
#ifdef __UHC_TARGET_JS__
  , JsonObj
  , JsonPair
  , JsonString
  , JsNull
#endif
  ) where


import Control.Applicative
import Melchior.Control
import Melchior.Data.String
import Melchior.Remote.Internal.Parser

class JsonSerialisable a where
  fromJson :: (Maybe JsonObject) -> a

class JsonWriteable a where
  asJson :: a -> (Maybe JsonObject)

toDto :: JsonObject -> JSString
toDto x = stringToJSString $ show x

toJsonSF :: SF JSString (Maybe JsonObject)
toJsonSF s = (\x -> toJson x) <$> s

toJson :: JSString -> Maybe JsonObject
toJson x = parseJson (jsStringToString x)

toJsonDict :: [(String, String)] -> JsonObject
toJsonDict pairs = JsonObject $ map pairify pairs
                   where
                     pairify x = JsonPair (JsonString $ fst x, JsonString $ snd x)

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
getJsonString s j = case getKey s j of
  Nothing -> Nothing
  (Just j) -> stringFrom j

getJsonNumber :: String -> JsonObject -> Maybe Float
getJsonNumber s j = case getKey s j of
  Nothing -> Nothing
  (Just j) -> numberFrom j

stringFrom :: Json -> Maybe String
stringFrom (JsonPair (x, JsonString y)) = Just y
stringFrom _ = Nothing

numberFrom :: Json -> Maybe Float
numberFrom (JsonPair(_, JsonNumber y)) = Just (read y :: Float)
numberFrom _ = Nothing

stringOrError :: JsonObject -> String -> String
stringOrError j key = case getJsonString key j of
  Nothing -> "error"
  (Just s) -> s

numberOrNought :: JsonObject -> String -> Float
numberOrNought j key = case getJsonNumber key j of
  Nothing -> 0
  (Just n) -> n