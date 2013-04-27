module Melchior.Control
  ( -- * Types
    Signal
  , SF
  , Of
    -- * Functions
  , runDom
  , createEventedSignal
  , createEventedSignalOf
  , bind
  , (>>>)
  , (<<<)
  , (&&&)
  , pipe
  ) where

import Language.UHC.JScript.Primitives
import Language.UHC.JScript.ECMA.String (stringToJSString, JSString)
import Melchior.Dom
import Melchior.Dom.Events

data Signal a = Signal (JSPtr a)
data Of a = Of a
type SF a b = Signal a -> Signal b

runDom :: (Document -> Dom Element) -> IO Element
runDom f = io
           where Dom io = f document

(>>>) :: SF a b -> SF b c -> SF a c
s >>> t = t . s

(<<<) :: SF b c -> SF a b -> SF a c
s <<< t = s . t

(&&&) :: SF a b -> SF a c -> SF a (b, c)
s &&& t = \x -> ampersand (s x, t x)

foreign import js "Signals.ampersand(%1)"
  ampersand :: (Signal b, Signal c) -> Signal (b, c)

pipe :: Signal a -> (a -> b) -> Signal b
pipe s f = primPipeSignal s f

foreign import js "%1.pipe(%2)"
  primPipeSignal :: Signal a -> (a -> b) -> Signal b

bind :: Signal a -> (a -> Dom ()) -> Dom Element
bind s f = primBindFunctionToSignal s f

foreign import js "Signals.bindToSignal(%1, %2)"
  primBindFunctionToSignal :: Signal a -> (a -> Dom ()) -> Dom Element

createEventedSignal :: (DomNode a) => Of c -> a -> Event b -> Signal c
createEventedSignal o el evt = primCreateEventedSignal o el $ (stringToJSString . show) evt

foreign import js "Signals.createEventedSignal(%3, %4)"
  primCreateEventedSignal :: (DomNode a) => Of c -> a -> JSString -> Signal c

createEventedSignalOf :: (DomNode a) => Of c -> a -> Event b -> String -> Signal c
createEventedSignalOf o el evt key = primCreateEventedSignalOf o el evtStr keyStr
                                      where
                                        evtStr = ((stringToJSString . show) evt)
                                        keyStr = stringToJSString key
  
foreign import js "Signals.createEventedSignal(%3, %4, %5)"
  primCreateEventedSignalOf :: (DomNode a) => Of c -> a -> JSString -> JSString -> Signal c  

