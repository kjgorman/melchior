module Comparisons.PostOffice where

import Control.Category hiding ((>>>), (<<<))
import Prelude hiding ((.), id)

import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Drawing
import Melchior.Dom.Selectors
import Melchior.Time

main :: IO Element
main = runDom setupBobble

frame = 17 -- ~16.66ms / 60fps

data Game   = Game Player Player Ball
data Player = Player Int Int Int
data Ball   = Ball Int Int

setupBobble html = do
  canvas <- Dom $ assuredly $ select (canvases . byId "canvas" . from) html
  context <- return $ contextOf canvas
  game <- return $ Game (Player 50 250 0) (Player 65 250 0) (Ball 350 50)
  play game context $ every frame
  return $ toElement canvas

play :: Game -> Context -> Signal a -> Dom ()
play g context s = terminate s (\_ -> do
                                   drawBackground context
                               )

drawBackground :: Context -> IO ()
drawBackground c = io
                   where Dom io = do
                           rectangle 0 350 750 400 (fillStyle c "#999")