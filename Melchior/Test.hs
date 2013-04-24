module Melchior.Test
       (
         expects
       ) where

foreign import js "Melchior.Expects(%1)"
  expects :: a -> a