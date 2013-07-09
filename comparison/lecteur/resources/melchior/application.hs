module Comparisons.Lecteur where

import Control.Category
import Control.Applicative

import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors
import Melchior.Remote.Json
import Melchior.Remote.XHR

main :: IO Element
main = runDom setupLecteur

setupLecteur :: [Element] -> Dom Element
setupLecteur html = do
  clicked <- articles html
  return $ map fetch clicked
  return $ head html

articles :: [Element] -> Dom [Signal JSString]
articles html = do
  articles <- Dom $ select (byClass "article" . from) html
  return $ map clicks articles

fetch :: Signal JSString -> Signal Post
fetch s = request GET "/post" $ (\x -> toDto $ toIdObj x) <$> s
          where
            toIdObj s = JsonObject [JsonPair (JsonString "id", JsonString $ jsStringToString s)]

clicks :: Element -> Signal JSString
clicks e = createEventedSignal (Of $ stringToJSString "jsstring") e (MouseEvt ClickEvt)

data Post = Post { title :: String, body :: String }
instance JsonSerialisable Post where
  fromJson Nothing = Post "" ""
  fromJson (Just p) = Post (stringOrError p "title") (stringOrError p "body")


