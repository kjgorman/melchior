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
import Melchior.Sink
import Melchior.Time

main :: IO ()
main = runDom setupSorting

setupSorting :: [Element] -> Dom ()
setupSorting html = do
  inp <- Dom $ assuredly $ select (inputs . byId "inp" . from) html
  fetch <- Dom $ assuredly $ select (byId "remote" . from) html
  manualSorting html inp $ pure qsort
  setValue (toInput inp) $ stringify (remote GET "/numbers" (click fetch))

stringify :: Signal JSString -> Signal String
stringify s = (\x -> jsStringToString x) <$> s

manualSorting :: [Element] -> Input -> Signal ([Int] -> [Int]) -> Dom ()
manualSorting html inp sorter = do
  qout <- Dom $ assuredly $ select (byId "quick" . from) html
  mout <- Dom $ assuredly $ select (byId "merge" . from) html
  hout <- Dom $ assuredly $ select (byId "heap" . from) html
  appl <- Dom $ assuredly $ select (byId "applicative" . from) html
  let input = createEventedSignal (Of "string") inp (ElementEvt InputEvt)
  put appl $ sorter <*> ((\_ -> parseToNumbers $ value $ inp) <$> input)
  put qout ((\_ -> qsort $ parseToNumbers $ value $ inp) <$> input)
  put mout ((\_ -> msort $ parseToNumbers $ value $ inp) <$> input)
  put hout ((\_ -> hsort $ parseToNumbers $ value $ inp) <$> input)

merger :: [Signal JSString] -> Signal JSString
merger (x:[]) = x
merger (x:xs) = Melchior.Control.merge x $ merger xs

stringListToNumbers :: String -> [Int]
stringListToNumbers s = case parse numbers s of
  [] -> []
  (x:xs) -> map (\x -> read x) (fst x)

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

data Heap a = Nil | Node a [Heap a]
heapify x = Node x []

hsort :: Ord a =>  [a] -> [a]
hsort h = flattenHeap $ mergeHeaps $ map heapify h
          where
            mergeHeaps = treeFold mergeHeap Nil
            flattenHeap Nil = []
            flattenHeap (Node x heaps) = x:flattenHeap (mergeHeaps heaps)
            mergeHeap h Nil = h
            mergeHeap a@(Node x heaps) b@(Node y heapd)
              | x < y = Node x (b:heaps)
              | otherwise = Node y (a:heapd)

treeFold _ x [] = x
treeFold _ _ [x] = x
treeFold f x (a:b:c) = treeFold f x (f a b : pairFold c)
                       where
                         pairFold (x:y:rest) = f x y : pairFold rest
                         pairFold a = a