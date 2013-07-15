module Comparison.Concatenations where

import Control.Applicative
import Control.Category
import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Html
import Melchior.Dom.Selectors

main :: IO Element
main = runDom setupComparisons

setupComparisons :: [Element] -> Dom Element
setupComparisons html = do
  output <- Dom $ select (byId "hs-output" . from) html
  appendConcatenation output "String to String" (stringToString "hello " "world")
  return $ UHC.Base.head html

appendConcatenation :: Maybe Element -> String -> String -> Dom ()
appendConcatenation Nothing _ _ = return ()
appendConcatenation (Just output) s t = append output (constant $ container s t)

container :: String -> String -> Fragment
container s t = JDiv [label, result]
                where label = addClassTo "label" $ JDiv [Text $ stringToJSString s]
                      result = addClassTo "concat" $ JDiv [Text $ stringToJSString t]


stringToString :: String -> String -> String
stringToString s t = s ++ t