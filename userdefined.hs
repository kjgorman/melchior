import Melchior.Control
import Melchior.DOM
import Melchior.Dom.Events

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
import Language.UHC.JScript.Primitives

main = do
  return $ bind (select $ stringToJSString "#input") (showJS (ElementEvt Input))  update
  log "DEBUG:: App started"
  
update :: Signal (Dom ()) -> Signal (Dom ())
update _ = Signal (setHTML output (getValue input))
           where
             output = (select $ stringToJSString "#output")
             input = (select $ stringToJSString "#input")