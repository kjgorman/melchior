import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
import Language.UHC.JScript.Primitives

main :: IO Element
main = runDom $ \html -> do
   input <- head . get (Selector $ byId "input") $ [toElement html]
   output <- head . get (Selector $ byId "output") $ [toElement html]
   head . doSomeShit $ toElement html
   return . force $! bindBody input output

runDom :: (Document -> Dom Element) -> IO Element
runDom f = let Dom io = f primDoc in io

doSomeShit :: Element -> [Dom ()]
doSomeShit e = fmap primLog' $ get (Selector $ byClass "elem") $ [e]

--    primLog' $ get (Selector $ byId "input") $ element html
foreign import js "echo(%1, %2)"
  bindBody :: Element -> Element -> Dom Element
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

foreign import js "console.log(%1)"
  primLog' :: Dom Element -> Dom ()              
  {-
    create e InputEvt (\_ -> push primValue e)
    var s = new Signal();
    elem.addEventListener('input', function() {
      s.push(elem.value);
    });
    return s;
  -}
