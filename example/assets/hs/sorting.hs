module Example.Sorting where

import Control.Category hiding ((>>>),(<<<))
import Control.Applicative
import Prelude hiding ((.), id, head, map)

import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.EventSources.Mouse
import Melchior.Time

main :: IO Element
main = runDom setupSorting

setupSorting :: [Element] -> Dom Element
setupSorting html = do
  ordering <- Dom $ select (byId "numbers" . from) html >>= \m -> return $ ensures m
  put ordering ((\_ -> sample $ constant (qsort [3,4,7,2,4,5,7,43,2,5,7,9,5,3,2,5,7,9,4,2,4,6,7])) <$> every second)
  return $ UHC.Base.head html

qsort :: Ord a => [a] -> [a]
qsort [] = []
qsort (pivot:rest) = (qsort lesser) ++ [pivot] ++ (qsort greater)
  where
    lesser = filter (< pivot) rest
    greater = filter (>= pivot) rest

put :: (Renderable a) => Element -> Signal a -> Dom ()
put el s = terminate s (\x -> return $ set el "innerHTML" $ render x)
