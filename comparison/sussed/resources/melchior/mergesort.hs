module Sussed.MergeSort where

import Melchior.Data.String

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

main = return $! stringToJSString $ show $ msort [1,9,7,4,6,3,2,7,5,3,7,9,7,4,2,5,7,8,5,4,3,6,7,8,6,5,4,3,2,4,5,6]