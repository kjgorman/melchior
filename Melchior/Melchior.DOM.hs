{-# LANGUAGE EmptyDataDecls #-}
module Melchior.DOM where

import Melchior.Control

data Element
data Dom a = Dom a


instance Monad Dom where
  (Dom a) >>= k = k a
  return a = (Dom a)

foreign import js "%1.addEventListener(%2, %3)"
  bind :: Dom Element -> String -> SF a b -> Dom ()

foreign import js "document.querySelector(%1)"
  select :: String -> Dom Element

foreign import js "%1.value"
  getValue :: Dom Element -> Dom String

foreign import js "%1.innerHTML = %2"
  setHTML :: Dom Element -> String -> Dom ()