module Melchior.EventSources.Keyboard (
    keyDownSignal
  , keyPressSignal
  , keyUpSignal
  , keyCode
  , presses
  ) where

import Control.Applicative
import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events

keyDownSignal :: Element -> Signal KeyboardEvent
keyDownSignal e = createEventedSignal (Of KeyDown) e (KeyboardEvt KeyDown)

keyPressSignal :: Element -> Signal KeyboardEvent
keyPressSignal e = createEventedSignal (Of KeyPress) e (KeyboardEvt KeyPress)

keyUpSignal :: Element -> Signal KeyboardEvent
keyUpSignal e = createEventedSignal (Of KeyUp) e (KeyboardEvt KeyUp)

keyCode :: Signal KeyboardEvent -> Signal Int
keyCode s = (\x -> code x) <$> s

foreign import js "Events.keyCode(%1)"
  code :: KeyboardEvent -> Int

presses :: Element -> Signal (Int, Int)
presses el = (\_ -> (takes up, takes down)) <$> merge up down
            where up   = keyCode $ keyUpSignal el
                  down = keyCode $ keyDownSignal el