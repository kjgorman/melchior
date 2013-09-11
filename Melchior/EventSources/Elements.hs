module Melchior.EventSources.Elements (
    inputValue
  ) where

import Control.Applicative
import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events

inputValue :: Input -> Signal JSString
inputValue i = foldp (\_ _ -> value i) (stringToJSString "") presses
  where presses = createEventedSignal (Of ()) i (ElementEvt InputEvt)