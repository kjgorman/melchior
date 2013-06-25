module Comparisons.Sussed where

import Control.Category hiding ((>>>), (<<<))
import Control.Applicative
import Prelude hiding ((.), id)

import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors
import Melchior.Remote.Internal.ParserUtils

main :: IO Element
main = runDom setupSorting

setupSorting :: [Element] -> Dom Element
setupSorting html = do
  manualSorting html
  return $ UHC.Base.head html


manualSorting html = do
  inp <- Dom $ select (byId "inp" . from) html >>= \m -> return $ ensures m
  out <- Dom $ select (byId "quick" . from) html >>= \m -> return $ ensures m
  input <- return $ createEventedSignal (Of "string") inp (ElementEvt InputEvt)
  put out ((\_ -> qsort $ parseToNumbers $ value $ toInput inp) <$> input)

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
