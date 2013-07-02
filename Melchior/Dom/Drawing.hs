module Melchior.Dom.Drawing (
  -- * Contexts
    Context
  , contextOf
  -- * Shapes
  , circle
  -- * Colours
  , red
  , green
  , blue
  ) where

import Melchior.Dom
import Melchior.Data.String

data Context = Context

contextOf :: Canvas -> Context
contextOf c = primContextForCanvas c

foreign import js "Canvas.canvasToContext(%1)"
  primContextForCanvas :: Canvas -> Context

red   = "FF0000"
green = "00FF00"
blue  = "0000FF"

circle :: Int -> Int -> Int -> String -> String -> Context -> Dom ()
circle x y r fill stroke canvas = Dom $ primCircle x y r (stringToJSString fill) (stringToJSString stroke) canvas

foreign import js "Canvas.circle(%6, %1, %2, %3, %4, %5)"
  primCircle :: Int -> Int -> Int -> JSString -> JSString -> Context -> IO ()