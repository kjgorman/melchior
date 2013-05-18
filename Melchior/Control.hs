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
  , signalIO
  , terminal
  , liftSignal
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
s &&& t = \x -> primAmpersands s t x

-- * Misc. primitive signal operations

foreign import js "Tuples.pair(%1, %2, %3)"
  primAmpersands :: SF a b -> SF a c -> Signal a -> Signal (b, c)

foreign import js "Tuples.pair(%1)"
  pair :: JSPtr a -> a

foreign import js "Signals.source(%1)"
  source :: Signal a -> Element

foreign import js "Signals.signalIO(%1)"
  signalIO :: IO a -> IO a

foreign import js "Signals.applicable(%1)"
  applicable :: a -> a

-- * Routing

terminal :: SF a a 
terminal s = pipe s (\x -> pass (stringToJSString "terminal") $! x)

passThrough :: a -> b -> a
passThrough x y =  y `seq` (applicable x)

pipe :: Signal a -> (a -> b) -> Signal b
pipe s f = primPipeSignal s f

pipeWithEvent :: Signal a -> (a -> Event c -> b) -> Signal b
pipeWithEvent s f = primPipeSignalWithEvent s f

foreign import js "%1.pipe(%2)"
  primPipeSignal :: Signal a -> (a -> b) -> Signal b

foreign import js "%1.pipe(%2)"
  primPipeSignalWithEvent :: Signal a -> (a -> Event c -> b) -> Signal b

-- * Signal creation

liftSignal :: Signal a -> Signal (Dom a)
liftSignal s = pipe s (\x -> pass (stringToJSString "lifted") $ return $! x)

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

foreign import js "log(%2, %1)"
  pass :: JSString -> a -> a

