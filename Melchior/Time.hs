module Melchior.Time where

import Melchior.Control

second :: Int
second = 1000

minute :: Int
minute = 1000 * 60

foreign import js "Time.every(%1)"
  every :: Int -> Signal Int
