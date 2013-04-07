module Language.UHC.JScript.Backbone.History where

import Language.UHC.JScript.Primitives
import Language.UHC.JScript.Types

foreign import js "Backbone.history.start()"
  start :: IO ()

foreign import js "Backbone.history.start(%*)"
  start' :: AnonObj -> IO ()
