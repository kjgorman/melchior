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
main = runDom setupNavLinks

setupNavLinks :: Document -> Dom Element
setupNavLinks = \html -> do
  links <- Dom $ runSelector (byClass "link" . children) [toElement html]
  clicks <- return $ map (clickListener "innerHTML") links
  return $ map (addClassTo >>> terminal) clicks
  return $ toElement html

runSelector :: Selector a b -> a -> IO b
runSelector (Selector s) = s

addClassTo :: Signal (JSString) -> Signal (IO [JSString])
addClassTo s = pipe s (\x -> do
                             elems <- runSelector ((byClass $ jsStringToString x) . children) [toElement document]
                             return $ fmap (\y -> (addClass $ stringToJSString "active") $ parentOf y) elems
                      )



clickListener :: String -> Element -> Signal (JSString)
clickListener s e = createEventedSignalOf (Of $ stringToJSString "jsstring") e (MouseEvt ClickEvt) s

foreign import js "log(%2, %1)"
  pass :: JSString -> a -> a
