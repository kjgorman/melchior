module Comparison.FieldAccess where

import Control.Applicative
import Control.Category
import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.Sink

main :: IO ()
main = runDom setupAccess

data Object = Object { x :: Int, y :: String, z :: [Int] }
anObject = Object 5 "6" [7]

setupAccess :: [Element] -> Dom ()
setupAccess html = do
  output <- Dom $ select (byId "hs-output" . from) html
  appendAccess output "Simple access" (show $ x anObject)
--  appendAccess output "Missing field" (show $ a anObject)
--  "names not in scope: a (Value)"


appendAccess :: Maybe Element -> String -> String -> Dom ()
appendAccess Nothing _ _ = return ()
appendAccess (Just output) s t = append output (constant $ container s t)

container :: String -> String -> Fragment
container s t = JDiv [label, result]
                where label = addClassTo "label" $ JDiv [Text $ stringToJSString s]
                      result = addClassTo "concat" $ JDiv [Text $ stringToJSString t]
