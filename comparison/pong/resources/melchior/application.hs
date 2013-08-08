module Comparisons.Pong where

import Control.Applicative ((<$>))
import Control.Category
import Prelude hiding ((.), id)

import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Drawing
import Melchior.Dom.Selectors
import Melchior.EventSources.Keyboard
import Melchior.Sink
import Melchior.Time

main :: IO ()
main = runDom setupPong
-- * rates
frame = 16 -- ~60 fps
delta = 200 * 1 / 35
-- * models
data Game = Game Player Player Ball
data Player = Player {x :: Float, y :: Float, mv :: Int, score :: Int }
data Ball = Ball { bx :: Float, by :: Float, vx :: Float, vy :: Float }
initial = Game (Player 15 200 0 0) (Player 575 200 0 0) (Ball 350 200 delta 0)
-- * signals
keys = presses $ toElement document
tick = (\_ -> takes keys) <$> every frame

state = foldp next initial tick
        where next key game = scoreg $ collide $ step $ pop (fst key) $ push (snd key) $ game

display :: Signal Game -> Context -> Dom ()
display g ctx = terminate g (\g -> do
                                back ctx
                                let Dom io = elems g ctx in io)
-- * network
setupPong :: [Element] -> Dom ()
setupPong html = do
  canvas <- Dom $ assuredly $ select (canvases . byId "canvas" . from) html
  let context = contextOf canvas
  display state context

-- * game logic
push :: Int -> Game -> Game
push i (Game p1 p2 b) = Game (transition p1 i 87 83 1) (transition p2 i 38 40 1) b

pop :: Int -> Game ->  Game
pop i (Game p1 p2 b) = Game (transition p1 i 87 83 0) (transition p2 i 38 40 0) b

transition :: Player -> Int -> Int -> Int -> Int -> Player
transition p i u d m | i == u = Player (x p) (y p) ((-1)*m) (score p)
                     | i == d = Player (x p) (y p) (1*m) (score p)
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
scoreg (Game p1 p2 b) | reset b = Game (score' p1 b (< 10)) (score' p2 b (> 480)) (Ball 350 200 5 5)
                      | otherwise = Game p1 p2 b

score' :: Player -> Ball -> (Float -> Bool) -> Player
score' p b c = if c (bx b) then Player (x p) (y p) (mv p) ((score p) + 1) else p

reset :: Ball -> Bool
reset b = (bx b) < 10 || (bx b) > 790

-- * effectful actions
elems :: Game -> Context -> Dom ()
elems (Game p1 p2 b) c = do
  rectangle ((floor $ x p1)-10) ((floor $ y p1)-35) 20 70 (fillStyle c "#FFF")
  rectangle (floor $ x p2) ((floor $ y p2)-35) 20 70 (fillStyle c "#FFF")
  text (show $ score p1) 100 50 (fontStyle c "20pt Helvetica")
  text (show $ score p2) 500 50 (fontStyle c "20pt Helvetica")
  circle (floor $ bx b) (floor $ by b) 10 (fillStyle c "#FFF")

back :: Context -> IO ()
back c = do
  let Dom io = rectangle 0 0 600 400 (fillStyle c "#3C643C") in io
