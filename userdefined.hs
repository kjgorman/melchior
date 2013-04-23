import Control.Category

import Melchior.Control
import Melchior.Data.List
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
import Language.UHC.JScript.Primitives

import Prelude hiding (head, (.), id)

runDom :: (Document -> Dom Element) -> IO Element
runDom f = io
           where Dom io = f document

foreign import js "document"
  elem :: Element

main :: IO Element
main = runDom $ \html -> do
       input <- head $ get (Selector $ byId "input") $ [toElement document]
       output <- head $ get (Selector $ byId "output") $! [toElement document]
       bindBodyR (value $ toInput input) output
--       elems <- get ((Selector $ byClass "elem") . (Selector $ byClass "specific-div")) $ [toElement html]
       return input

foreign import js "echo(%1, %2)"
  bindBody :: Signal String -> Element -> Dom ()

bindBodyR :: Signal String -> Element -> Dom Element
bindBodyR s e = bind e s (\v -> setBody e v)
  {-
    bind e s (\v -> setBody e v)
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

value :: Input -> Signal String
value i = createEventedSignal i (ElementEvt InputEvt)
  {-
    create e InputEvt (\_ -> push primValue e)
    var s = new Signal();
    elem.addEventListener('input', function() {
      s.push(elem.value);
    });
    return s;
  -}
