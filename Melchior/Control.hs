module Melchior.Control where

data Signal a = Signal a
type SF a b = Signal a -> Signal b

