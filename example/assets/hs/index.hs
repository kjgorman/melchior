import Control.Category hiding ((>>>), (<<<))
import Control.Applicative
import Data.Maybe
--all Melchior exports
import Melchior.Control
import Melchior.Data.List
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors
import Melchior.Mouse
import Melchior.Remote.Json
import Melchior.Remote.XHR
import Melchior.Time

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

  --signal functions
  -- interesting-ish network
  sequence $ (\click -> click ~> (rmClassFromParentSiblings >>> addClassTo >>> (hideSiblings &&& showCurrent))) <$> clicks
  sequence $ (\click -> click ~> strike) <$> reactiveClicks
  sequence $ (\click -> click ~> (remote GET "/data" >>> toJson >>> append)) <$> (Melchior.Mouse.click <$> button)
  sequence $ (\pos -> pos ~> put "where-at") <$> (Melchior.Mouse.position <$> container)
  
--  countSeconds ~> put "when-at"

{-  clock <- select $ byId "clock"
    bindBody clock $ every second `when` get "/the_time" <$> showTime-}
  every second ~> (request GET "/the_time" >>> pipeTheTime >>> put "clock")
  return $ toElement html

data Time = Time String

instance JsonSerialisable Time where
  fromJson Nothing    = Time "--:--:--"
  fromJson (Just obj) = Time (withDefault $ getJsonString "\"time\"" obj)
                        where withDefault (Just s) = s
                              withDefault Nothing  = "--:--:--"

pipeTheTime :: SF Time JSString
pipeTheTime s = (\x -> stringToJSString $ time x) <$> s
                      where time (Time t) = t
                            
countSeconds :: Signal Int
countSeconds = (foldP (\t acc -> acc + 1) 0 (every second))

clickListener :: String -> Element -> Signal (JSString)
clickListener s e = createEventedSignalOf (Of $ stringToJSString "jsstring") e (MouseEvt ClickEvt) s

addClassTo :: SF (IO JSString) (IO JSString)
addClassTo s = (\x -> do
                         cls <- x
                         elems <- select ((byClass $ jsStringToString cls) . inChildren) docRoot
                         return $! map (\y -> (addClass "active") $ parentOf y) elems
                         return cls) <$> s

rmClassFromParentSiblings :: Signal (JSString) -> Signal (IO JSString)
rmClassFromParentSiblings s = (\x -> do
                                   elems <- select ((byClass $ jsStringToString x) . inChildren) docRoot
                                   return $ map (\y -> (removeClass "active") y ) $ concatMap (\x -> siblings $ parentOf x) elems
                                   return x) <$> s

applyById :: (Maybe Element -> Maybe a) -> Signal (IO JSString) -> Signal (IO (Maybe a))
applyById op s = (\x -> x >>= \idS -> op <$> select ((byId $ jsStringToString idS) . inChildren) docRoot) <$> s

hideSiblings :: Signal (IO JSString) -> Signal (IO (Maybe JSString))
hideSiblings = applyById (\e -> UHC.Base.head <$> (\y -> map (addClass "hidden") y) <$> (siblings <$> e))

showCurrent :: Signal (IO JSString) -> Signal (IO (Maybe JSString))
showCurrent = applyById (\e -> removeClass "hidden" <$> e)

strike :: Signal JSString -> Signal (IO (Maybe JSString))
strike s = (\x -> do
                  elem <- select ((byId $ jsStringToString x) . inChildren) docRoot
                  return $! toggle "checked" <$> elem) <$> s

append :: Signal (Maybe JsonObject) -> Signal (Maybe JSString)
append s = (\x -> x >>= \js -> Melchior.Dom.append <$> stringToJSString <$> getJsonString "\"data\"" js) <$> s

put :: String -> Signal a -> Signal (IO (Maybe (Dom a)))
put ids s = (\x -> select (byId ids . inChildren) docRoot >>= \e -> return ((\y -> set y "innerHTML" x) <$> e)) <$> s

pass :: String -> a -> a
pass s x = primPass (stringToJSString s) x

foreign import js "log(%2, %1)"
  primPass :: JSString -> a -> a
