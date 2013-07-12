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

type Html = JSString

data Fragment = Text Html | JDiv [Fragment] | JSpan [Fragment] | Attribute [(String, [String])] Fragment

instance Show Fragment where
  show (Text h) = show h
  show (JDiv f) = "<div>" ++ (concatMap show f) ++ "</div>"
  show (JSpan f) = "<span>" ++ (concatMap show f) ++ "</div>"
  show (Attribute t f) = "<"++(tag f)++" "++(collapse t)++">"++(concatMap show $ fragments f)++"</"++(tag f)++">"

fragments :: Fragment -> [Fragment]
fragments (Text _) = []
fragments (JDiv d) = d
fragments (JSpan s) = s
fragments (Attribute _ f) = fragments f

tag :: Fragment -> String
tag (Text _) = ""
tag (JDiv _) = "div"
tag (JSpan _) = "span"
tag (Attribute s f) = (tag f) ++ " " ++ (collapse s)

collapse :: [(String, [String])] -> String
collapse [] = ""
collapse (x:xs) = (fst x)++"='"++(foldl (\x y -> y++" "++x) "" $ snd x)++"' "++(collapse xs)

addClassTo :: String -> Fragment -> Fragment
addClassTo k f = addAttribute "class" k f

addAttribute :: String -> String -> Fragment -> Fragment
addAttribute _ _ (Text h) = (Text h)
addAttribute k v (JDiv d) = Attribute [(k, [v])] (JDiv d)
addAttribute k v (JSpan s) = Attribute [(k, [v])] (JSpan s)
addAttribute k v (Attribute s f) = Attribute (addToOrCreateKey k v s) f

addToOrCreateKey :: String -> String -> [(String, [String])] -> [(String, [String])]
addToOrCreateKey k v a = case filtered of
    [] -> (k, [v]):a
    (x:[]) -> (k, v:(snd x)):filtered
    _ -> [] -- fail? should never be more than one key... invariant
    where
      filtered = filter (\x -> (fst x) == k) a

instance Renderable Fragment where
  render f = stringToJSString $ show f

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
a <+> b = primAppendHtml a b

(|+>) :: String -> Html -> Html
a +> b = primAppendHtml (stringToJSString a) b

(<+|) :: Html -> String -> Html
a <+ b = primAppendHtml a (stringToJSString b)

foreign import js "Html.append(%1, %2)"
  primAppendHtml :: Html -> Html -> Html

join []     = ""
join (x:[]) = x
join (x:xs) = x++","++(join xs)