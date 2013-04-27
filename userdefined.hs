import Control.Category

import Melchior.Control
import Melchior.Data.List
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
import Language.UHC.JScript.Primitives

import Prelude hiding (head, map, (.), id)

foreign import js "document"
  elem :: Element

foreign import js "log(%2, %1)"
  inspect :: JSString -> Element -> Element

main :: IO Element
main = runDom $ \html -> do
       --do some selection
       input <- head $ get (Selector $ byId "input") $ [toElement document]
       output <- head $ get (Selector $ byId "output") $ [toElement document] 
       elems <- get ((Selector $ byClass "specific-div") >>> (Selector $ byClass "elem")) $ [toElement html]
       clickable <- head $ clickableElems
       --do some function bindng
       return $ manualMapBind elems (toInput input)
       bindBody (value $ toInput input) output
       return $ sequence $ map (clickResponse (clickEdge clickable)) elems
       --return something i guess
       return input

clickableElems :: Dom [Element]
clickableElems = get (Selector $ byClass "clickable") [toElement document]

manualMapBind :: [Element] -> Input -> Dom [Element]
manualMapBind e i = sequence $ map (\x -> (bindBody (value i) x)) e

bindBody :: Signal String -> Element -> Dom Element
bindBody s e = bind s (\v -> setBody e v)

value :: Input -> Signal String
value i = createEventedSignal (Of "string") i (ElementEvt InputEvt)

clickEdge :: Element -> Signal String
clickEdge e = createEventedSignalOf (Of "string") e (MouseEvt ClickEvt) "innerHTML"

clickResponse :: Signal String -> Element -> Dom Element
clickResponse s e = bind (reverseSignal s) (\v -> setBody e v)

reverseSignal :: SF String String
reverseSignal s = pipe s (\v -> reversal v)

foreign import js "reversal(%1)"
  reversal :: String -> String
