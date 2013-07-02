module Melchior.Dom.Drawing (
  -- * Contexts
    Context
  , contextOf
  , fillStyle
  , strokeStyle
  -- * Shapes
  , circle
  , rectangle
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

fillStyle :: Context -> String -> Context
fillStyle c s = primSetFillStyle c (stringToJSString s)

foreign import js "Canvas.setFillStyle(%1, %2)"
  primSetFillStyle :: Context -> JSString -> Context

strokeStyle :: Context -> String -> Context
strokeStyle c s = primSetStrokeStyle c (stringToJSString s)

foreign import js "Canvas.setStrokeStyle(%1, %2)"
  primSetStrokeStyle :: Context -> JSString -> Context

red   = "#FF0000"
green = "#00FF00"
blue  = "#0000FF"

circle :: Int -> Int -> Int -> Context -> Dom ()
circle x y r context = Dom $ primCircle x y r context

foreign import js "Canvas.circle(%4, %1, %2, %3)"
  primCircle :: Int -> Int -> Int -> Context -> IO ()

rectangle :: Int -> Int -> Int -> Int -> Context -> Dom ()
rectangle x y w h c = Dom $ primRectangle x y w h c

foreign import js "Canvas.rectangle(%5, %1, %2, %3, %4)"
  primRectangle :: Int -> Int -> Int -> Int -> Context -> IO ()