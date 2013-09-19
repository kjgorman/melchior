{-# LANGUAGE CPP #-}
module Melchior.Control
  ( -- * Types
    Signal
  , SF
  , Of
    -- * Functions
  , runDom
  , (~>)
  , foldp
  , sample
  , takes
  , constant
  , dropRepeats
  , dropWhen
  , keepWhen
  , merge
  , createEventedSignal
  , createEventedSignalOf
  , delegate
  , delegateOf
  , (>>>)
  , (<<<)
  , (&&&)
  , (&)
  , pipe
  , emptySignal
  , empty
  ) where

import Control.Applicative hiding (empty)
import Control.Monad (liftM)
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Html

data Signal a = Signal a
data Of a = Of a
type SF a b = Signal a -> Signal b

instance Functor Signal where
  fmap = pipe

instance Applicative Signal where
  pure = constant
  f <*> x = (\v -> (sample f) v) <$> x

#ifdef __UHC_TARGET_JS__
runDom :: ([Element] -> Dom a) -> IO a
runDom f = io
           where Dom io = f root
#else
runDom :: ([Element] -> Dom a) -> IO a
runDom = undefined
#endif

(~>) :: Signal a -> SF a b -> Dom (Signal b)
signal ~> fn = return $ fn signal

(>>>) :: SF a b -> SF b c -> SF a c
s >>> t = \x -> t $ s x

(<<<) :: SF b c -> SF a b -> SF a c
s <<< t = \x -> s $ t x

(&&&) :: SF a b -> SF a c -> SF a (b, c)
s &&& t = \x -> primAmpersands s t x

(&) :: Signal a -> Signal b -> Signal (a, b)
s & t = primPair s t

-- * Misc. primitive signal operations

#ifdef __UHC_TARGET_JS__
foreign import js "Tuples.combine(%1, %2)"
  primPair :: Signal a -> Signal b -> Signal (a, b)
#else
primPair :: Signal a -> Signal b -> Signal (a, b)
primPair = undefined
#endif
#ifdef __UHC_TARGET_JS__
foreign import js "Tuples.pair(%1, %2, %3)"
  primAmpersands :: SF a b -> SF a c -> Signal a -> Signal (b, c)
#else
primAmpersands :: SF a b -> SF a c -> Signal a -> Signal (b, c)
primAmpersands = undefined
#endif
#ifdef __UHC_TARGET_JS__
foreign import js "Signals.applicable(%1)"
  applicable :: a -> a
#else
applicable :: a -> a
applicable = undefined
#endif

-- * Routing

pipe :: (a -> b) -> Signal a -> Signal b
pipe f s = primPipeSignal s f

pipeWithEvent :: Signal a -> (a -> Event c -> b) -> Signal b
pipeWithEvent s f = primPipeSignalWithEvent s f
#ifdef __UHC_TARGET_JS__
foreign import js "%1.pipe(%2)"
  primPipeSignal :: Signal a -> (a -> b) -> Signal b
#else
primPipeSignal :: Signal a -> (a -> b) -> Signal b
primPipeSignal = undefined
#endif
#ifdef __UHC_TARGET_JS__
foreign import js "%1.pipe(%2)"
  primPipeSignalWithEvent :: Signal a -> (a -> Event c -> b) -> Signal b
#else
primPipeSignalWithEvent :: Signal a -> (a -> Event c -> b) -> Signal b
primPipeSignalWithEvent = undefined
#endif

-- * Signal actions

foldp :: (a -> b -> b) -> b -> Signal a -> Signal b
foldp fn start signal = createPastDependentSignal fn start signal
#ifdef __UHC_TARGET_JS__
foreign import js "Signals.createPastDependentSignal(%1, %2, %3)"
  createPastDependentSignal :: (a -> b -> b) -> b -> Signal a -> Signal b
#else
createPastDependentSignal :: (a -> b -> b) -> b -> Signal a -> Signal b
createPastDependentSignal = undefined
#endif

sample :: Signal a -> a
sample = primSample
#ifdef __UHC_TARGET_JS__
foreign import js "%1.sample()"
  primSample :: Signal a -> a
#else
primSample :: Signal a -> a
primSample = undefined
#endif

takes :: Signal a -> a
takes s = primTake s True
#ifdef __UHC_TARGET_JS__
foreign import js "%1.sample(%2)"
  primTake :: Signal a -> Bool -> a
#else
primTake :: Signal a -> Bool -> a
primTake = undefined
#endif

previous :: Signal a -> a
previous = primPrevious
#ifdef __UHC_TARGET_JS__
foreign import js "Signals.previous(%1)"
  primPrevious :: Signal a -> a
#else
primPrevious :: Signal a -> a
primPrevious = undefined
#endif

constant :: a -> Signal a
constant = primConstant
#ifdef __UHC_TARGET_JS__
foreign import js "Signals.constant(%1)"
  primConstant :: a -> Signal a
#else
primConstant :: a -> Signal a
primConstant = undefined
#endif

emptySignal :: a -> a
emptySignal = primEmptySignal
#ifdef __UHC_TARGET_JS__
foreign import js "Signals.emptySignal()"
  primEmptySignal :: a -> a
#else
primEmptySignal :: a -> a
primEmptySignal = undefined
#endif

empty :: a -> Bool
empty = primEmpty
#ifdef __UHC_TARGET_JS__
foreign import js "Signals.empty(%1)"
  primEmpty :: a -> Bool
#else
primEmpty = undefined
#endif

-- * Filters

dropRepeats :: Eq a => Signal a -> Signal a
dropRepeats s = (\x -> if x == (previous s) then (emptySignal x) else x) <$> s

dropWhen :: Signal a -> (a -> Bool) -> Signal a
dropWhen s pred = (\x -> if pred x then (emptySignal x) else x) <$> s

keepWhen :: Signal a -> (a -> Bool) -> Signal a
keepWhen s pred = (\x -> if pred x then x else (emptySignal x)) <$> s

merge :: Signal a -> Signal a -> Signal a
merge = primMerge
#ifdef __UHC_TARGET_JS__
foreign import js "Signals.merge(%1, %2)"
  primMerge :: Signal a -> Signal a -> Signal a
#else
primMerge :: Signal a -> Signal a -> Signal a
primMerge = undefined
#endif

-- * Create evented signals

createEventedSignal :: (DomNode a) => Of c -> a -> Event b -> Signal c
createEventedSignal o el evt = primCreateEventedSignal o el $ (stringToJSString . show) evt
#ifdef __UHC_TARGET_JS__
foreign import js "Signals.createEventedSignal(%3, %4)"
  primCreateEventedSignal :: (DomNode a) => Of c -> a -> JSString -> Signal c
#else
primCreateEventedSignal :: (DomNode a) => Of c -> a -> JSString -> Signal c
primCreateEventedSignal = undefined
#endif

createEventedSignalOf :: (DomNode a) => Of c -> a -> Event b -> String -> Dom (Signal c)
createEventedSignalOf o el evt key = return $ primCreateEventedSignalOf o el evtStr keyStr
                                      where
                                        evtStr = ((stringToJSString . show) evt)
                                        keyStr = stringToJSString key
#ifdef __UHC_TARGET_JS__
foreign import js "Signals.createEventedSignal(%3, %4, %5)"
  primCreateEventedSignalOf :: (DomNode a) => Of c -> a -> JSString -> JSString -> Signal c
#else
primCreateEventedSignalOf :: (DomNode a) => Of c -> a -> JSString -> JSString -> Signal c
primCreateEventedSignalOf = undefined
#endif

delegate :: Of c -> String -> Event b -> Element -> Dom (Signal c)
delegate o query evt el = return $ primCreateDelegatedEventListener o evtStr queryStr el
                       where
                         evtStr   = stringToJSString $ show evt
                         queryStr = stringToJSString query
#ifdef __UHC_TARGET_JS__
foreign import js "Signals.createDelegate(%2, %3, %4)"
  primCreateDelegatedEventListener :: Of c -> JSString -> JSString -> Element -> Signal c
#else
primCreateDelegatedEventListener :: Of c -> JSString -> JSString -> Element -> Signal c
primCreateDelegatedEventListener = undefined
#endif

delegateOf :: Of c -> String -> Event b -> String -> Element -> Dom (Signal c)
delegateOf o query evt key el = return $ primCreateDelegatedEventListenerOf o evtStr queryStr keyStr el
                       where
                         evtStr   = stringToJSString $ show evt
                         queryStr = stringToJSString query
                         keyStr   = stringToJSString key
#ifdef __UHC_TARGET_JS__
foreign import js "Signals.createDelegate(%2, %3, %4, %5)"
  primCreateDelegatedEventListenerOf :: Of c -> JSString -> JSString -> JSString -> Element -> Signal c
#else
primCreateDelegatedEventListenerOf :: Of c -> JSString -> JSString -> JSString -> Element -> Signal c
primCreateDelegatedEventListenerOf = undefined
#endif

