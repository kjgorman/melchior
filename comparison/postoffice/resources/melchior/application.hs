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
import Melchior.Remote.Json
import Melchior.Remote.XHR
import Melchior.Time

main :: IO Element
main = runDom setupPostOffice

setupPostOffice :: [Element] -> Dom Element
setupPostOffice html = do
  composedMessages <- listenForComposition html
  return $ UHC.Base.head html

listenForComposition :: [Element] -> Dom (Signal String)
listenForComposition html = do
  input <- Dom $ select (inputs . byId "writer" . from) html >>= \m -> return $ ensures m
  send  <- Dom $ select (byId "submit" . from) html >>= \m -> return $ ensures m
  undefined