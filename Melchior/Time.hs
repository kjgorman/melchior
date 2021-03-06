module Melchior.Time (
    current
  , after
  , every
  , minute
  , second
  , delay
  , debounce
  , throttle
  , count
  , delta
  ) where

import Control.Applicative
import Melchior.Control
import Melchior.Data.String

millisecond :: Int
millisecond = 1

second :: Int
second = 1000

minute :: Int
minute = 1000 * 60

foreign import js "Time.every(%1)"
  every :: Int -> Signal Int

foreign import js "Time.after(%1)"
  after :: Int -> Signal Int

current :: Signal JSString
current = primCurrent

foreign import js "Time.current"
  primCurrent :: Signal JSString

currentI :: Signal Int
currentI = primCurrentI

foreign import js "Time.currentI()"
  primCurrentI :: Signal Int

delay :: Int -> Signal a -> Signal a
delay = primDelay

foreign import js "Time.delay(%1, %2)"
  primDelay :: Int -> Signal a -> Signal a

debounce :: Int -> Signal a -> Signal a
debounce n s = (\(x, y) -> y) <$> debounce' n s

debounce' n s = foldp (\t (thn, u) -> if ((sample currentI) - thn) > n then (sample currentI, t) else emptySignal (thn, u))
                (sample currentI, sample s)
                s

throttle :: Int -> Signal a -> Signal a
throttle n s = (\_ -> sample s) <$> every n

count :: Signal a -> Signal Int
count s = foldp (\t acc -> acc+1) 0 s

delta :: Signal a -> Signal Int
delta s = primDelta s

foreign import js "Time.delta(%1)"
  primDelta :: Signal a -> Signal Int