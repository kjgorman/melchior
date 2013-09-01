module Melchior.Crypto where

import Melchior.Data.String

md5 :: String -> String
md5 s = jsStringToString $ primMd5 $ stringToJSString s

foreign import js "Crypto.md5(%1)"
  primMd5 :: JSString -> JSString