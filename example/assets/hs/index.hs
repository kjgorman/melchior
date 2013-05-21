import Control.Category hiding ((>>>), (<<<))
import Control.Applicative
import Data.Maybe
import Melchior.Control
import Melchior.Data.List
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors
import Melchior.Mouse
import Melchior.Time
import Melchior.XHR

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
  clicks <- return $ map (clickListener "innerHTML") links
  reactiveClicks <- return $ map (clickListener "data-reactive") check
  buttonClick <- return $ map (clickListener "innerHTML") button
  mouseMove <- return $ map (\e -> createEventedSignal (Of MouseMove) e (MouseEvt MouseMove)) container
  --signal functions
  -- interesting-ish network
  return $ map (rmClassFromParentSiblings >>> addClassTo >>> (hideSiblings &&& showCurrent) >>> terminal) clicks
  return $ map (strike >>> terminal) reactiveClicks
  -- xhr driven signal
  return $ map (remote GET "/data" >>> append >>> terminal) buttonClick
  return $ map (Melchior.Mouse.position >>> put "where-at" >>> terminal) mouseMove
  return $ (put "when-at" >>> terminal) countSeconds
  return $ toElement html

countSeconds :: Signal Int
countSeconds = (foldP (\t acc -> acc + 1) 0 (every second)) 

addClassTo :: SF (IO JSString) (IO JSString)
addClassTo s = pipe s (\x -> do
                             cls <- x
                             elems <- select ((byClass $ jsStringToString cls) . inChildren) docRoot
                             return $! map (\y -> (addClass "active") $ parentOf y) elems
                             return cls
                      )

rmClassFromParentSiblings :: Signal (JSString) -> Signal (IO JSString)
rmClassFromParentSiblings s = pipe s (\x -> do
                                       elems <- select ((byClass $ jsStringToString x) . inChildren) docRoot
                                       return $! map (\y -> (removeClass "active") y )
                                               $ concatMap (\x -> siblings $ parentOf x) elems
                                       return x
                                     )

hideSiblings :: Signal (IO JSString) -> Signal (IO (Maybe JSString))
hideSiblings s = pipe s (\x -> do
                               idS <- x
                               elem <- select ((byId $ jsStringToString idS) . inChildren) docRoot
                               return $ UHC.Base.head <$> ((\y -> map (addClass "hidden") $ y) <$> (siblings <$> elem))
                        )

showCurrent :: Signal (IO JSString) -> Signal (IO (Maybe JSString))
showCurrent s = pipe s (\x -> do
                            idS <- x
                            elem <- select ((byId $ jsStringToString $ idS) . inChildren) docRoot
                            return $! (removeClass "hidden") <$> elem
                       )

clickListener :: String -> Element -> Signal (JSString)
clickListener s e = createEventedSignalOf (Of $ stringToJSString "jsstring") e (MouseEvt ClickEvt) s

strike :: Signal JSString -> Signal (IO (Maybe JSString))
strike s = pipe s (\x -> do
                      elem <- select ((byId $ jsStringToString x) . inChildren) docRoot
                      return $! toggle "checked" <$> elem
                  )

--TODO, all the gross stuff below this line

append :: Signal (JSString) -> Signal (JSString)
append s = pipe s (\x -> Melchior.Dom.append x)

put :: String -> Signal a -> Signal (IO (Maybe a))
put str sig = pipe sig (\x -> (select (byId str . inChildren) docRoot)
                              >>= \e -> return $ (\y -> set y "innerHTML" x) <$> e)


foreign import js "log(%2, %1)"
  pass :: JSString -> a -> a
