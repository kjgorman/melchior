module Comparison.Concatenations where

import Control.Applicative
import Control.Category
import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.Sink

main :: IO ()
main = runDom setupComparisons

setupComparisons :: [Element] -> Dom ()
setupComparisons html = do
  output <- Dom $ select (byId "hs-output" . from) html
  appendConcatenation output "String to String" $ stringToString "hello " "world"
  appendConcatenation output "Integer to String" $ intToString 5 " + 5"
  appendConcatenation output "ADT to String" $ objectToString (Datum "hello") " world"
  appendConcatenation output "List to ADT" $ listToObject ["hello", "world"] (Datum "how are you")
  appendConcatenation output "Int to ADT" $ intToObject 42 (Datum " the answer, etc")
  appendConcatenation output "Int to List" $ intToList 42 [43, 44]
  appendConcatenation output "ADT to List" $ objectToList (Datum "foo") ["bar", "quux"]
  appendConcatenation output "List to string" $ listToString ["e.g.", "i.e"] "viz."

appendConcatenation :: Maybe Element -> String -> String -> Dom ()
appendConcatenation Nothing _ _ = return ()
appendConcatenation (Just output) s t = append output (constant $ container s t)

container :: String -> String -> Fragment
container s t = JDiv [label, result]
                where label = addClassTo "label" $ JDiv [Text $ stringToJSString s]
                      result = addClassTo "concat" $ JDiv [Text $ stringToJSString t]

stringToString :: String -> String -> String
stringToString s t = s ++ t

intToString :: Int -> String -> String
intToString i s = (show i) ++ s

data Datum = Datum String
instance Show Datum where
  show (Datum s) = "[Datum: "++s++"]"

objectToString :: Datum -> String -> String
objectToString d s = (show d) ++ s

listToObject :: Show a => [a] -> Datum -> String
listToObject xs d = (show xs) ++ (show d)

intToObject :: Int -> Datum -> String
intToObject i d = (show i) ++ (show d)

intToList :: Show a => Int -> [a] -> String
intToList i xs = (show i) ++ (show xs)

objectToList :: Show a => Datum -> [a] -> String
objectToList d xs = (show d) ++ (show xs)

listToString :: Show a => [a] -> String -> String
listToString xs s = (show xs) ++ s