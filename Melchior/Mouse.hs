module Melchior.Mouse where

import Melchior.Control
import Melchior.Dom.Events

position :: Signal MouseEvent -> Signal (Int, Int)
position s = pipe s (\x -> coords x)