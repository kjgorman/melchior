import Control.Category hiding ((>>>), (<<<))
import Data.Maybe
import Melchior.Control
import Melchior.Data.List
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors
import Melchior.XHR

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
import Prelude hiding ((.), id, head, map)

main :: IO Element
main = runDom setupNavLinks

setupNavLinks :: Document -> Dom Element
setupNavLinks = \html -> do
  --element selection
  links <- Dom $ select (byClass "link" . children) [toElement html]
  check <- Dom $ select (byClass "check" . children) [toElement html]
  button <- Dom $ select (byClass "btn-success" . children) [toElement html]
  container <- Dom $ select (byClass "container-narrow" . children) [toElement html]
  --reactivity
  clicks <- return $ map (clickListener "innerHTML") links
  reactiveClicks <- return $ map (clickListener "data-reactive") check
  buttonClick <- return $ map (clickListener "innerHTML") button
  mouseMove <- return $ map (\e -> createEventedSignal (Of MouseMove) e (MouseEvt MouseMove)) container
  --signal functions
  -- interesting-ish network
  return $ map (rmClassFromParentSiblings >>> addClassTo >>> (hideSiblings &&& showCurrent) >>> terminal) clicks
  return $ map (strike >>> terminal) reactiveClicks
  -- xhr driven signal
  return $ map ((getXHR GET "/data") >>> append >>> terminal) buttonClick
  return $ map (getCoords >>> putCoords >>> terminal) mouseMove
  return $ toElement html

addClassTo :: SF (IO JSString) (IO JSString)
addClassTo s = pipe s (\x -> do
                             cls <- x
                             elems <- select ((byClass $ jsStringToString cls) . children) [toElement document]
                             return $! map (\y -> (addClass $ stringToJSString "active") $ parentOf y) elems
                             return cls
                      )

rmClassFromParentSiblings :: Signal (JSString) -> Signal (IO JSString)
rmClassFromParentSiblings s = pipe s (\x -> do
                                       elems <- select ((byClass $ jsStringToString x) . children) [toElement document]
                                       return $! map (\y -> (removeClass $ stringToJSString "active") y )
                                               $ concatMap (\x -> siblings $ parentOf x) elems
                                       return x
                                     )

hideSiblings :: Signal (IO JSString) -> Signal (IO (Maybe JSString))
hideSiblings s = pipe s (\x -> do
                               idS <- x
                               elem <- select ((byId $ jsStringToString idS) . children) [toElement document]
                               return $ fmap UHC.Base.head $ fmap (\y -> map (addClass $ stringToJSString "hidden") $ y) $ fmap siblings elem
                        )

showCurrent :: Signal (IO JSString) -> Signal (IO (Maybe JSString))
showCurrent s = pipe s (\x -> do
                            idS <- x
                            elem <- select ((byId $ jsStringToString $ idS) . children) [toElement document]
                            return $! fmap (removeClass $ stringToJSString "hidden") elem
                       )

clickListener :: String -> Element -> Signal (JSString)
clickListener s e = createEventedSignalOf (Of $ stringToJSString "jsstring") e (MouseEvt ClickEvt) s

strike :: Signal JSString -> Signal (IO (Maybe JSString))
strike s = pipe s (\x -> do
                      elem <- select ((byId $ jsStringToString x) .children) [toElement document]
                      return $! fmap (toggle $ stringToJSString "checked") elem
                  )

append :: Signal (JSString) -> Signal (JSString)
append s = pipe s (\x -> Melchior.Dom.append x)

getCoords :: Signal MouseEvent -> Signal (Int, Int)
getCoords s = pipe s (\x -> coords x)

putCoords :: Signal (Int, Int) -> Signal (IO (Maybe (Int, Int)))
putCoords s = pipe s (\x -> do
                            elem <- select (byId "where-at" . children) [toElement document]
                            return $ fmap (\y -> set y (stringToJSString "innerHTML") x) elem
                     )

foreign import js "log(%2, %1)"
  pass :: JSString -> a -> a
