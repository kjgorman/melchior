module Comparisons.Lecteur where

import Control.Category
import Control.Applicative

import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.Remote.Json
import Melchior.Remote.XHR

main :: IO Element
main = runDom setupLecteur

setupLecteur :: [Element] -> Dom Element
setupLecteur html = do
  clicked <- articles html
  streamer <- return $ map fetch clicked
  content <- Dom $ assuredly $ select (byId "main-container" . from) html
  sequence $ map (\p -> focus p content) streamer
  return $ head html

articles :: [Element] -> Dom [Signal JSString]
articles html = do
  articles <- Dom $ select (byClass "article" . from) html
  sequence $ map clicks articles

fetch :: Signal JSString -> Signal Post
fetch s = request POST "/post" $ (\x -> toDto $ toIdObj x) <$> s
          where
            toIdObj s = JsonObject [JsonPair (JsonString "id", JsonString $ jsStringToString s)]

clicks :: Element -> Dom (Signal JSString)
clicks e = createEventedSignalOf (Of $ stringToJSString "jsstring") e (MouseEvt ClickEvt) "data-reactive"

focus :: Signal Post -> Element -> Dom ()
focus s e = put e s

data Post = Post { title :: String, body :: String }
instance JsonSerialisable Post where
  fromJson Nothing = Post "" ""
  fromJson (Just p) = Post (stringOrError p "title") (stringOrError p "body")
instance Renderable Post where
  render p = stringToJSString $ "<div class='title'>"++(title p)++"</div><div class='separator'>&nbsp</div><div class='body'>"++(body p)++"</div>"


