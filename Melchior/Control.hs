module Melchior.Control
  ( -- * Types
    Signal
  , SF
    -- * Functions
  , createEventedSignal
  ) where

import Language.UHC.JScript.Primitives
import Melchior.Dom
import Melchior.Dom.Events

data Signal a = Signal (JSPtr a)
type SF a b = Signal a -> Signal b

createEventedSignal :: (DomNode a) => a -> Event b -> Signal String
createEventedSignal = primCreateEventedSignal

foreign import js "Signals.createEventedSignal(%1, %2)"
  primCreateEventedSignal :: (DomNode a) => a -> Event b -> Signal String
