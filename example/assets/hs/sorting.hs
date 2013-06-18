module Example.Sorting where

import Control.Category hiding ((>>>),(<<<))
import Control.Applicative
import Prelude hiding ((.), id, head, map)

import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.EventSources.Mouse
import Melchior.Remote.Internal.ParserUtils
import Melchior.Time

main :: IO Element
main = runDom setupSorting

setupSorting :: [Element] -> Dom Element
setupSorting html = do
  inp <- Dom $ select (byId "inp" . from) html >>= \m -> return $ ensures m
  ordering <- Dom $ select (byId "numbers" . from) html >>= \m -> return $ ensures m
  input <- return $ createEventedSignal (Of "string") inp (ElementEvt InputEvt)
  put ordering ((\_ -> ensureApplicable $ qsort $ parse $ value $ toInput inp) <$> input)
  return $ UHC.Base.head html

stringListToNumbers :: String -> [Int]
stringListToNumbers s = [2,3,1]

parse :: JSString -> [Int]
parse s = stringListToNumbers $ jsStringToString s

qsort :: Ord a => [a] -> [a]
qsort [] = []
qsort (pivot:rest) = (qsort lesser) ++ [pivot] ++ (qsort greater)
  where
    lesser = filter (< pivot) rest
    greater = filter (>= pivot) rest

put :: (Renderable a) => Element -> Signal (a) -> Dom ()
put el s = terminate s (\x -> return $ set el "innerHTML" $ render x)
