module Comparisons.PostOffice where

import Control.Category hiding ((>>>), (<<<))
import Prelude hiding ((.), id)

import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Drawing
import Melchior.Dom.Selectors

main :: IO Element
main = runDom setupBobble

setupBobble html = do
  canvas <- Dom $ assuredly $ select (canvases . byId "canvas" . from) html
  context <- return $ contextOf canvas
  circle 50 50 50 (fillStyle context "#FF0000")
  return $ toElement canvas

