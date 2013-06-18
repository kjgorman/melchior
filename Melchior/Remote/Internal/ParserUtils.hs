module Melchior.Remote.Internal.ParserUtils where

import Control.Monad
import Data.Char

newtype Parser a = Parser (String -> [(a, String)])

parse :: Parser a -> (String -> [(a, String)])
parse (Parser p) = p

instance Monad Parser where
  return a = Parser (\cs -> [(a, cs)])
  p >>= f  = Parser (\cs -> concat [parse (f a) cs' | (a, cs') <- parse p cs])

instance MonadPlus Parser where
  mzero = Parser (\cs -> [])
  mplus p q = Parser (\cs -> parse p cs ++ parse q cs)

(+++) :: Parser a -> Parser a -> Parser a
p +++ q = Parser (\cs -> case parse (mplus p q) cs of
	                   []     -> []
                           (x:xs) -> [x])

item :: Parser Char
item = Parser (\cs -> case cs of
	                ""     -> []
	                (c:cs) -> [(c, cs)])

sat :: (Char -> Bool) -> Parser Char
sat p = do { c <- item; if p c then return c else mzero }

char :: Char -> Parser Char
char c = sat (c ==)

string :: String -> Parser String
string "" = return ""
string (c:cs) = do { char c; string cs; return (c: cs) }

many :: Parser a -> Parser [a]
many p = many1 p +++ return []

many1 :: Parser a -> Parser [a]
many1 p = do { a <- p; as <- many p; return (a:as) }

space :: Parser String
space = many (sat (\x -> any (== x) [' ', '\n', '\r', '\t']))

notSpaceAlpha :: Parser String
notSpaceAlpha = many (sat (\x -> isLetter x && any(/= x) [' ', '\n', '\r', '\t']))

isLetter :: Char -> Bool
isLetter c = ord c <= 122 && ord c >= 65

digit = do {x <- token (sat isDigit); return x }

token :: Parser a -> Parser a
token p = do { a <- p; space; return a }

symb :: String -> Parser String
symb cs = token (string cs)

number :: Parser [Char]
number = many digit