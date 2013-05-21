module Melchior.Json (
    parseJson
  , JsonObject
  , Json
  ) where

import Control.Applicative

data Json = JsonString String | JsBool Bool | JsNull | JsonObj JsonObject
            deriving (Show)

data JsonObject = JsonObject [(String, Json)]
                  deriving (Show)

sequenceTuple :: (Maybe a, Maybe b) -> Maybe (a,b)
sequenceTuple (Nothing, _) = Nothing
sequenceTuple (_,Nothing)  = Nothing
sequenceTuple (Just x, Just y) = Just (x, y)

linesWhen     :: (Char -> Bool) -> String -> [String]
linesWhen p s =  case dropWhile p s of
                      "" -> []
                      s' -> w : linesWhen p s''
                            where (w, s'') = break p s'

skip :: [Char] -> String -> String
skip c = dropWhile (\x -> elem x c)

whitespace = [' ', '\n', '\t', '\r']

match :: Char  -> String -> Maybe String
match c []     =  Nothing
match c (s:ss) =  if c == s then Just ss else Nothing

parseJson :: String -> Maybe JsonObject
parseJson = parseObject . match '{' . skip whitespace

parseObject :: Maybe String -> Maybe JsonObject
parseObject Nothing  = Nothing
parseObject (Just s) = parsePairs $ takeWhile (\x -> x /= '}') s

parsePairs :: String -> Maybe JsonObject
parsePairs s = JsonObject <$> (sequence $ map parseKeyValue $ linesWhen (== ',') s)

parseKeyValue :: String -> Maybe (String, Json)
parseKeyValue s = sequenceTuple $ (parseKey key, parseValue value)
		  where
		  key   = takeWhile (\x -> x /= ':') s
		  value = drop 1 $ dropWhile (\x -> x /= ':') s
    
parseKey :: String -> Maybe String
parseKey s = Just s

--TODO decide in probably a (1) lookahead a type for this
parseValue :: String -> Maybe Json
parseValue s = Just (JsonString s)



