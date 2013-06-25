module Comparisons.Fauxter where

import Control.Category hiding ((>>>), (<<<))
import Control.Applicative
import Prelude hiding ((.), id)

import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.Remote.Json
import Melchior.Remote.XHR
import Melchior.Time

main :: IO Element
main = runDom setupFauxter

setupFauxter :: [Element] -> Dom Element
setupFauxter html = do
  initialiseTabs html
  container <- Dom $ select (byId "container" . from) html >>= \m -> return $ ensures m
  append container (request GET "/next" $ every 10000 :: Signal Fauxt)
  return $ UHC.Base.head html

initialiseTabs html = do
    links <- Dom $ select (byClass "link" . from) html
    clicks <- sequence $ clickListener "innerHTML" <$> links
    sequence $ (\click -> return $ (rmClassFromParentSiblings >>> addClassTo >>> (hideSiblings &&& showCurrent)) click) <$> clicks

data Fauxt = Fauxt { author :: String, body ::  String }
instance JsonSerialisable Fauxt where
  fromJson Nothing  = Fauxt "" ""
  fromJson (Just x) = Fauxt (def $ getJsonString "author" x) (def $ getJsonString "body" x)
                      where def Nothing  = ""
                            def (Just x) = x

instance Renderable Fauxt where
  render x = stringToJSString $ "<div class='row-fluid marketing'><h4>"++(author x)++"</h4><p>"++(body x)++"</p></div>"

addClassTo :: SF (IO JSString) (IO JSString)
addClassTo s = addSingle <$> s
  where addSingle = (\x -> do { cls <- x; elems <- select ((byClass $ jsStringToString cls) . from) root;
                                return $ map (\y -> addClass "active" $ parentOf y) elems; return cls })

rmClassFromParentSiblings :: Signal (JSString) -> Signal (IO JSString)
rmClassFromParentSiblings s = rmSingle <$> s
  where rmSingle = (\x -> do { elems <- select ((byClass $ jsStringToString x) . from) root;
                               return $ map (\y -> (removeClass "active") y ) $ concatMap (\x -> siblings $ parentOf x) elems; return x })

clickListener s e = createEventedSignalOf (Of $ stringToJSString "jsstring") e (MouseEvt ClickEvt) s
applyById op s = (\x -> x >>= \idS -> op <$> select ((byId $ jsStringToString idS) . from) root) <$> s
hideSiblings = applyById (\e -> UHC.Base.head <$> (\y -> map (addClass "hidden") y) <$> (siblings <$> e))
showCurrent = applyById (\e -> removeClass "hidden" <$> e)