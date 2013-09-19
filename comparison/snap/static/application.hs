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
  sendUpdates html
  retrieveGets html

sendInputs :: [Element] -> Dom ()
sendInputs html = do
  title <- getInput html "set-title"
  code <- getInput html "set-code"
  points <- getInput html "set-points"
  submit <- Dom . assuredly $ select (byId "set-send" . from) html
  clicks <- return $ click submit
  sets <- return $ remote POST "/post" $ (\_ -> toDto $ json (sample title) (sample code) (sample points)) <$> clicks
  terminate sets (\_ -> return ())
  where json t c p = JsonObject [key, value t c p]
        key = JsonPair (JsonString "key", JsonString "SWEN431")
        value t c p = JsonPair (JsonString "value", JsonObj $ parseToJson t c p)

retrieveGets :: [Element] -> Dom ()
retrieveGets html = do
  values <- getInput html "get-in"
  textSubmit <- Dom . assuredly $ select (byId "get" . from) html
  textOut <- Dom . assuredly $ select (byId "get-out" . from) html
  clicks <- return $ click textSubmit
  gets <- return $ ((request POST "/get" $ (\_ -> toDto . json $ sample values) <$> clicks) :: Signal Course)
  put textOut gets
  where json v = toJsonDict [("name", jsStringToString v)]

getInput :: [Element] -> String -> Dom (Signal JSString)
getInput html key = Dom $ (assuredly $ select (inputs . byId key . from) html) >>= return . inputValue

sendUpdates :: [Element] -> Dom ()
sendUpdates html = do
  submit <- Dom . assuredly $ select (byId "update" . from) html
  status <- Dom . assuredly $ select (byId "status" . from) html
  values <- getInput html "get-in"
  clicks <- return $ click submit
  put status $ (remote POST "/set/points" $ (\_ -> toDto . json $ sample values) <$> clicks)
  where json v = toJsonDict [("key", jsStringToString v)]