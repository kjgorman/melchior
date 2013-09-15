{-#LANGUAGE CPP#-}
module Melchior.Remote.Internal.Parser {-(
    Json
  , JsonObject
#ifdef __UHC_TARGET_JS__
  , JsonPair
  , JsonString
  , JsonObj
  , JsNull
  , JsonNumber
#endif
  , parseJson
  ) -} where

import Control.Monad
import Melchior.Remote.Internal.ParserUtils

data Json = JsonString String  |
            JsBool String      |
            JsNull             |
            JsonArray [Json]   |
            JsonObj JsonObject |
            JsonNumber String  |
            JsonPair (Json, Json)

data JsonObject = JsonObject [Json]

instance Show Json where
  show (JsonString s) = "\""++s++"\""
  show (JsBool b) = b
  show JsNull = "null"
  show (JsonArray x) = "["++(commaSeparate x)++"]"
  show (JsonObj x) = show x
  show (JsonNumber s) = s
  show (JsonPair x) = (show $ fst x) ++":"++ (show $ snd x)

instance Show JsonObject where
  show (JsonObject x) = "{"++(commaSeparate (exceptNull x))++"}"

exceptNull :: [Json] -> [Json]
exceptNull [] = []
exceptNull (JsNull:xs) = exceptNull xs
exceptNull (x:xs) = x:(exceptNull xs)

commaSeparate :: (Show a) => [a] -> String
commaSeparate [] = ""
commaSeparate (x:[]) = show x
commaSeparate (x:xs) = (show x) ++ "," ++ (commaSeparate xs)

{-
backus naur form of json(ish)
JsonObject ::= { stmt }
stmt       ::= pair delim
delim      ::= , stmt | ε
pair       ::= key : value
key        ::= String
value      ::= String | Bool | Number | List | JsonObject
List       ::= [ stmt* ]
String     ::= "[a-zA-Z0-9]"
Bool       ::= False | True
Number     ::= -?[0-9]+
-}

jnumber = do { m <- many1 digit; n <- return $ JsonNumber m; return n}
bool = do { m <- mplus (string "False") (string "True"); n <- return $ JsBool m; return n }
str = do { symb "\""; s <- notCloseQuote; symb "\""; n <- return $ JsonString s; return n }

delim = do mplus (do {symb ""; return [JsNull]}) (do {space; symb ","; space; s <- stmt; return s })

stmt = do { p <- pair; d <- delim; return (p:d) }
list = do { symb "["; m <- many stmt; symb "]"; return $ JsonArray $ concat m}
key = str
value = str +++ bool +++ jnumber +++ list +++ jsonObj
pair = do { k <- key; space; symb ":"; space; v <- value; return $ JsonPair (k, v) }
jsonObj = do { symb "{" ; s <- stmt; symb "}"; return $ JsonObj $ JsonObject s }

leng :: Json -> Int
leng (JsonObj (JsonObject j)) = length j

parseJson :: String -> Maybe JsonObject
parseJson s = case parseJson' s of
  Nothing -> Nothing
  Just (JsonObj j) -> Just j
  Just _ -> Nothing

parseJson' :: String -> Maybe Json
parseJson' s = maybeParse $ parse jsonObj $ trim s
              where
                maybeParse [] = Nothing
                maybeParse x  = Just $ parse' x
                parse' x = head $ qsort (leng) $ map (\x -> fst x) x

trim :: String -> String
trim s = dropWhile (\x -> any (==x) ['\t', '\r', '\n', ' ']) s

qsort :: (a -> Int) -> [a] -> [a]
qsort _  [] =[]
qsort c (p:rest) = (qsort c lesser) ++ [p] ++ (qsort c greater)
                 where
                   lesser = filter (\x -> (c x) < (c p)) rest
                   greater = filter (\x -> (c x) >= (c p)) rest