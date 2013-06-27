{-# LANGUAGE FlexibleInstances, TypeSynonymInstances #-}
module Melchior.Dom.Html (
    Renderable
  , Html
  , render
  , (<+>)
  ) where

import Melchior.Data.String (JSString, stringToJSString)

type Html = JSString

class Renderable a where
  render :: a -> Html

instance Renderable (Int, Int) where
  render x = stringToJSString $ "<span>"++(show $ fst x)++","++(show $ snd x)++"</span>"

instance Renderable Int where
  render i = stringToJSString $ "<span>"++(show i)++"</span>"

instance Renderable Integer where
  render i = stringToJSString $ "<span>"++(show i)++"</span>"

instance Renderable JSString where
  render s = s

instance Renderable String where
  render = stringToJSString

instance (Renderable a, Show a) => Renderable [a] where
  render xs = stringToJSString $ join $ map show xs

(<+>) :: Html -> Html -> Html
a <+> b = primAppendStrings a b

foreign import js "Html.append(%1, %2)"
  primAppendStrings :: Html -> Html -> Html

join []     = ""
join (x:[]) = x
join (x:xs) = x++","++(join xs)