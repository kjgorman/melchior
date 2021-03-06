module Melchior.Dom.Events where

import Melchior.Data.String
import Melchior.Dom.Html

data Event a = ElementEvt ElementEvent | MouseEvt MouseEvent | KeyboardEvt KeyboardEvent

instance Show (Event a) where
  show (ElementEvt a) = show a
  show (MouseEvt a) = show a
  show (KeyboardEvt a) = show a

data ElementEvent = InputEvt | ChangeEvt | ResetEvt | SubmitEvt | InvalidEvt
instance Show ElementEvent where
  show InputEvt = "input"
  show ChangeEvt = "change"
  show ResetEvt = "reset"
  show SubmitEvt = "submit"
  show InvalidEvt = "invalid"

data MouseEvent = ClickEvt | DblClick | MouseDown | MouseUp | MouseEnter | MouseLeave
                | MouseOut | MouseOver | MouseMove

instance Show MouseEvent where
 show ClickEvt = "click"
 show DblClick = "dblclick"
 show MouseDown = "mousedown"
 show MouseUp = "mouseup"
 show MouseEnter = "mouseenter"
 show MouseLeave = "mouseleave"
 show MouseOut = "mouseout"
 show MouseOver = "mouseover"
 show MouseMove = "mousemove"

instance Renderable MouseEvent where
  render e = stringToJSString $ show e

data KeyboardEvent = KeyDown | KeyPress | KeyUp

instance Show KeyboardEvent where
  show KeyDown = "keydown"
  show KeyPress = "keypress"
  show KeyUp = "keyup"

instance Renderable KeyboardEvent where
  render e = stringToJSString $ show e