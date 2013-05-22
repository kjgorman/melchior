module Melchior.Mouse where

import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Events

import Language.UHC.JScript.ECMA.String (stringToJSString)

position :: Element -> Signal (Int, Int)
position el = pipe s (\x -> coords x)
              where s = createEventedSignal (Of MouseMove) el (MouseEvt MouseMove)

click :: Element -> Signal MouseEvent
click e = createEventedSignal (Of ClickEvt) e (MouseEvt ClickEvt)