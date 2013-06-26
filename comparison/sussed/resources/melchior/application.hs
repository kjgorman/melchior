module Comparisons.Sussed where

import Control.Category hiding ((>>>), (<<<))
import Control.Applicative
import Prelude hiding ((.), id)

import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.EventSources.Mouse
import Melchior.Dom.Selectors
import Melchior.Remote.XHR
import Melchior.Remote.Internal.ParserUtils
import Melchior.Time

main :: IO Element
main = runDom setupSorting

setupSorting :: [Element] -> Dom Element
setupSorting html = do
  inp <- Dom $ select (byId "inp" . from) html >>= \m -> return $ ensures m
  manualSorting html inp
  fetch <- Dom $ select (byId "remote" . from) html >>= \m -> return $ ensures m
  setValue (toInput inp) $ stringify (remote GET "/numbers" (click fetch))
  return $ UHC.Base.head html

stringify :: Signal JSString -> Signal String
stringify s = (\x -> jsStringToString x) <$> s

manualSorting html inp = do
  qout <- Dom $ select (byId "quick" . from) html >>= \m -> return $ ensures m
  mout <- Dom $ select (byId "merge" . from) html >>= \m -> return $ ensures m
  input <- return $ createEventedSignal (Of "string") inp (ElementEvt InputEvt)
  put qout ((\_ -> qsort $ parseToNumbers $ value $ toInput inp) <$> input)
  put mout ((\_ -> msort $ parseToNumbers $ value $ toInput inp) <$> input)

stringListToNumbers :: String -> [Int]
stringListToNumbers s = case parse numbers s of
  [] -> []
  (x:xs) -> map (\x -> (read x :: Int)) (fst x)

numbers = many1 numberAndDelim
numberAndDelim = do { n <- many1 digit; space; symb "," +++ return []; return n }

parseToNumbers :: JSString -> [Int]
parseToNumbers s = stringListToNumbers $ jsStringToString s

qsort :: Ord a => [a] -> [a]
qsort [] = []
qsort (pivot:rest) = (qsort lesser) ++ [pivot] ++ (qsort greater)
  where
    lesser = filter (< pivot) rest
    greater = filter (>= pivot) rest

msort :: Ord a => [a] -> [a]
msort []  = []
msort [x] = [x]
msort x   = merge (msort one) (msort two)
            where
              one = take half x
              two = drop half x
              half = div (length x) 2

merge :: Ord a => [a] -> [a] -> [a]
merge [] x = x
merge y [] = y
merge (x:xs) (y:ys) = case x < y of
  True -> x : merge xs (y:ys)
  False -> y : merge ys (x:xs)

