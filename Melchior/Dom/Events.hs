module Melchior.Dom.Events where

data Event a = ElementEvt ElementEvent

instance Show (Event a) where
  show (ElementEvt a) = show a

data ElementEvent = InputEvt | ChangeEvt | ResetEvt | SubmitEvt | InvalidEvt

instance Show ElementEvent where
  show InputEvt = "input"
  show ChangeEvt = "change"
  show ResetEvt = "reset"
  show SubmitEvt = "submit"
  show InvalidEvt = "invalid"