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
  , pipe
  , terminate
  , put
  , append
  , prepend
  , setValue
  , emptySignal
  ) where

import Control.Applicative
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

terminate :: Signal a -> (a -> IO ()) -> Dom ()
terminate s f = Dom $ primTerminate s f

foreign import js "Signals.terminate(%1, %2)"
  primTerminate :: Signal a -> (a -> IO ()) -> IO ()

setValue :: (Show a) => Input -> Signal a -> Dom ()
setValue i s = terminate s (\x -> setV i (show x))

put :: (Renderable a) => Element -> Signal a -> Dom ()
put el s = terminate s (\x -> return $ set el "innerHTML" $ render x)

append :: (Renderable a) => Element -> Signal a -> Dom ()
append el s = terminate s (\x -> appendHtml el $ render x)

prepend :: (Renderable a) => Element -> Signal a -> Dom ()
prepend el s = terminate s (\x -> prependHtml el $ render x)

-- * Misc. primitive signal operations

foreign import js "Tuples.pair(%1, %2, %3)"
  primAmpersands :: SF a b -> SF a c -> Signal a -> Signal (b, c)

foreign import js "Signals.applicable(%1)"
  applicable :: a -> a

-- * Routing

pipe :: (a -> b) -> Signal a -> Signal b
pipe f s = primPipeSignal s f

pipeWithEvent :: Signal a -> (a -> Event c -> b) -> Signal b
pipeWithEvent s f = primPipeSignalWithEvent s f

foreign import js "%1.pipe(%2)"
  primPipeSignal :: Signal a -> (a -> b) -> Signal b

foreign import js "%1.pipe(%2)"
  primPipeSignalWithEvent :: Signal a -> (a -> Event c -> b) -> Signal b

-- * Signal actions

foldp :: (a -> b -> b) -> b -> Signal a -> Signal b
foldp fn start signal = createPastDependentSignal fn start signal

foreign import js "Signals.createPastDependentSignal(%1, %2, %3)"
  createPastDependentSignal :: (a -> b -> b) -> b -> Signal a -> Signal b

sample :: Signal a -> a
sample = primSample

foreign import js "%1.sample()"
  primSample :: Signal a -> a

previous :: Signal a -> a
previous = primPrevious

foreign import js "Signals.previous(%1)"
  primPrevious :: Signal a -> a

constant :: a -> Signal a
constant = primConstant

foreign import js "Signals.constant(%1)"
  primConstant :: a -> Signal a

emptySignal :: a -> a
emptySignal = primEmptySignal

foreign import js "Signals.emptySignal()"
  primEmptySignal :: a -> a

-- * Filters

dropRepeats :: Eq a => Signal a -> Signal a
dropRepeats s = (\x -> if x == (previous s) then (emptySignal x) else x) <$> s

dropWhen :: Signal a -> (a -> Bool) -> Signal a
dropWhen s pred = (\x -> if pred x then (emptySignal x) else x) <$> s

keepWhen :: Signal a -> (a -> Bool) -> Signal a
keepWhen s pred = (\x -> if pred x then x else (emptySignal x)) <$> s

merge :: Signal a -> Signal a -> Signal a
merge = primMerge

foreign import js "Signals.merge(%1, %2)"
  primMerge :: Signal a -> Signal a -> Signal a

-- * Create evented signals

createEventedSignal :: (DomNode a) => Of c -> a -> Event b -> Signal c
createEventedSignal o el evt = primCreateEventedSignal o el $ (stringToJSString . show) evt

foreign import js "Signals.createEventedSignal(%3, %4)"
  primCreateEventedSignal :: (DomNode a) => Of c -> a -> JSString -> Signal c

createEventedSignalOf :: (DomNode a) => Of c -> a -> Event b -> String -> Dom (Signal c)
createEventedSignalOf o el evt key = return $ primCreateEventedSignalOf o el evtStr keyStr
                                      where
                                        evtStr = ((stringToJSString . show) evt)
                                        keyStr = stringToJSString key

foreign import js "Signals.createEventedSignal(%3, %4, %5)"
  primCreateEventedSignalOf :: (DomNode a) => Of c -> a -> JSString -> JSString -> Signal c

delegate :: Of c -> String -> Event b -> Element -> Dom (Signal c)
delegate o query evt el = return $ primCreateDelegatedEventListener o evtStr queryStr el
                       where
                         evtStr   = stringToJSString $ show evt
                         queryStr = stringToJSString query

foreign import js "Signals.createDelegate(%2, %3, %4)"
  primCreateDelegatedEventListener :: Of c -> JSString -> JSString -> Element -> Signal c

delegateOf :: Of c -> String -> Event b -> String -> Element -> Dom (Signal c)
delegateOf o query evt key el = return $ primCreateDelegatedEventListenerOf o evtStr queryStr keyStr el
                       where
                         evtStr   = stringToJSString $ show evt
                         queryStr = stringToJSString query
                         keyStr   = stringToJSString key

foreign import js "Signals.createDelegate(%2, %3, %4, %5)"
  primCreateDelegatedEventListenerOf :: Of c -> JSString -> JSString -> JSString -> Element -> Signal c

