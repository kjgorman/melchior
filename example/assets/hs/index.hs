import Control.Category hiding ((>>>), (<<<))
import Melchior.Control
import Melchior.Data.List
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors
import Melchior.XHR

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
import Prelude hiding ((.), id, head, map)

main :: IO Element
main = runDom $ \html -> do
  setupNavLinks html
  setupClickListeners html
  testXHR html
  return $ toElement html

testXHR :: Document -> Dom Element
testXHR = \html -> do
  button <- head $ get (Selector $ byClass "btn-success") $ [toElement html]
  buttonClick <- return $ clickListener "innerHTML" button
  return $ (getXHR GET "/data" >>> appendEntry) $ liftSignal buttonClick
  return button

setupNavLinks :: Document -> Dom Element
setupNavLinks = \html -> do
  --element selection is here
  content <- head $ get (Selector $ byId "jumbotron") $ [toElement html]
  links <- get (Selector $ byClass "link") $ [toElement html]
  --signal creation is here
  clickEvents <- return $ map (clickListener "innerHTML") links
  --and we can then pipe signals of events through a function
  return $ map (removeSiblingClass "active"   >>>
                addClassToParent   "active"   >>>
                addClassToSiblings "hidden"   >>>
                removeClassFrom    "hidden"   >>>
                terminal) $ map liftSignal clickEvents
  head $ return links

setupClickListeners :: Document -> Dom Element
setupClickListeners = \html -> do
  checkBoxes <- get (Selector $ byClass "check") $ [toElement html]
  clickEvents  <- return $ map (clickListener "data-reactive") checkBoxes
  return $ map (strike >>> terminal) $ map liftSignal clickEvents
  head $ return checkBoxes

clickListener :: String -> Element -> Signal JSString
clickListener s e = createEventedSignalOf (Of $ stringToJSString "jsstring") e (MouseEvt ClickEvt) s

getOne :: (String -> [Element] -> Dom [Element]) -> JSString -> Dom Element
getOne x y = head $ get (Selector $ x $ jsStringToString y) [toElement document]

doSignalIO :: (String -> [Element] -> Dom [Element]) -> (Element -> Dom a) -> Dom JSString -> Dom JSString
doSignalIO sel fn x = do
  y <- x
  elem <- getOne sel y
  fn elem
  x

appendEntry :: SF (Dom JSString) (Dom JSString)
appendEntry s = pipe s (\x -> append x)

foreign import js "Dom.hack(%1)"
  append :: Dom JSString -> Dom JSString
                
addClassToParent :: String -> SF (Dom JSString) (Dom JSString)
addClassToParent cls s = pipe s (\x -> passThrough x $ signalIO $ doSignalIO byClass fn x)
                         where fn = \elem -> return $ addClass (stringToJSString cls) $ parentOf elem

removeSiblingClass :: String -> SF (Dom JSString) (Dom JSString)
removeSiblingClass cls s = pipe s (\x -> passThrough x $ signalIO $ doSignalIO byClass fn x)                                                                                
                          where
                            fn = \elem -> return $ map stripClass $ siblings $ parentOf $ elem
                            stripClass = (removeClass $ stringToJSString cls)

addClassToSiblings :: String -> SF (Dom JSString) (Dom JSString)
addClassToSiblings cls s = pipe s (\x -> passThrough x $ signalIO $ doSignalIO byId fn x)
                           where fn = \elem -> return $ map (addClass $ stringToJSString cls) $ siblings elem
                                       
removeClassFrom :: String -> SF (Dom JSString) (Dom JSString)
removeClassFrom  cls s = pipe s (\x -> signalIO $ doSignalIO byId fn x)
                         where fn = \elem -> return $ removeClass (stringToJSString cls) elem
                
strike :: SF (Dom JSString) (Dom JSString)
strike s = pipe s (\x -> signalIO $ doSignalIO byId fn x)
           where fn = \elem -> return $ toggle (stringToJSString "checked") elem

foreign import js "log(%2, %1)"
  pass :: JSString -> a -> a
