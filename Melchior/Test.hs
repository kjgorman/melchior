module Melchior.Test
       (
         expects
       ) where

import Melchior.Data.String

expects :: String -> a -> a
expects s a = mexpects (stringToJSString s) a

foreign import js "Melchior.expects(%1, %2)"
  mexpects :: JSString -> a -> a