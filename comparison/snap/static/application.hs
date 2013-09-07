module Snap.Client where

import Control.Category
import Prelude hiding ((.), id)
import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.EventSources.Mouse
import Melchior.Remote.Json
import Melchior.Remote.XHR
import Melchior.Sink

main :: IO ()
main = runDom client

client :: [Element] -> Dom ()
client html = do
  button <- Dom $ select (byId "time-btn" . from) html
  output <- Dom $ select (byId "time-out" . from) html
  fetch button output

data Datum = Datum String Integer
instance JsonSerialisable Datum where
  fromJson Nothing = Datum "Couldn't retrieve server info" (-1)
  fromJson (Just x) = Datum key value
                      where key = stringOrError x "key"
                            value = floor $ numberOrNought x "value"

instance Renderable Datum where
  render (Datum s i) = stringToJSString $ s++" "++(show i)

fetch :: Maybe Element -> Maybe Element -> Dom ()
fetch i o = case bind of
  Nothing -> return ()
  Just x  -> x
  where bind = (press i) >>= \signal -> o >>= \out -> Just $ put out signal

press :: Maybe Element -> Maybe (Signal Datum)
press e = do
  elem <- e
  let presses = click elem
  return $ request GET "/ajax" presses