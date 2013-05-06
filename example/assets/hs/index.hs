import Control.Category hiding ((>>>), (<<<))
import Melchior.Control
import Melchior.Data.List
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
import Prelude hiding ((.), id, head, map)

main :: IO Element
main = runDom $ \html -> do
  setupNavLinks html
  setupClickListeners html
  setupMainButton html
  return $ toElement html

setupNavLinks :: Document -> Dom Element
setupNavLinks = \html -> do
  --element selection is here
  content <- head $ get (Selector $ byId "jumbotron") $ [toElement html]
  links <- get (Selector $ byClass "link") $ [toElement html]
  --signal creation is here
  clickEvents <- return $ map clickListener links
  --and we can then pipe signals of events through a function
  return $ map (removeSiblingClass "active" >>>
                (addClassToParent "active" &&&
                 (addSiblingClassTo "foo" >>> removeClassFrom "hidden"))) clickEvents
  --and some arbitrary return is here
  head $ return links

setupClickListeners :: Document -> Dom Element
setupClickListeners = \html -> do
  checkBoxes <- get (Selector $ byClass "check") $ [toElement html]
  return $ map strike $ map clickListener checkBoxes
  head $ return checkBoxes

setupMainButton :: Document -> Dom Element
setupMainButton = \html -> do
  mainButton <- head $ get (Selector $ byClass "btn-success") $ [toElement html]
  return $ strike $ clickListener mainButton
  return mainButton

clickListener :: Element -> Signal JSString
clickListener e = createEventedSignalOf (Of $ stringToJSString "string") e (MouseEvt ClickEvt) "innerHTML"
                                  
removeSiblingClass :: String -> SF JSString JSString
removeSiblingClass cls s = pipe s (\x -> passThrough x $ map stripClass $ siblings $ parentOf $ source $ s)
                          where
                            stripClass = (removeClass $ stringToJSString cls)

addSiblingClassTo :: String -> SF JSString (Dom JSString)
addSiblingClassTo cls s = pipe s (\x -> (head $ get (Selector $ byId $ jsStringToString x) $ [toElement document])
                                        >>= \y -> return $ pass (stringToJSString "passing thru") $ passThrough x $ map (addClass $ stringToJSString cls) $ siblings $ y)

removeClassFrom :: String -> SF (Dom JSString) (Dom JSString)
removeClassFrom  cls s = pipe s (\x -> x >>= \y -> (head $ get (Selector $ byId $ jsStringToString y) $ [toElement document])
                                         >>= \z -> return $ removeClass (stringToJSString cls) z)

addClassToParent :: String -> SF JSString JSString
addClassToParent cls s = pipe s (\x -> addClass (stringToJSString cls) $ parentOf $ source s)
                  

strike :: SF JSString JSString
strike s = pipe s (\x -> toggle (stringToJSString "checked") $ UHC.Base.head $ siblings $ source s)

--
--here be dragons / unimplementedness

foreign import js "log(%2, %1)"
  log :: Element -> JSString -> Dom ()

foreign import js "log(%2, %1)"
  pass :: JSString -> a -> a
