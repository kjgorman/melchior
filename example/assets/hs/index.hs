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
  return $ toElement html

setupNavLinks :: Document -> Dom Element
setupNavLinks = \html -> do
  links <- Dom $ runSelector (byClass "link") [toElement html]
  clicks <- return $ map (clickListener "innerHTML") links
  return $ toElement html

runSelector :: Selector a b -> a -> IO b
runSelector (Selector s) = s

addClassTo :: Signal JSString -> Signal (IO (Maybe JSString))--hmmm
addClassTo s = pipe s (\x -> (runSelector (byId $ jsStringToString x) [toElement document])
                             >>= (\x -> return $ fmap (addClass $ stringToJSString "active") x))
                        

clickListener :: String -> Element -> Signal JSString
clickListener s e = createEventedSignalOf (Of $ stringToJSString "jsstring") e (MouseEvt ClickEvt) s

foreign import js "log(%2, %1)"
  pass :: JSString -> a -> a
