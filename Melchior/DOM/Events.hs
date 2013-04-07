module Melchior.Dom.Events where

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)

data Event = MouseEvt MouseEvent | ElementEvt ElementEvent

data MouseEvent = MouseDown | MouseEnter | MouseLeave | MouseMove | MouseOut
                | MouseOver | MouseUp

data ElementEvent = Input | Change | Reset | Submit | Invalid

--should make this an instance
showJS :: Event -> JSString

showJS (MouseEvt MouseDown) = stringToJSString "mousedown"
showJS (MouseEvt MouseEnter) = stringToJSString "mouseenter"
showJS (MouseEvt MouseLeave) = stringToJSString "mouseleave"
showJS (MouseEvt MouseMove) = stringToJSString "mousemove"
showJS (MouseEvt MouseOut) = stringToJSString "mouseout"
showJS (MouseEvt MouseOver) = stringToJSString "mouseover"
showJS (MouseEvt MouseUp) = stringToJSString "mouseup"

showJS (ElementEvt Input) = stringToJSString "input"
showJS (ElementEvt Change) = stringToJSString "change"
showJS (ElementEvt Reset) = stringToJSString "reset"
showJS (ElementEvt Submit) = stringToJSString "submit"
showJS (ElementEvt Invalid) = stringToJSString "invalid"