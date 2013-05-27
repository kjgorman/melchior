import Control.Category hiding ((>>>), (<<<))
import Control.Applicative
import Data.Maybe
--all Melchior exports
import Melchior.Control
import Melchior.Data.List
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.Mouse
import Melchior.Remote.Json
import Melchior.Remote.XHR
import Melchior.Time

import Prelude hiding ((.), id, head, map)

main :: IO Element
main = runDom setupNavLinks

setupNavLinks :: [Element] -> Dom Element
setupNavLinks html = do
  --element selection
  links <- Dom $ select (byClass "link" . from) html
  check <- Dom $ select (byClass "check" . from) html
  button <- Dom $ select (byClass "btn-success" . from) html
  container <- Dom $ select (byClass "container-narrow" . from) html
  
  --reactivity
  clicks <- sequence $ clickListener "innerHTML" <$> links
  reactiveClicks <- sequence $ clickListener "data-reactive" <$> check

  --signal functions
  -- interesting-ish network
  sequence $ (\click -> click ~> (rmClassFromParentSiblings >>> addClassTo >>> (hideSiblings &&& showCurrent))) <$> clicks 
  sequence $ (\click -> click ~> strike) <$> reactiveClicks
  sequence $ (\click -> click ~> (remote GET "/data" >>> toJson >>> append)) <$> (Melchior.Mouse.click <$> button)
--  sequence $ (\pos -> pos ~> put "where-at") <$> (Melchior.Mouse.position <$> container)
  
--  countSeconds ~> put "when-at"

  clock <- Dom $ (select (byId "clock" . from) html) >>= \m -> return $ fromJust m
  Dom $ put clock ((request GET "/the_time" >>> isTime) $ every second)

  return $ UHC.Base.head html

data Time = Time String

time :: Time -> String
time (Time t) = t

isTime :: Signal Time -> Signal Time
isTime s = id <$> s

instance JsonSerialisable Time where
  fromJson Nothing    = Time "--:--:--"
  fromJson (Just obj) = Time (withDefault $ getJsonString "\"time\"" obj)
                        where withDefault (Just s) = s
                              withDefault Nothing  = "--:--:--"

toString :: Signal Time -> Signal JSString
toString s = (\x -> stringToJSString $ time x) <$> s

instance Renderable Time where
  render (Time t) = stringToJSString $ "<a class='link'>"++t++"</a>"

countSeconds :: Signal Int
countSeconds = (foldP (\t acc -> acc + 1) 0 (every second))

clickListener :: String -> Element -> Dom (Signal (JSString))
clickListener s e = createEventedSignalOf (Of $ stringToJSString "jsstring") e (MouseEvt ClickEvt) s

addClassTo :: SF (IO JSString) (IO JSString)
addClassTo s = (\x -> do
                         cls <- x
                         elems <- select ((byClass $ jsStringToString cls) . from) root
                         return $! map (\y -> (addClass "active") $ parentOf y) elems
                         return cls) <$> s

rmClassFromParentSiblings :: Signal (JSString) -> Signal (IO JSString)
rmClassFromParentSiblings s = (\x -> do
                                   elems <- select ((byClass $ jsStringToString x) . from) root
                                   return $ map (\y -> (removeClass "active") y ) $ concatMap (\x -> siblings $ parentOf x) elems
                                   return x) <$> s

applyById :: (Maybe Element -> Maybe a) -> Signal (IO JSString) -> Signal (IO (Maybe a))
applyById op s = (\x -> x >>= \idS -> op <$> select ((byId $ jsStringToString idS) . from) root) <$> s

hideSiblings :: Signal (IO JSString) -> Signal (IO (Maybe JSString))
hideSiblings = applyById (\e -> UHC.Base.head <$> (\y -> map (addClass "hidden") y) <$> (siblings <$> e))

showCurrent :: Signal (IO JSString) -> Signal (IO (Maybe JSString))
showCurrent = applyById (\e -> removeClass "hidden" <$> e)

strike :: Signal JSString -> Signal (IO (Maybe JSString))
strike s = (\x -> do
                  elem <- select ((byId $ jsStringToString x) . from) root
                  return $! toggle "checked" <$> elem) <$> s

append :: Signal (Maybe JsonObject) -> Signal (Maybe JSString)
append s = (\x -> x >>= \js -> Melchior.Dom.append <$> stringToJSString <$> getJsonString "\"data\"" js) <$> s

put :: (Renderable a) => Element -> Signal a -> IO ()
put el s = terminate s (\x -> return ((\y -> set y "innerHTML" $ render x) el))

pass :: String -> a -> a
pass s x = primPass (stringToJSString s) x

foreign import js "log(%2, %1)"
  primPass :: JSString -> a -> a
