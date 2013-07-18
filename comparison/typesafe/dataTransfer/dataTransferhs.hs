module Comparisons.DataTransfer where

import Control.Category
import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.EventSources.Mouse
import Melchior.Remote.XHR
import Melchior.Remote.Json

main :: IO ()
main = runDom setupDataTransfer

setupDataTransfer :: [Element] -> Dom ()
setupDataTransfer html = do
  output <- Dom $ select (byId "hs-output" . from) html
  transfer output

transfer :: Maybe Element -> Dom ()
transfer Nothing = return ()
transfer (Just el) = definiteTransfer el

definiteTransfer :: Element -> Dom ()
definiteTransfer el = append el dataSignal

dataSignal :: Signal Datum
dataSignal = request GET "/data" $ click $ toElement document

data Datum = Datum { header :: String, body :: String, footer :: String }

instance Renderable Datum where
  render x = render $ JDiv [theader, tbody, tfooter]
              where theader = addClassTo "header" $ JDiv [Text $ stringToJSString $ header x]
                    tbody   = addClassTo "body"   $ JDiv [Text $ stringToJSString $ body x  ]
                    tfooter = addClassTo "footer" $ JDiv [Text $ stringToJSString $ footer x]

instance JsonSerialisable Datum where
  fromJson Nothing = Datum "" "" ""
  fromJson (Just x) = Datum (def "header" x) (def "body" x) (def "footer" x)
                      where
                        def key obj = case getJsonString key obj of
                          Nothing -> key++" missing"
                          Just value -> value