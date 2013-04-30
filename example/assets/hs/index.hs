import Control.Category
import Melchior.Control
import Melchior.Data.List
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString)
import Prelude hiding ((.), id, head, map)

main :: IO Element
main = runDom $ \html -> do
  setupNavLinks html
  return $ toElement $ html

--Selector $ byTag "LI") >>> (
setupNavLinks :: Document -> Dom Element
setupNavLinks = \html -> do
  content <- head $ get (Selector $ byId "main-content") $ [toElement html]
  links <- pass (stringToJSString "links") $ get (Selector $ byClass "link") $ [toElement html]
  return $ contentSwitcher (map clickListener links) content
  head $ return links

clickListener :: Element -> Signal String
clickListener e = createEventedSignalOf (Of "string") e (MouseEvt ClickEvt) "innerHTML"

contentSwitcher :: [Signal String] -> Element -> [Dom Element]
contentSwitcher signals content = map (\x -> bind x (replaceBody content)) signals

replaceBody :: Element -> String -> Dom ()
replaceBody e s = setBody e s

foreign import js "log(%2, %1)"
  log :: Element -> JSString -> Dom ()

foreign import js "log(%2, %1)"
  pass :: JSString -> a -> a
