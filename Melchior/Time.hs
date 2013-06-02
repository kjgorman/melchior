module Melchior.Time (
    current
  , every
  , minute
  , second
  ) where

import Melchior.Control
import Melchior.Data.String

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