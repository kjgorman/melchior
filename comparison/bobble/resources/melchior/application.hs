module Comparisons.Bobble where

import Control.Category hiding ((>>>), (<<<))
import Prelude hiding ((.), id)

import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Drawing
import Melchior.Dom.Selectors
import Melchior.EventSources.Keyboard
import Melchior.Time

main :: IO ()
main = runDom setupBobble

frame = 17 -- ~16.66ms / 60fps

data Game   = Game Player Player Ball
data Player = Player { x :: Int, y :: Int, vx :: Float, vy :: Float, score :: Int }
data Ball   = Ball { xb :: Int, yb :: Int, vxb :: Float, vyb :: Float }

setupBobble html = do
  canvas <- Dom $ assuredly $ select (canvases . byId "canvas" . from) html
  let context = contextOf canvas
      game = Game (Player 50 350 0 0 0) (Player 650 350 0 0 0) (Ball 350 50 4 2)
      keys = keyCode $ keyDownSignal (toElement document)
  play game context keys

play :: Game -> Context -> Signal Int -> Dom ()
play g context keys = terminate (after frame)
                      (\_ -> do
                          drawBackground context
                          h <- return $ scoreG $ collide $ move g $ takes keys
                          drawGameElements h context
                          let Dom io = play h context keys in io)

scoreG :: Game -> Game
scoreG g@(Game _ _ b) = if yb b > 360 then reset $ scoreP (xb b < 375) g else g

reset :: Game -> Game
reset (Game p1 p2 _) = Game p1 p2 (Ball 350 50 4 4)

scoreP :: Bool -> Game -> Game
scoreP False (Game (Player x y vx vy s) p b) = Game (Player x y vx vy (s+1)) p b
scoreP True  (Game p (Player x y vx vy s) b) = Game p (Player x y vx vy (s+1)) b

drawBackground :: Context -> IO ()
drawBackground c = do
  let Dom io = rectangle 0 350 750 400 (fillStyle c "#999") in io
  let Dom io = rectangle 0 0 750 350 (fillStyle c "#FFF") in io
  let Dom io = rectangle 375 320 1 60 (fillStyle c "#3F3") in io

drawGameElements :: Game -> Context -> IO ()
drawGameElements (Game p1 p2 b) c = do
  drawScores (score p1) (score p2) c
  drawPlayer p1 (fillStyle c red)
  drawPlayer p2 (fillStyle c blue)
  drawBall b (fillStyle c green)

drawScores :: Int -> Int -> Context -> IO ()
drawScores p1 p2 c = do
  let Dom io = text (show p1) 25 50 (fontStyle c "40pt Helvetica") in io
  let Dom io = text (show p2) 650 50 (fontStyle c "40pt Helvetica") in io

drawPlayer :: Player -> Context -> IO ()
drawPlayer p c = let Dom io = circle (x p) (y p) 25 c in io

drawBall :: Ball -> Context -> IO ()
drawBall b c = let Dom io = circle (xb b) (yb b) 10 c in io

collide :: Game -> Game
collide (Game p1 p2 b) = Game (collideP p1) (collideP p2) (collideBWall $ collideB p1 p2 b)

collideP :: Player -> Player
collideP p = if ((abs $ (x p) - 375) < 25) || ((x p) < 25) || ((x p) > 700)
             then Player (x p) (y p) ((vx p)* (-1)) (vy p) (score p)
             else p

collideB :: Player -> Player -> Ball -> Ball
collideB p1 p2 b = collideWith p1 $ collideWith p2 b

collideBWall :: Ball -> Ball
collideBWall b = if (xb b) < 10 || (xb b) > 740 then Ball (xb b) (yb b) ((vxb b)*(-1)) (vyb b) else b

collideWith :: Player -> Ball -> Ball
collideWith p b = if ((x p - (xb b))^2 + (y p - (yb b))^2) < (25^2) then collision p b else b

collision :: Player -> Ball -> Ball
collision p b = Ball ((xb b) + 2*(round $ fst v')) ((yb b) + 2*(round $ snd v')) (fst v') (snd v')
  where
    n  = normalisedVectorBetween (x p, y p) ((xb b), (yb b))
    a1 = dot ((vxb b), (vyb b)) n
    a2 = dot (vx p, vy p) n
    op = (2.0 * (a2 - a1))/4
    v' = prod (-0.95) $ diff ((vxb b), (vyb b)) (prod op $ prod 2 n)

normalisedVectorBetween :: (Int, Int) -> (Int, Int) -> (Float, Float)
normalisedVectorBetween a b = (dx/d, dy/d)
                    where
                      d  = sqrt $ (dx * dx) + (dy * dy)
                      dx = fromIntegral (fst a - fst b)
                      dy = fromIntegral (snd a - snd b)

dot :: (Float, Float) -> (Float, Float) -> Float
dot a b = (fst a * fst b) + (snd a * snd b)

prod :: Float -> (Float, Float) -> (Float, Float)
prod s v = ((s*fst v), (s*snd v))

diff :: (Float, Float) -> (Float, Float) -> (Float, Float)
diff a b = ((fst a - fst b), (snd a - snd b))

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
moveB b = Ball ((xb b)+(round (vxb b))) ((yb b)+(round (vyb b))) (vxb b) ((vyb b)+0.25)
