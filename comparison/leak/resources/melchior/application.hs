module Comparisons.Memory where

import Control.Category
import Prelude hiding ((.), id)
import Control.Applicative

import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Selectors
import Melchior.Time
import Melchior.Sink

main :: IO ()
main = runDom consume

consume :: [Element] -> Dom ()
consume html = do
  container <- Dom $ assuredly $ select (byId "main-content" . from) html
  printTo container

thunk = foldp (\t acc -> (show t++"a string of some kind that will become a thunk on the heap"):acc) ["foo"] (every 100)

printTo :: Element -> Dom ()
printTo c = append c $ (\_ -> sample thunk) <$> (every minute)