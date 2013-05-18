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
  links <- Dom $ runSelector (byClass "link" . children) [toElement html]
  clicks <- return $ map (clickListener "innerHTML") links
  return $ map (rmClassFromParentSiblings >>> addClassTo >>> (hideSiblings &&& showCurrent) >>> terminal) clicks
  return $ toElement html

addClassTo :: Signal (IO JSString) -> Signal (IO JSString)
addClassTo s = pipe s (\x -> do
                             cls <- x
                             elems <- runSelector ((byClass $ jsStringToString cls) . children) [toElement document]
                             return $! map (\y -> (addClass $ stringToJSString "active") $ parentOf y) elems
                             return cls
                      )

rmClassFromParentSiblings :: Signal (JSString) -> Signal (IO JSString)
rmClassFromParentSiblings s = pipe s (\x -> do
                                       elems <- runSelector ((byClass $ jsStringToString x) . children) [toElement document]
                                       return $! map (\y -> (removeClass $ stringToJSString "active") y )
                                               $ concatMap (\x -> siblings $ parentOf x) elems
                                       return x
                                     )

hideSiblings :: Signal (IO JSString) -> Signal (IO (Maybe JSString))
hideSiblings s = pipe s (\x -> do
                               idS <- x
                               elem <- runSelector ((byId $ jsStringToString idS) . children) [toElement document]
                               return $ fmap UHC.Base.head $ fmap (\y -> map (addClass $ stringToJSString "hidden") $ y) $ fmap siblings elem
                        )

showCurrent :: Signal (IO JSString) -> Signal (IO (Maybe JSString))
showCurrent s = pipe s (\x -> do
                            idS <- x
                            elem <- runSelector ((byId $ jsStringToString $ idS) . children) [toElement document]
                            return $! fmap (removeClass $ stringToJSString "hidden") elem
                       )

clickListener :: String -> Element -> Signal (JSString)
clickListener s e = createEventedSignalOf (Of $ stringToJSString "jsstring") e (MouseEvt ClickEvt) s

foreign import js "log(%2, %1)"
  pass :: JSString -> a -> a
