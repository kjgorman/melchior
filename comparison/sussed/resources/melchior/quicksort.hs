module Sussed.Quicksort where

import Melchior.Data.String

qsort :: Ord a => [a] -> [a]
qsort [] = []
qsort (pivot:rest) = (qsort lesser) ++ [pivot] ++ (qsort greater)
  where
    lesser = filter (< pivot) rest
    greater = filter (>= pivot) rest

main = return $! stringToJSString $ show $ qsort [1,9,7,4,6,3,2,7,5,3,7,9,7,4,2,5,7,8,5,4,3,6,7,8,6,5,4,3,2,4,5,6]