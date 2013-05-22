module Melchior.Remote.Internal.Parser (
    parseJson
  , Json
  , JsonString
  , JsonObject
  ) where

import Control.Applicative

data Json = JsonString String | JsBool Bool | JsNull | JsonArray [Json] | JsonObj JsonObject
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
merge :: [String] -> [String]
merge [] = []
merge (x:[]) = [x]
merge (x:xs) | not $ elem ':' (head xs) = (x++',':(head xs)):merge (tail xs)
             | otherwise = x:merge xs

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
parsePairs [] = Nothing
parsePairs s = JsonObject <$> (sequence $ map parseKeyValue $ merge $ linesWhen (== ',')  s)

parseKeyValue :: String -> Maybe (String, Json)
parseKeyValue [] = Nothing
parseKeyValue s = sequenceTuple $ (parseKey key, parseValue value)
		  where
		  key   = takeWhile (\x -> x /= ':') (skip whitespace s)
		  value = drop 1 $ dropWhile (\x -> x /= ':') s
    
parseKey :: String -> Maybe String
parseKey [] = Nothing
parseKey s = Just s --hmmmm

parseValue :: String -> Maybe Json
parseValue s = parseValue' (head t) (tail t)
	     where t = case skip whitespace s of
                            [] -> " "
                            s  -> s

parseValue' :: Char -> String -> Maybe Json
parseValue' '[' s   = parseList   $ takeWhile (\x -> x /= ']') s
parseValue' '"' s   = parseString $ takeWhile (\x -> not $ elem x whitespace) s
parseValue' '{' s   = parseObject' s
parseValue' c@'f' s = parseFalse  $ c: takeWhile (\x -> not $ elem x whitespace) s
parseValue' c@'t' s = parseTrue   $ c: takeWhile (\x -> not $ elem x whitespace) s
parseValue' c@'n' s = parseNull   $ c: takeWhile (\x -> not $ elem x whitespace) s
parseValue' _     _ = Nothing

parseList :: String -> Maybe Json
parseList s = case sequence $ map (parseValue . skip whitespace) $ linesWhen (== ',') s of
                   Nothing -> Nothing
                   Just arr -> Just (JsonArray arr)

parseString :: String -> Maybe Json
parseString = Just . JsonString . (takeWhile (\x -> x /= '"'))

parseFalse :: String -> Maybe Json
parseFalse s = if s == "false" then Just $ JsBool False else Nothing

parseTrue :: String -> Maybe Json
parseTrue s = if s == "true" then Just $ JsBool True else Nothing

parseNull :: String -> Maybe Json
parseNull s = if s == "null" then Just JsNull else Nothing

parseObject' :: String -> Maybe Json
parseObject' s = case parseObject (Just s) of
		      Just x   -> Just . JsonObj $  x
		      Nothing  -> Nothing