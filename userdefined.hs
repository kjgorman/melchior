import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
import Language.UHC.JScript.Primitives

main = return $! runDom document

runDom :: Dom Document -> Dom ()
runDom = \html ->
     do
       input <- get (Selector $ byId "input") $ toElement html
       output <- get (Selector $ byId "output") $ toElement html       
       value . toInput $ input


--    primLog' $ get (Selector $ byId "input") $ element html
bindBody :: Element -> Signal String -> Dom ()
bindBody e s = undefined
  {-
    bind e s (\v -> setBody e b)
    becomes
    s.registerListener(e, function(value) {
      this.innerHTML = value;
    });
   assumed predefined to some degree:
   where Signal.prototype.registerListener = function(elem, callback) {
       this.registered.push(callback.bind(elem));
   }
   and Signal.prototype.push = function(value) {
       for(var i = 0, len =this.registered.length; i < len; i++) {
         this.registered[i](value);
       }
   }
  -}

value :: Input -> Dom () --Signal String
value e = primLog' . toElement $ e

foreign import js "console.log(%1)"
  primLog' :: Element -> Dom ()
  {-
    create e InputEvt (\_ -> push primValue e)
    var s = new Signal();
    elem.addEventListener('input', function() {
      s.push(elem.value);
    });
    return s;
  -}
