module Melchior.Dom.Selectors where

import Control.Monad
import Melchior.Dom
import Language.UHC.JScript.ECMA.String
import Language.UHC.JScript.Primitives

newtype Selector a b = Selector ([a] -> [Dom b])

instance Functor (Selector a) where
  fmap f (Selector a) = Selector $ a >=> return . liftM f

get :: (DomNode b) => Selector a b -> [a] -> [Dom b]
get (Selector s) el = map (return . force) $! s el

byId :: String -> [Element] -> [Dom Element]
byId s e = map (primGetById $ stringToJSString s) e

byClass :: String -> [Element] -> [Dom Element]
byClass s e = map (primGetByClass $ stringToJSString s) e

foreign import js "selectById(%2, %1)"
  primGetById :: JSString -> Element -> Dom Element

foreign import js "selectByClass(%2, %2)"
  primGetByClass :: JSString -> Element -> Dom Element
