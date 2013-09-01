module Comparison.Emberhome where

import Control.Category
import Prelude hiding ((.), id)
import Control.Applicative

import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Selectors
import Melchior.EventSources.Elements
import Melchior.Sink

main :: IO ()
main = runDom echoes

echoes :: [Element] -> Dom ()
echoes html = do
  nameInput <- Dom $ select (inputs . byId "name-in" . from) html
  nameOutput <- Dom $ select (byId "name-out" . from) html
  echo nameInput nameOutput

echo :: Maybe Input -> Maybe Element -> Dom ()
echo i o = case echoed of
  Just x -> x
  Nothing -> return ()
  where echoed = o >>= \x -> i >>= \y -> Just $ put x $ inputValue y