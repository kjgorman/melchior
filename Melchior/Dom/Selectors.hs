module Melchior.Dom.Selectors where

import Control.Category
import Control.Monad
import Melchior.Dom
import Melchior.Data.List
import Language.UHC.JScript.ECMA.String
import Language.UHC.JScript.Primitives
import Prelude hiding ((.), id)

newtype Selector a b = Selector ([a] -> Dom [b])

instance Functor (Selector a) where
  fmap f (Selector a) = Selector $ a >=> return . liftM f

instance Category Selector where
  id = id
  (Selector a) . (Selector b) = Selector $ b >=> a

foreign import js "log(%2, %1)"
  pass :: JSString -> a -> a
          
get :: (DomNode b) => Selector a b -> [a] -> Dom [b]
get (Selector s) el = s el

byId :: String -> [Element] -> Dom [Element]
byId s e = Dom $ (sequence $ map (primGetById $ stringToJSString s) $ e) >>= \x -> return $ lconcat $ pass (stringToJSString "gbi") x

foreign import js "Selectors.selectById(%2, %1)"
  primGetById :: JSString -> Element -> IO [Element]

byClass :: String -> [Element] -> Dom [Element]
byClass s e = Dom $ (sequence $ map (primGetByClass $ stringToJSString s) $ pass (stringToJSString "elems") e) >>= \x -> return $ lconcat $ pass (stringToJSString "gbc") x

foreign import js "Selectors.selectByClass(%2, %1)"
  primGetByClass :: JSString -> Element -> IO [Element]

byTag :: String -> [Element] -> Dom [Element]
byTag s e = Dom $ (sequence $ map (primGetByTag $ stringToJSString s) $ e) >>= \x -> return $ lconcat $ pass (stringToJSString "gbtn") x

foreign import js "Selectors.selectByTag(%2, %1)"
  primGetByTag :: JSString -> Element -> IO [Element]
