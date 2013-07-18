{-# LANGUAGE FlexibleInstances, TypeSynonymInstances #-}
module Melchior.Dom.Html (
    Renderable
  , Html
  , Fragment
  , Text
  , JDiv
  , JSpan
  , render
  , addClassTo
  , addAttribute
  , (<+>)
  , (|+>)
  , (<+|)
  ) where

import Melchior.Data.String (JSString, stringToJSString)
import Melchior.Dom.Internal.Fragments

class Renderable a where
  render :: a -> Html

instance Renderable Fragment where
  render f = stringToJSString $ show f

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
a <+> b = primAppendHtml a b

(|+>) :: String -> Html -> Html
a +> b = primAppendHtml (stringToJSString a) b

(<+|) :: Html -> String -> Html
a <+ b = primAppendHtml a (stringToJSString b)

join []     = ""
join (x:[]) = x
join (x:xs) = x++","++(join xs)


foreign import js "Html.append(%1, %2)"
  primAppendHtml :: Html -> Html -> Html
