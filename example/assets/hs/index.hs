import Control.Category hiding ((>>>), (<<<))
import Control.Applicative
import Data.Maybe
--all Melchior exports
import Melchior.Control
import Melchior.Data.List
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors
import Melchior.Mouse
import Melchior.Remote.Json
import Melchior.Remote.XHR
import Melchior.Time

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
import Prelude hiding ((.), id, head, map)

main :: IO Element
main = runDom setupNavLinks

setupNavLinks :: Document -> Dom Element
setupNavLinks = \html -> do
  --element selection
  links <- Dom $ select (byClass "link" . inChildren) docRoot
  check <- Dom $ select (byClass "check" . inChildren) docRoot
  button <- Dom $ select (byClass "btn-success" . inChildren) docRoot
  container <- Dom $ select (byClass "container-narrow" . inChildren) docRoot
  --reactivity
  clicks <- return $ clickListener "innerHTML" <$> links
  reactiveClicks <- return $ clickListener "data-reactive" <$> check
  buttonClick <- return $ clickListener "innerHTML" <$> button
  mouseMove <- return $ (\e -> createEventedSignal (Of MouseMove) e (MouseEvt MouseMove)) <$> container
  --signal functions
  -- interesting-ish network
  return $ map (rmClassFromParentSiblings >>> addClassTo >>> (hideSiblings &&& showCurrent) >>> terminal) clicks
  return $ map (strike >>> terminal) reactiveClicks
  -- xhr driven signal
  return $ map (remote GET "/data" >>> toJson >>> append >>> terminal) buttonClick
--  return $ map (Melchior.Mouse.position >>> put "where-at" >>> terminal) mouseMove
--  return $ (put "when-at" >>> terminal) countSeconds
  return $ toElement html

countSeconds :: Signal Int
countSeconds = (foldP (\t acc -> acc + 1) 0 (every second)) 

clickListener :: String -> Element -> Signal (JSString)
clickListener s e = createEventedSignalOf (Of $ stringToJSString "jsstring") e (MouseEvt ClickEvt) s

addClassTo :: SF (IO JSString) (IO JSString)
addClassTo s = pipe s (\x -> do
                             cls <- x
                             elems <- select ((byClass $ jsStringToString cls) . inChildren) docRoot
                             return $! map (\y -> (addClass "active") $ parentOf y) elems
                             return cls)

rmClassFromParentSiblings :: Signal (JSString) -> Signal (IO JSString)
rmClassFromParentSiblings s = pipe s (\x -> do
                                       elems <- select ((byClass $ jsStringToString x) . inChildren) docRoot
                                       return $! map (\y -> (removeClass "active") y )
                                               $ concatMap (\x -> siblings $ parentOf x) elems
                                       return x)

applyById :: (Maybe Element -> Maybe a) -> Signal (IO JSString) -> Signal (IO (Maybe a))
applyById op s = pipe s (\x -> do
                            idS <- x
                            elem <- select ((byId $ jsStringToString idS) . inChildren) docRoot
                            return $ op elem)

hideSiblings :: Signal (IO JSString) -> Signal (IO (Maybe JSString))
hideSiblings = applyById (\e -> UHC.Base.head <$> (\y -> map (addClass "hidden") y) <$> (siblings <$> e))

showCurrent :: Signal (IO JSString) -> Signal (IO (Maybe JSString))
showCurrent = applyById (\e -> removeClass "hidden" <$> e)

strike :: Signal JSString -> Signal (IO (Maybe JSString))
strike s = pipe s (\x -> do
                      elem <- select ((byId $ jsStringToString x) . inChildren) docRoot
                      return $! toggle "checked" <$> elem)

append :: Signal (Maybe JsonObject) -> Signal (Maybe JSString)
append s = pipe s (\x -> x >>= \js -> fmap Melchior.Dom.append $ fmap stringToJSString $ getJsonString (stringToJSString "\"data\"") js)
                      
put :: String -> Signal a -> Signal (IO (Maybe a))
put ids s = pipe s (\x -> select (byId ids .inChildren) docRoot >>= \e -> return ((\y -> set y "innerHTML" x) <$> e))

pass :: String -> a -> a
pass s x = primPass (stringToJSString s) x

foreign import js "log(%2, %1)"
  primPass :: JSString -> a -> a
