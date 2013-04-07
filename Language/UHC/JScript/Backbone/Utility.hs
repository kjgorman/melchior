module Language.UHC.JScript.Backbone.Utility where

import Language.UHC.JScript.Primitives
import Language.UHC.JScript.Types

data BackbonePtr
type Backbone = JSPtr BackbonePtr

foreign import js "Backbone.noConflict()"
  noConflict :: Backbone
