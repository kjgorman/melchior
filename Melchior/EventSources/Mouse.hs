module Melchior.EventSources.Mouse where

import Control.Applicative
import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events

position :: Element -> Signal (Int, Int)
position el = (\x -> coords x) <$> s
              where s = createEventedSignal (Of MouseMove) el (MouseEvt MouseMove)

click :: Element -> Signal MouseEvent
click e = createEventedSignal (Of ClickEvt) e (MouseEvt ClickEvt)

foreign import js "Events.coordinates(%1)"
  coords :: MouseEvent -> (Int, Int)