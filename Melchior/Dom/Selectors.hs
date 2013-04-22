module Melchior.Dom.Selectors where

import Control.Category
import Control.Monad
import Melchior.Dom
import Language.UHC.JScript.ECMA.String
import Language.UHC.JScript.Primitives
import Prelude hiding ((.), id)

newtype Selector a b = Selector ([a] -> Dom [b])

instance Functor (Selector a) where
  fmap f (Selector a) = Selector $ a >=> return . liftM f

instance Category Selector where
  id = id
  (Selector a) . (Selector b) = Selector $ b >=> a
  
get :: (DomNode b) => Selector a b -> [a] -> Dom [b]
get (Selector s) el = s el

byId :: String -> [Element] -> Dom [Element]
byId s e = Dom $ sequence $ map (primGetById $ stringToJSString s) e

foreign import js "Selectors.selectById(%2, %1)"
  primGetById :: JSString -> Element -> IO Element

byClass :: String -> [Element] -> Dom [Element]
byClass s e = sequence $ map (primGetByClass $ stringToJSString s) e

foreign import js "Selectors.selectByClass(%2, %2)"
  primGetByClass :: JSString -> Element -> Dom Element
