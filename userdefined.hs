import Control.Category

import Melchior.Control
import Melchior.Data.List
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Selectors

import Language.UHC.JScript.ECMA.String (JSString, stringToJSString, jsStringToString)
import Language.UHC.JScript.Primitives

foreign import js "log(%2, %1)"
  inspect :: JSString -> a -> a

main :: IO Element
main = runDom $ \html -> do
       --do some selection
       input <- head $ pass (stringToJSString "get") $ get (Selector $ byId "input") $ [toElement html]
       output <- head $ get (Selector $ byId "output") $ [toElement html] 
       elems <- get ((Selector $ byClass "specific-div") >>> (Selector $ byClass "elem")) $ [toElement html]
       clickable <- head $ clickableElems
       --do some function bindng
       bindBody (value $ toInput input) output
       return $ manualMapBind elems (toInput input)
       return $ sequence $ map (clickResponse (clickEdge clickable)) elems
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
