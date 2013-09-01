module Comparison.Emberhome where

import Control.Category
import Prelude hiding ((.), id)
import Control.Applicative

import Melchior.Control
import Melchior.Crypto
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Selectors
import Melchior.EventSources.Elements
import Melchior.Sink
import Melchior.Time

main :: IO ()
main = runDom ember

ember :: [Element] -> Dom ()
ember html = do
  gravatar html
  echoes html

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

gravatar :: [Element] -> Dom ()
gravatar html = do
  gravInput <- Dom $ select (inputs . byId "gravatar-id" . from) html
  gravImg <- Dom $ select (images . byId "gravatar-img" . from) html
  retrieve gravInput gravImg


retrieve :: Maybe Input -> Maybe Image -> Dom ()
retrieve i o = case values of
  Nothing -> return ()
  Just x -> x
  where values = i >>= \x -> o >>= \y -> Just $ terminate (throttle second $ inputValue x) $ setUrl y
        setUrl el = (\s -> return $ set (toElement el) "src" $ path s)
        path s = stringToJSString $ pre ++ (hash s) ++ post
        hash s = md5 $ jsStringToString s
        pre = "http://www.gravatar.com/avatar/"
        post = "?s=200"