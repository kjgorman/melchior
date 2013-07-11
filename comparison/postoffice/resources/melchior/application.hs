module Comparisons.PostOffice where

import Control.Category hiding ((>>>), (<<<))
import Control.Applicative

import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.EventSources.Mouse
import Melchior.Remote.Json
import Melchior.Remote.XHR

main :: IO Element
main = runDom setupPostOffice

setupPostOffice :: [Element] -> Dom Element
setupPostOffice html = do
  composedMessages <- listenForComposition html
  placeInOutbox composedMessages html
  sendMessages composedMessages
  placeInInbox receiveMessages html
  return $ UHC.Base.head html

data Status = Ok | Error String
instance JsonSerialisable Status where
  fromJson Nothing = Error "No Response"
  fromJson (Just x) = case def $ getJsonString "status" x of
    "ok" -> Ok
    "error" -> Error "error"

def Nothing = "error"
def (Just s) = s

sendMessages :: Signal JsonObject -> Dom (Signal Status)
sendMessages s = return $ request POST "/send" $ (\x -> toDto x) <$> s

placeInOutbox :: Signal JsonObject -> [Element] -> Dom ()
placeInOutbox s html = do
  outbox <- Dom $ assuredly $ select (byId "outbox" . from) html
  prepend outbox $ (\s -> "<li>"++(ensures $ getJsonString "message" s)++"</li>") <$> s

listenForComposition :: [Element] -> Dom (Signal JsonObject)
listenForComposition html = do
  input <- Dom $ assuredly $ select (inputs . byId "writer" . from) html
  nick <- Dom $ assuredly $ select (inputs . byId "nick" . from) html
  send  <- Dom $ assuredly $ select (byId "submit" . from) html
  return $ (\_ -> toJsonDict [("message", jsStringToString $ value input), ("nick", jsStringToString $ value nick)]) <$> click send

receiveMessages :: Signal Message
receiveMessages = server "/receive" :: Signal Message

placeInInbox :: Signal Message -> [Element] -> Dom ()
placeInInbox s html = do
  inbox <- Dom $ assuredly $ select (byId "inbox" . from) html
  nick <- Dom $ assuredly $ select (inputs . byId "nick" .from) html
  prepend inbox $ dropWhen s (\(Message m n) -> n == (jsStringToString $ value nick))

data Message = Message String String
instance JsonSerialisable Message where
  fromJson Nothing = Message "nothing to see here..." ""
  fromJson (Just s) = Message (stringOrError s "message") (stringOrError s "nick")

instance Renderable Message where
  render (Message x y) = stringToJSString $ "<li>"++y++":"++x++"</li>"