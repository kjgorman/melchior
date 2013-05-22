module Melchior.Remote.Json (
    parseJson
  , Json
  , JsonObject
  ) where

import Melchior.Remote.Internal.Parser

getJsonObj :: String -> JsonObject -> Maybe Json
getJsonObj = undefined

getJsonString :: String -> JsonObject -> Maybe String
getJsonString = undefined

getJsBool :: String -> JsonObject -> Maybe Bool
getJsBool = undefined