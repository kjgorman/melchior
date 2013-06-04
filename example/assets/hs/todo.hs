module Example.Todo where

import Control.Category hiding ((<<<), (>>>))
import Data.Maybe
import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.EventSources.Mouse
import Melchior.Time

import Prelude hiding ((.), id, head, map)

main :: IO Element
main = runDom setupTodo

setupTodo :: [Element] -> Dom Element
setupTodo html = do
   -- | the todo app
  --  | We first have the click listener on check boxes that toggles strikethrough
  reactiveClicks <- clickDelegate "data-reactive" ".check" (MouseEvt ClickEvt)
  strike reactiveClicks
  -- | Then we have the add button
  maybeAddTodo <- Dom $ select (byId "add-todo" . from) html
  let addTodo = fromJust maybeAddTodo --fail if not present
  -- | Then we bind some behaviour to the dom
  addNewTodo $ Melchior.EventSources.Mouse.click addTodo
  return $ UHC.Base.head html

addNewTodo :: Signal a -> Dom ()
addNewTodo s = terminate s (\x -> do
                               input <- select (inputs . byId "todo-in" . from) root
                               values <- value (fromJust input)
                               todo <- return $ Todo $ jsStringToString values
                               ul <- (select (byId "todos" . from) root >>= \m -> return $ fromJust m)
                               Melchior.Dom.append (render todo) ul
                           )

data Todo = Todo String
instance Renderable Todo where
  --todo (i.e. I won't do but would be nice if i I had the time) make composition of html nicer
  render (Todo s) = stringToJSString $ "<li><input type='checkbox' class='check' data-reactive='"++ids++"''/><span id='"++ids++"'>"++s++"</span></li>"
                    where ids = (foldl (++) "" $ (words $ s ++ (jsStringToString $ sample Melchior.Time.current)))

strike :: Signal JSString ->  Dom ()
strike s = terminate s (\x -> (select (byId (jsStringToString x) . from) root
                               >>= \el -> (toggle "checked") $ fromJust el))

clickDelegate :: String -> String -> Event a -> Dom (Signal (JSString))
clickDelegate key pattern event = delegateOf (Of $ stringToJSString "jsstring") pattern event key