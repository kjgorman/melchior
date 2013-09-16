module Snap.Client where

import Control.Applicative ((<$>))
import Control.Category
import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Selectors
import Melchior.EventSources.Mouse
import Melchior.EventSources.Elements
import Melchior.Remote.Json
import Melchior.Remote.XHR
import Melchior.Sink
import Course

main :: IO ()
main = runDom client

client :: [Element] -> Dom ()
client html = do
  sendInputs html
  retrieveGets html

sendInputs :: [Element] -> Dom ()
sendInputs html = do
  title <- getInput html "set-title"
  code <- getInput html "set-code"
  points <- getInput html "set-points"
  submit <- Dom . assuredly $ select (byId "set-send" . from) html
  clicks <- return $ click submit
  sets <- return $ remote POST "/post" $ (\_ -> toDto $ parseToJson (sample title) (sample code) (sample points)) <$> clicks
  terminate sets (\_ -> return ())

retrieveGets :: [Element] -> Dom ()
retrieveGets html = do
  values <- getInput html "get-in"
  textSubmit <- Dom . assuredly $ select (byId "get" . from) html
  textOut <- Dom . assuredly $ select (byId "get-out" . from) html
  clicks <- return $ click textSubmit
  gets <- return $ ((request POST "/get" $ (\_ -> toDto . json $ sample values) <$> clicks) :: Signal Course)
  put textOut gets
  where json v = JsonObject [JsonPair (JsonString "name", JsonString $ jsStringToString v)]

getInput :: [Element] -> String -> Dom (Signal JSString)
getInput html key = Dom $ (assuredly $ select (inputs . byId key . from) html) >>= return . inputValue
