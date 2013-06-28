module Comparisons.PostOffice where

import Control.Category hiding ((>>>), (<<<))
import Control.Applicative
import Prelude hiding ((.), id)

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

sendMessages :: Signal String -> Dom (Signal Status)
sendMessages s = return $ request POST "/send" $ (\x -> stringToJSString x) <$> (dropWhen s (\x -> x == ""))

placeInOutbox :: Signal String -> [Element] -> Dom ()
placeInOutbox s html = do
  outbox <- Dom $ select (byId "outbox" . from) html >>= \m -> return $ ensures m
  prepend outbox $ (\s -> "<li>"++s++"</li>") <$> s

listenForComposition :: [Element] -> Dom (Signal String)
listenForComposition html = do
  input <- Dom $ select (inputs . byId "writer" . from) html >>= \m -> return $ ensures m
  send  <- Dom $ select (byId "submit" . from) html >>= \m -> return $ ensures m
  return $ (\_ -> jsStringToString $ value input) <$> click send

receiveMessages :: Signal Message
receiveMessages = server "/receive" :: Signal Message

placeInInbox :: Signal Message -> [Element] -> Dom ()
placeInInbox s html = do
  inbox <- Dom $ select (byId "inbox" . from) html >>= \m -> return $ ensures m
  prepend inbox s

data Message = Message String
instance JsonSerialisable Message where
  fromJson Nothing = Message "nothing to see here..."
  fromJson (Just s) = case getJsonString "message" s of
    Nothing -> Message "nothing to see here..."
    Just x  -> Message x
instance Renderable Message where
  render (Message x) = stringToJSString $ "<li>"++x++"</li>"