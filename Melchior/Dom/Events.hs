module Melchior.Dom.Events where

data Event a = ElementEvt ElementEvent | MouseEvt MouseEvent

instance Show (Event a) where
  show (ElementEvt a) = show a
  show (MouseEvt a) = show a

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