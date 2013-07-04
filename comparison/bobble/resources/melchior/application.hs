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
data Player = Player { x :: Int, y :: Int, vx :: Float, vy :: Float, score :: Int }
data Ball   = Ball Int Int Float Float

setupBobble html = do
  canvas <- Dom $ assuredly $ select (canvases . byId "canvas" . from) html
  context <- return $ contextOf canvas
  game <- return $ Game (Player 50 350 0 0 0) (Player 650 350 0 0 0) (Ball 350 50 3 1)
  keys <- return $ keyCode $ keyDownSignal (toElement document)
  play game context keys
  return $ toElement canvas

play :: Game -> Context -> Signal Int -> Dom ()
play g context keys = terminate (after frame)
                      (\_ -> do
                          drawBackground context
                          h <- return $ scoreG $ collide $ move g (takes keys)
                          drawGameElements h context
                          let Dom io = play h context keys in io)

scoreG :: Game -> Game
scoreG g@(Game _ _ (Ball x y _ _)) = if y > 350 then reset $ scoreP (x < 375) g else g

reset :: Game -> Game
reset (Game p1 p2 _) = Game p1 p2 (Ball 350 50 3 1)

scoreP :: Bool -> Game -> Game
scoreP True (Game (Player x y vx vy s) p b) = Game (Player x y vx vy (s+1)) p b
scoreP False (Game p (Player x y vx vy s) b) = Game p (Player x y vx vy (s+1)) b

drawBackground :: Context -> IO ()
drawBackground c = do
  let Dom io = rectangle 0 350 750 400 (fillStyle c "#999") in io
  let Dom io = rectangle 0 0 750 350 (fillStyle c "#FFF") in io
  let Dom io = rectangle 375 320 1 60 (fillStyle c "#3F3") in io

drawGameElements :: Game -> Context -> IO ()
drawGameElements (Game p1 p2 b) c = do
  drawScores (score p1) (score p2) (fillStyle c black)
  drawPlayer p1 (fillStyle c red)
  drawPlayer p2 (fillStyle c blue)
  drawBall b (fillStyle c green)

drawScores :: Int -> Int -> Context -> IO ()
drawScores p1 p2 c = do
  let Dom io = text (show p1) 25 50 (fillStyle (fontStyle c "40pt Helvetica") black) in io
  let Dom io = text (show p2) 650 50 (fillStyle (fontStyle c "40pt Helvetica") black) in io

drawPlayer :: Player -> Context -> IO ()
drawPlayer p c = let Dom io = circle (x p) (y p) 25 c in io

drawBall :: Ball -> Context -> IO ()
drawBall (Ball x y _ _) c = let Dom io = circle x y 10 c in io

collide :: Game -> Game
collide (Game p1 p2 b) = Game (collideP p1) (collideP p2) (collideB p1 p2 b)

collideP :: Player -> Player
collideP p = if ((abs $ (x p) - 375) < 25) || ((x p) < 25) || ((x p) > 700)
             then Player (x p) (y p) ((vx p)* (-1)) (vy p) (score p)
             else p

collideB :: Player -> Player -> Ball -> Ball
collideB p1 p2 b = collideWith p1 $ collideWith p2 b

collideWith :: Player -> Ball -> Ball
collideWith p (Ball bx by vx vy) = if ((x p - bx)^2 + (y p - by)^2) < (25^2)
                                   then (Ball bx by (-vy) vx)
                                   else (Ball bx by vx vy)

move :: Game -> Int -> Game
move (Game p1 p2 b) i = if i > 40
                        then Game (gravitate $ moveP p1 i) (gravitate $ moveP p2 (-1)) (moveB b)
                        else Game (gravitate $ moveP p1 (-1)) (gravitate $ moveP p2 i) (moveB b)
dv = 5.0
moveP :: Player -> Int -> Player
moveP p i = if (i == 37 || i == 65)
            then Player ((x p) + (round (vx p))) (y p) ((vx p) - dv) (vy p) (score p)
            else if (i == 38 || i == 87)
                 then (if (y p) == 350
                       then Player (x p) ((y p) + (round (vy p))) (vx p) ((vy p) - 5*dv) (score p)
                       else Player ((x p) + (round (vx p))) ((y p) + (round (vy p))) ((vx p)*0.9) ((vy p)*0.9) (score p))
                 else
                   if (i == 39 || i == 68)
                   then Player ((x p) + (round (vx p))) (y p) ((vx p) + dv) (vy p) (score p)
                   else Player ((x p) + (round (vx p))) ((y p) + (round (vy p))) ((vx p)*0.9) ((vy p)*0.9) (score p)

gravitate (Player x y vx vy s) = Player x (if y > 350 then 350 else y) vx (vy+0.5) s

moveB :: Ball -> Ball
moveB (Ball x y vx vy) = Ball (x+(round vx)) (y+(round vy)) (vx) (vy+0.1)
