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
import Melchior.Time

main :: IO Element
main = runDom setupLecteur

setupLecteur :: [Element] -> Dom Element
setupLecteur html = do
  content <- Dom $ assuredly $ select (byId "main-container" . from) html
  clicked <- clicks
  focus (fetch clicked) content
  sidebar <- Dom $ select (byClass "items" . from) html
  loader sidebar
  return $ head html

loader :: [Element] -> Dom [()]
loader s = sequence $ (\x -> append x (dropWhen (request GET "/next" $ every second :: Signal Post) (\x -> (title x) == ""))) <$> s

fetch :: Signal JSString -> Signal Post
fetch s = request POST "/post" $ (\x -> toDto $ toIdObj x) <$> s
          where
            toIdObj s = toJsonDict [("id", jsStringToString s)]

clicks :: Dom (Signal JSString)
clicks = delegateOf (Of $ stringToJSString "jsstring") ".article" (MouseEvt ClickEvt) "data-reactive" $ toElement document

focus :: Signal Post -> Element -> Dom ()
focus s e = put e s

data Post = Post { title :: String, body :: String, iden :: Float }
instance JsonSerialisable Post where
  fromJson Nothing = Post "" "" 0
  fromJson (Just p) = Post (stringOrError p "title") (stringOrError p "body") (numberOrNought p "iden")
instance Renderable Post where
   render p = stringToJSString $ show $ constructPost p

constructPost p = JDiv [header, sep, bodyOf]
                  where
                    header = addAttribute "data-reactive" (show $ iden p) $ addClassTo "article title" $ JDiv [Text $ stringToJSString (title p)]
                    sep = addClassTo "separator" $ JDiv [Text $ stringToJSString "&nbsp;"]
                    bodyOf = addClassTo "body" $ JDiv [Text $ stringToJSString (body p)]



