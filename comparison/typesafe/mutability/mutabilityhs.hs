module Comparison.Typesafe where

import Control.Category
import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Selectors
import Melchior.EventSources.Mouse
import Melchior.Sink
import Melchior.Time

main :: IO ()
main = runDom setupTimer

setupTimer :: [Element] -> Dom ()
setupTimer html = do
  timer <- Dom . assuredly $ select (byId "content-hs" . from) html
  put timer (elapsed timer)

elapsed :: Element -> Signal Int
elapsed elem = foldp (\c e -> if (just $ fst c) then e+1 else 0) 0 $ (every second & click elem)

just :: Maybe a -> Bool
just Nothing = False
just (Just _) = True
