module Comparions.TypedSelection where

import Control.Category

import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.EventSources.Elements
import Melchior.Sink

main :: IO ()
main = runDom typedSelection

typedSelection html = do
  container <- Dom $ select (byId "hs" . from) html
  inputted <- Dom $ select (inputs . byClass "file" . from) container
  numberSelected container inputted
  out <- Dom $ select (byId "hs-out" . from) container
  echo out $ foldl merge (constant $ stringToJSString "") $ map inputValue inputted

numberSelected :: Maybe Element -> [Input] -> Dom ()
numberSelected Nothing _ = return ()
numberSelected (Just container) inputted = append container $ constant $ length inputted

echo :: Maybe Element -> Signal JSString -> Dom ()
echo Nothing _ = return ()
echo (Just out) presses = put out presses