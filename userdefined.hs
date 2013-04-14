import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
import Language.UHC.JScript.Primitives

main = return $ runDom document

runDom :: Document -> Dom ()
runDom = \html ->
  do
    input <- return . head $ get (ById Document Input) "input" [html]
    output <- return . head $ get (ById Document Div) "output" [html]
    bindBody output (value input)    
  
bindBody :: (Element a) => a -> Signal String -> Dom ()
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

--should be Input input...
value :: (Element a) => a -> Signal String
value e = undefined
  {-
    create e InputEvt (\_ -> push primValue e)
    var s = new Signal();
    elem.addEventListener('input', function() {
      s.push(elem.value);
    });
    return s;
  -}
