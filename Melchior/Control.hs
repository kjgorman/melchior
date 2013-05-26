module Melchior.Control
  ( -- * Types
    Signal
  , SF
  , Of
    -- * Functions
  , runDom
  , (~>)
  , foldP
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
  , ensureApplicable
  ) where

import Language.UHC.JScript.Primitives
import Control.Applicative
import Control.Monad (liftM)
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events

data Signal a = Signal a
data Of a = Of a
type SF a b = Signal a -> Signal b

instance Functor Signal where
  fmap = pipe

runDom :: ([Element] -> Dom Element) -> IO Element
runDom f = io
           where Dom io = f root

(~>) :: Signal a -> SF a b -> Dom (Signal b)
signal ~> fn = return $ fn signal

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
terminal s = (\x -> ensureApplicable $ pass (stringToJSString "terminal") $! x) <$> s

foreign import js "Signals.ensureApplicable(%1)"
  ensureApplicable :: a -> a

passThrough :: a -> b -> a
passThrough x y =  y `seq` (applicable x)

pipe :: (a -> b) -> Signal a -> Signal b
pipe f s = primPipeSignal s f

pipeWithEvent :: Signal a -> (a -> Event c -> b) -> Signal b
pipeWithEvent s f = primPipeSignalWithEvent s f

foreign import js "%1.pipe(%2)"
  primPipeSignal :: Signal a -> (a -> b) -> Signal b

foreign import js "%1.pipe(%2)"
  primPipeSignalWithEvent :: Signal a -> (a -> Event c -> b) -> Signal b

-- * Signal creation

liftSignal :: Signal a -> Signal (Dom a)
liftSignal s = (\x -> pass (stringToJSString "lifted") $ return $! x) <$> s

foldP :: (a -> b -> b) -> b -> Signal a -> Signal b
foldP fn start signal = createPastDependentSignal fn start signal

foreign import js "Signals.createPastDependentSignal(%1, %2, %3)"
  createPastDependentSignal :: (a -> b -> b) -> b -> Signal a -> Signal b

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

