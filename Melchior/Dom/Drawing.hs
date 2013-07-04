module Melchior.Dom.Drawing (
  -- * Contexts
    Context
  , contextOf
  , fillStyle
  , strokeStyle
  , fontStyle
  -- * Shapes
  , circle
  , text
  , rectangle
  -- * Colours
  , red
  , green
  , blue
  , black
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

fontStyle :: Context -> String -> Context
fontStyle c s = primSetFontStyle c (stringToJSString s)

foreign import js "Canvas.setFontStyle(%1, %2)"
  primSetFontStyle :: Context -> JSString -> Context

red   = "#FF0000"
green = "#00FF00"
blue  = "#0000FF"
black = "#00000"

circle :: Int -> Int -> Int -> Context -> Dom ()
circle x y r context = Dom $ primCircle x y r context

foreign import js "Canvas.circle(%4, %1, %2, %3)"
  primCircle :: Int -> Int -> Int -> Context -> IO ()

rectangle :: Int -> Int -> Int -> Int -> Context -> Dom ()
rectangle x y w h c = Dom $ primRectangle x y w h c

foreign import js "Canvas.rectangle(%5, %1, %2, %3, %4)"
  primRectangle :: Int -> Int -> Int -> Int -> Context -> IO ()

text :: String -> Int -> Int -> Context -> Dom ()
text s x y c = Dom $ primText (stringToJSString s) x y c

foreign import js "Canvas.text(%4, %1, %2, %3)"
  primText :: JSString -> Int -> Int -> Context -> IO ()