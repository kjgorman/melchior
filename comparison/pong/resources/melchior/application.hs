module Comparisons.Pong where

import Control.Category hiding ((>>>), (<<<))
import Prelude hiding ((.), id)

import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Drawing
import Melchior.Dom.Selectors
import Melchior.EventSources.Keyboard
import Melchior.Time

main :: IO ()
main = runDom setupPong

frame = 16 -- ~60 fps
data Game = Game Player Player Ball
data Player = Player {x :: Float, y :: Float, mv :: Int, score :: Int }
data Ball = Ball { bx :: Float, by :: Float, vx :: Float, vy :: Float }

setupPong :: [Element] -> Dom ()
setupPong html = do
  canvas <- Dom $ assuredly $ select (canvases . byId "canvas" . from) html
  let context = contextOf canvas
      game = Game (Player 15 200 0 0) (Player 675 200 0 0) (Ball 350 200 5 5)
      keyd = keyCode $ keyDownSignal (toElement document)
      keyu = keyCode $ keyUpSignal (toElement document)
  play game context keyd keyu

play :: Game -> Context -> Signal Int -> Signal Int -> Dom ()
play game ctx u d = terminate (after frame)
                     (\_ -> do
                         back ctx --my kingdom, my kingdom for a point free style!
                         next <- return $ scoreg $ collide $ step $ pop (takes d) $ push (takes u) game
                         elems next ctx
                         let Dom io = play next ctx u d in io)

back :: Context -> IO ()
back c = do
  let Dom io = rectangle 0 0 700 400 (fillStyle c "#3C643C") in io

push :: Int -> Game -> Game
push i (Game p1 p2 b) = Game (push' p1 i 87 83) (push' p2 i 38 40) b

push' :: Player -> Int -> Int -> Int -> Player
push' p i u d | i == u = Player (x p) (y p) (-1) (score p)
              | i == d = Player (x p) (y p) 1 (score p)
              | otherwise = p

pop :: Int -> Game ->  Game
pop i (Game p1 p2 b) = Game (pop' p1 i 87 83) (pop' p2 i 38 40) b

pop' :: Player -> Int -> Int -> Int -> Player
pop' p i u d | i == u = Player (x p) (y p) 0 (score p)
             | i == d = Player (x p) (y p) 0 (score p)
             | otherwise = p

step :: Game -> Game
step (Game p1 p2 b) = Game (move p1) (move p2) (Ball (bx b + vx b) (by b + vy b) (vx b) (vy b))

move :: Player -> Player
move p | (mv p) == (-1) = Player (x p) ((y p)-10) (mv p) (score p)
       | (mv p) == 1 = Player (x p) ((y p)+10) (mv p) (score p)
       | otherwise = p

collide :: Game -> Game
collide (Game p1 p2 b) = Game (walls p1) (walls p2) (paddle b p1 p2)

walls :: Player -> Player
walls p | (y p) < 35 = Player (x p) 35 0 (score p)
        | (y p) > 365 = Player (x p) 365 0 (score p)
        | otherwise = p

paddle :: Ball -> Player -> Player -> Ball
paddle b p1 p2 = pb p2 $ pb p1 $ wall b

pb p b = if (abs $ (y p) - (by b)) < 40 && (abs $ (x p) - (bx b)) < 10 then Ball (bx b) (by b) ((-1)*vx b) (vy b) else b

wall b | (by b) < 10 || (by b) > 390 = Ball (bx b) (by b) (vx b) ((-1) * vy b)
       | otherwise = b

scoreg :: Game -> Game
scoreg (Game p1 p2 b) | reset b = Game (score' p1 b (< 10)) (score' p2 b (> 780)) (Ball 350 200 5 5)
                      | otherwise = Game p1 p2 b

score' :: Player -> Ball -> (Float -> Bool) -> Player
score' p b c = if c (bx b) then Player (x p) (y p) (mv p) ((score p) + 1) else p

reset :: Ball -> Bool
reset b = (bx b) < 10 || (bx b) > 790

elems :: Game -> Context -> IO ()
elems (Game p1 p2 b) c = do
  let Dom io = rectangle ((floor $ x p1)-10) ((floor $ y p1)-35) 20 70 (fillStyle c "#FFF") in io
  let Dom io = rectangle (floor $ x p2) ((floor $ y p2)-35) 20 70 (fillStyle c "#FFF") in io
  let Dom io = text (show $ score p1) 100 50 (fontStyle c "20pt Helvetica") in io
  let Dom io = text (show $ score p2) 600 50 (fontStyle c "20pt Helvetica") in io
  let Dom io = circle (floor $ bx b) (floor $ by b) 10 (fillStyle c "#FFF") in io