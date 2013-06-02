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
  button <- Dom $ select (byClass "btn-success" . from) html
  container <- Dom $ select (byClass "container-narrow" . from) html

  clicks <- sequence $ clickListener "innerHTML" <$> links

  sequence $ (\click -> click ~> (rmClassFromParentSiblings >>> addClassTo >>> (hideSiblings &&& showCurrent))) <$> clicks
  sequence $ (\click -> click ~> (remote GET "/data" >>> toJson >>> append)) <$> (Melchior.Mouse.click <$> button)

  positionLabel <- Dom $ (select (byId "where-at" . from) html) >>= \m -> return $ fromJust m
  sequence $ (put positionLabel) <$> (Melchior.Mouse.position <$> container)

  counter <- Dom $ (select (byId "when-at" . from) html) >>= \m -> return $ fromJust m
  put counter countSeconds

  clock <- Dom $ (select (byId "clock" . from) html) >>= \m -> return $ fromJust m
  put clock (request GET "/the_time" $ every second :: Signal Time)

  heartbeat <- Dom $ (select (byId "heartbeat" . from) html) >>= \m -> return $ fromJust m
  put heartbeat (server "heartbeat" :: Signal Heartbeat)

  anyButtonClick <- delegate (Of ClickEvt) "button" (MouseEvt ClickEvt)
  anyButtonClickLabel <- Dom $ (select (byId "any-click" . from) html) >>= \m -> return $ fromJust m
  put anyButtonClickLabel anyButtonClick

-- | the todo app
-- | We first have the click listener on check boxes that toggles strikethrough  
  reactiveClicks <- clickDelegate "data-reactive" ".check" (MouseEvt ClickEvt)
  strike reactiveClicks
-- | Then we have the add button
  maybeAddTodo <- Dom $ select (byId "add-todo" . from) html
  let addTodo = fromJust maybeAddTodo --fail if not present
-- | Then we bind some behaviour to the dom      
  addNewTodo $ Melchior.Mouse.click addTodo
  
  return $ UHC.Base.head html

addNewTodo :: Signal a -> Dom ()
addNewTodo s = terminate s (\x -> do
                               input <- select (inputs . byId "todo-in" . from) root
                               values <- value (fromJust input) --hmmmm
                               todo <- return $ Todo $ jsStringToString values
                               ul <- (select (byId "todos" . from) root >>= \m -> return $ fromJust m)
                               Melchior.Dom.append (render todo) ul
                           )
data Todo = Todo String
instance Renderable Todo where
  --todo (i.e. I won't do but would be nice if i I had the time) make composition of html nicer
  render (Todo s) = stringToJSString $ "<li><input type='checkbox' class='check' data-reactive='"++ids++"''/><span id='"++ids++"'>"++s++"</span></li>"
                    where ids = (foldl (++) "" $ (words $ s ++ (jsStringToString $ sample Melchior.Time.current)))
                          
----------------------------------------------------------------------------------------------------------------
-- Some helpful data types
data Time = Time String
time :: Time -> String
time (Time t) = t
instance JsonSerialisable Time where
  fromJson Nothing    = Time "--:--:--"
  fromJson (Just obj) = Time (withDefault $ getJsonString "\"time\"" obj)
                        where withDefault (Just s) = s
                              withDefault Nothing  = "--:--:--"
instance Renderable Time where
  render (Time t) = stringToJSString $ "<a class='link'>"++t++"</a>"

data Heartbeat = Heartbeat String

instance JsonSerialisable Heartbeat where
  fromJson Nothing = Heartbeat "Server unreachable : ("
  fromJson (Just beat) = Heartbeat (withDefault $ getJsonString "\"heart\"" beat)
                         where withDefault (Just s) = s
                               withDefault Nothing = "Server response unparseable : ("

instance Renderable Heartbeat where
  render (Heartbeat h) = stringToJSString $ "<div class='muted'>"++h++"</div>"
----------------------------------------------------------------------------------------------------------------
-- Some helpful functions
countSeconds :: Signal Int
countSeconds = (foldP (\t acc -> acc + 1) 0 (every second))

clickListener :: String -> Element -> Dom (Signal (JSString))
clickListener s e = createEventedSignalOf (Of $ stringToJSString "jsstring") e (MouseEvt ClickEvt) s

clickDelegate :: String -> String -> Event a -> Dom (Signal (JSString))
clickDelegate key pattern event = delegateOf (Of $ stringToJSString "jsstring") pattern event key 

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

strike :: Signal JSString ->  Dom ()
strike s = terminate s (\x -> (select (byId (jsStringToString x) . from) root
                               >>= \el -> (toggle "checked") $ fromJust el))

append :: Signal (Maybe JsonObject) -> Signal (Maybe JSString)
append s = (\x -> x >>= \js -> Melchior.Dom.hack <$> stringToJSString <$> getJsonString "\"data\"" js) <$> s

put :: (Renderable a) => Element -> Signal a -> Dom ()
put el s = terminate s (\x -> return $ set el "innerHTML" $ render x)

----------------------------------------------------------------------------------------------------------------
-- Some particularly unpleasant logging functions
pass :: String -> a -> a
pass s x = primPass (stringToJSString s) x

foreign import js "log(%2, %1)"
  primPass :: JSString -> a -> a
