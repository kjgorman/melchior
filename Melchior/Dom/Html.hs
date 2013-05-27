module Melchior.Dom.Html (
    Renderable
  , render
  ) where

import Melchior.Data.String (JSString)

class Renderable a where
  render :: a -> JSString