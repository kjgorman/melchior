module Melchior.Dom.Html (
    Renderable
  , Html
  , render
  ) where

import Melchior.Data.String (JSString)

type Html = JSString

class Renderable a where
  render :: a -> Html