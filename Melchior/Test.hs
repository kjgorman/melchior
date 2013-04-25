module Melchior.Test
       (
         expects
       ) where

foreign import js "Melchior.expects(%1)"
  expects :: a -> a