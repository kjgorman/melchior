module Snap.Client where

import Control.Applicative ((<$>))
import Control.Category
import Prelude hiding ((.), id)
import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.EventSources.Mouse
import Melchior.EventSources.Elements
import Melchior.Remote.Json
import Melchior.Remote.XHR
import Melchior.Sink

main :: IO ()
main = runDom client

client :: [Element] -> Dom ()
client html = do
  sendInputs html
  retrieveGets html

sendInputs :: [Element] -> Dom ()
sendInputs html = do
  keyInput <- Dom $ assuredly $ select (inputs . byId "set-key" . from) html
  valueInput <- Dom $ assuredly $ select (inputs . byId "set-value" . from) html
  submit <- Dom $ assuredly $ select (byId "set-send" . from) html
  keys <- return $ inputValue keyInput
  values <- return $ inputValue valueInput
  clicks <- return $ click submit
  let json = constructPost keys values
  return ()
  where
    constructPost k v = JsonObject [key k, value v]
    key k = JsonPair (JsonString "key", JsonString $ jsStringToString $ sample k)
    value v = JsonPair (JsonString "value", JsonString $ jsStringToString $ sample v)


retrieveGets :: [Element] -> Dom ()
retrieveGets html = do
  textInput <- Dom $ assuredly $ select (inputs . byId "get-in" . from) html
  textSubmit <- Dom $ assuredly $ select (byId "get" . from) html
  textOut <- Dom $ assuredly $ select (byId "get-out" . from) html
  values <- return $ inputValue textInput
  let clicks = click textSubmit
      json = JsonObject [JsonPair (JsonString "name", JsonString $ jsStringToString $ sample values)]
  gets <- return $ remote POST "/get" $ (\_ -> toDto json) <$> clicks
  put textOut gets
