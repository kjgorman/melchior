module Melchior.Control
  ( -- * Types
    Signal
  , SF
  , Of
    -- * Functions
  , runDom
  , createEventedSignal
  , createEventedSignalOf
  , (>>>)
  , (<<<)
  , (&&&)
  , pipe
  , source
  , passThrough
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
s >>> t = \x -> t $ s x

(<<<) :: SF b c -> SF a b -> SF a c
s <<< t = \x -> s $ t x

(&&&) :: SF a b -> SF a c -> SF a (b, c)
s &&& t = \x -> toSF (s x, t x)
                where
                  toSF (Signal b, Signal c) = Signal $ pair (b, c)

foreign import js "Tuples.pair(%1)"
  pair :: (JSPtr a, JSPtr b) -> JSPtr (a, b)

foreign import js "Signals.source(%1)"
  source :: Signal a -> Element

passThrough :: a -> b -> a
passThrough x y = y `seq` (applicable x)

foreign import js "Signals.applicable(%1)"
  applicable :: a -> a

pipe :: Signal a -> (a -> b) -> Signal b
pipe s f = primPipeSignal s f

foreign import js "%1.pipe(%2)"
  primPipeSignal :: Signal a -> (a -> b) -> Signal b

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

