module Melchior.Time (
    current
  , every
  , minute
  , second
  , delay
  , debounce
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
debounce n s = delay n ((\x -> UHC.Base.head x) <$> (foldp (\x acc -> x:acc) [] s))