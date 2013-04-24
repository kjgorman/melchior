import Control.Category

import Melchior.Control
import Melchior.Data.List
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
import Language.UHC.JScript.Primitives

import Prelude hiding (head, map, (.), id)

runDom :: (Document -> Dom Element) -> IO Element
runDom f = io
           where Dom io = f document

foreign import js "document"
  elem :: Element

foreign import js "log(%2, %1)"
  inspect :: JSString -> Element -> Element

main :: IO Element
main = runDom $ \html -> do
       input <- head $ get (Selector $ byId "input") $ [toElement document]
       output <- head $ get (Selector $ byId "output") $ [toElement document] 
       elems <- get ((Selector $ byClass "specific-div") >>> (Selector $ byClass "elem")) $ [toElement html]
       return $ manualMapBind elems (toInput input)
       bindBody (value $ toInput input) output
       return input

manualMapBind :: [Element] -> Input -> Dom [Element]
manualMapBind e i = sequence $ map (\x -> (bindBody (value i) x)) e

bindBody :: Signal String -> Element -> Dom Element
bindBody s e = bind s (\v -> setBody e v)

value :: Input -> Signal String
value i = createEventedSignal i (ElementEvt InputEvt)

