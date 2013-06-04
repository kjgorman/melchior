module Melchior.Time (
    current
  , every
  , minute
  , second
  , delay
  ) where

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

delay :: Int -> Signal a -> Signal a
delay = primDelay

foreign import js "Time.delay(%1, %2)"
  primDelay :: Int -> Signal a -> Signal a