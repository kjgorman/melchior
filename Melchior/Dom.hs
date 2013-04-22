{-# LANGUAGE EmptyDataDecls #-}
module Melchior.Dom
    ( -- * Types
      Dom
    , Element
    , Document
    , Input
    , Div
      -- * Typeclasses
    , DomNode
      -- * Functions
    , toElement
    , toInput
    , force
    , primDoc
    ) where

import Melchior.Control
import Control.Monad (liftM)
import Language.UHC.JScript.ECMA.String
import Language.UHC.JScript.Primitives

data Dom a = Dom (IO a)
data Node
newtype Element = Element { unEl :: JSPtr Node }
newtype Document = Document {unDoc ::  JSPtr Node }
newtype Input = Input { unIn :: JSPtr Node }
newtype Div = Div { unDiv :: JSPtr Node }

foreign import js "document"
  primDoc :: Document

instance Monad Dom where
  return = Dom . return
  (Dom io) >>= k = Dom $ io >>= \x -> let Dom io' = k x in io'
  
class DomNode a where
  force :: a -> a

instance DomNode Element where
  force el = toElement $ el

instance DomNode Input where
  force i  = toInput $ i

instance DomNode Document where
  force d = toDocument $ d

foreign import js "id(%1)"
  toElement :: a -> Element

foreign import js "filterInputs(%1)"
    filterInputs :: [Element] -> [Element]

--toInput :: [Element] -> [Input]
--toInput els = let ins = filterInputs els in map $ Input . unEl

foreign import js "id(%1)"
  toInput :: a -> Input

foreign import js "id(%1)"
  toDocument :: a -> Document

foreign import js "document"
  document :: Document
{-
getAttr :: String -> Element -> Dom String
getAttr s e = Dom . liftM jsStringToString $ primGetAttr e (stringToJSString s)

foreign import js "%1.getAttribute(%2)"
  primGetAttr :: Element -> JSString -> IO JSString-}
