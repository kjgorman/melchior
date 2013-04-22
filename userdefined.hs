import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
import Language.UHC.JScript.ECMA.Array
import Language.UHC.JScript.Primitives

import Prelude hiding (head)

main :: IO Element
main = runDom $ \html -> do
       input <- head $ get (Selector $ byId "input") $ [toElement html]
       output <- head $ get (Selector $ byId "output") $ [toElement html]
       bindBody input output
       return input

runDom :: (Document -> Dom Element) -> IO Element
runDom f = io
           where Dom io = f primDoc

head :: (DomNode a) => Dom [a] -> Dom a
head i = i >>= \x -> return $ indexJSArray (listToJSArray x) 0

foreign import js "echo(%1, %2)"
  bindBody :: Element -> Element -> Dom ()
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
value e = undefined --primLog' . toElement $ e
  {-
    create e InputEvt (\_ -> push primValue e)
    var s = new Signal();
    elem.addEventListener('input', function() {
      s.push(elem.value);
    });
    return s;
  -}
