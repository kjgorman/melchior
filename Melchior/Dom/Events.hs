module Melchior.Dom.Events where

data Event a = ElementEvt ElementEvent

data ElementEvent = InputEvt | ChangeEvt | ResetEvt | SubmitEvt | InvalidEvt
     deriving (Show)