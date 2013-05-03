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
  return $ toElement $ html

setupNavLinks :: Document -> Dom Element
setupNavLinks = \html -> do
  --element selection is here
  content <- head $ get (Selector $ byId "jumbotron") $ [toElement html]
  links <- get (Selector $ byClass "link") $ [toElement html]
  --signal creation is here
  clickEvents <- return $ map clickListener links
  --and we can then pipe signals of events through a function
  return $ map (tabClassSwitcher >>> (tabSwitcher &&& (contentSwitcher content))) clickEvents
  --and some arbitrary return is here
  head $ return links

setupClickListeners :: Document -> Dom Element
setupClickListeners = \html -> do
  checkBoxes <- get (Selector $ byClass "check") $ [toElement html]
  checkClick <- return $ map clickListener checkBoxes
  return $ map strike checkClick 
  head $ return checkBoxes
  
clickListener :: Element -> Signal JSString
clickListener e = createEventedSignalOf (Of $ stringToJSString "string") e (MouseEvt ClickEvt) "innerHTML"

contentSwitcher :: Element -> Signal JSString -> Signal (Dom ())
contentSwitcher content signal = pipe signal (replaceBody content)
                                  
tabClassSwitcher :: SF JSString JSString
tabClassSwitcher s = pipe s (\x -> passThrough x $ map stripClass $  siblings $ parentOf $ source $ s)
                          where
                            passThrough x _ = x                                
                            stripClass = (removeClass $ stringToJSString "active")

tabSwitcher :: SF JSString JSString
tabSwitcher s = pipe s (\_ -> addClass (stringToJSString "active") $ parentOf $ source s)
                  
replaceBody :: Element -> JSString -> Dom ()
replaceBody e s = setBody e $ contentFor $ jsStringToString s

strike :: SF JSString JSString
strike s = pipe s (\x -> toggle (stringToJSString "checked") $ UHC.Base.head $ siblings $ source s)

--
--here be dragons / unimplementedness

contentFor :: String -> JSString
contentFor "About" = stringToJSString $ "<div>When in doubt, rip off twitter!</div>"
contentFor "Contact" = stringToJSString $ "<div>kieran.gorman@ecs.vuw.ac.nz</div>"
contentFor "Home" = stringToJSString $ fromTemplate "Home"

--lets pretend there is some template that will return this content...
--(which I mean, there should be at some point in the future...)
fromTemplate :: String -> String
fromTemplate "Home" = "<div class='jumbotron'>\
\          <h1>FRP Demo</h1>\
\          <p class='lead'>foo bar quux</p>\
\          <a class='btn btn-large btn-success' href='#'>Button!</a>\
\        </div>"

foreign import js "log(%2, %1)"
  log :: Element -> JSString -> Dom ()

foreign import js "log(%2, %1)"
  pass :: JSString -> a -> a
