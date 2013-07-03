module Comparisons.Bobble where

import Control.Category hiding ((>>>), (<<<))
import Prelude hiding ((.), id)

import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Drawing
import Melchior.Dom.Selectors
import Melchior.EventSources.Keyboard
import Melchior.Time

main :: IO Element
main = runDom setupBobble

frame = 17 -- ~16.66ms / 60fps

data Game   = Game Player Player Ball
data Player = Player Int Int Int
data Ball   = Ball Int Int Float Float

setupBobble html = do
  canvas <- Dom $ assuredly $ select (canvases . byId "canvas" . from) html
  context <- return $ contextOf canvas
  game <- return $ Game (Player 50 350 0) (Player 650 350 0) (Ball 350 50 1 1)
  keys <- return $ keyCode $ keyDownSignal (toElement document)
  play game context keys
  return $ toElement canvas

play :: Game -> Context -> Signal Int -> Dom ()
play g context keys = terminate (after frame)
                      (\_ -> do
                          drawBackground context
                          h <- return $ collide (move g $ takes keys)
                          drawGameElements h context
                          let Dom io = play h context keys in io)

drawBackground :: Context -> IO ()
drawBackground c = do
  let Dom io = rectangle 0 350 750 400 (fillStyle c "#999") in io
  let Dom io = rectangle 0 0 750 350 (fillStyle c "#FFF") in io
  let Dom io = rectangle 375 320 1 60 (fillStyle c "#3F3") in io

drawGameElements :: Game -> Context -> IO ()
drawGameElements (Game p1 p2 b) c = do
  drawPlayer p1 (fillStyle c red)
  drawPlayer p2 (fillStyle c blue)
  drawBall b (fillStyle c green)

drawPlayer :: Player -> Context -> IO ()
drawPlayer (Player x y _) c = let Dom io = circle x y 25 c in io

drawBall :: Ball -> Context -> IO ()
drawBall (Ball x y _ _) c = let Dom io = circle x y 10 c in io

collide :: Game -> Game
collide (Game p1 p2 b) = Game (collideP p1) (collideP p2) (collideB p1 p2 b)

collideP :: Player -> Player
collideP (Player x y s) = case (abs $ x - 375)  < 25 of
  True -> if x > 375 then Player (x + 10) y s else Player (x - 10) y s
  False -> Player x y s

collideB :: Player -> Player -> Ball -> Ball
collideB _ _ b = b

move :: Game -> Int -> Game
move (Game p1 p2 b) i = case i > 39 of
  True -> Game (moveP p1 i) p2 $ moveB b
  False -> Game p1 (moveP p2 i) $ moveB b

moveP :: Player -> Int -> Player
moveP (Player x y s) i = case i of
  37 -> (Player (x - 5) y s)
  65 -> (Player (x - 5) y s)
  38 -> (Player x (y - 5) s)
  87 -> (Player x (y - 5) s)
  39 -> (Player (x + 5) y s)
  68 -> (Player (x + 5) y s)
  _  -> (Player x y s)

moveB :: Ball -> Ball
moveB (Ball x y vx vy) = Ball (x+(floor vx)) (y+(floor vy)) (vx) (vy)
