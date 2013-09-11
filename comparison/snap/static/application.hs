module Snap.Client where

import Control.Applicative ((<$>))
import Control.Category
import Prelude hiding ((.), id)
import Melchior.Control
import Melchior.Data.String
import Melchior.Dom
import Melchior.Dom.Events
import Melchior.Dom.Html
import Melchior.Dom.Selectors
import Melchior.EventSources.Mouse
import Melchior.EventSources.Elements
import Melchior.Remote.Json
import Melchior.Remote.XHR
import Melchior.Remote.Internal.ParserUtils
import Melchior.Sink

main :: IO ()
main = runDom client

client :: [Element] -> Dom ()
client html = do
  sendInputs html
  retrieveGets html

sendInputs :: [Element] -> Dom ()
sendInputs html = do
  title <- Dom $ (assuredly $ select (inputs . byId "set-title" . from) html) >>= \x -> return $ inputValue x
  code <- Dom $ (assuredly $ select (inputs . byId "set-code" . from) html) >>= \x -> return $ inputValue x
  points <- Dom $ (assuredly $ select (inputs . byId "set-points" . from) html) >>= \x -> return $ inputValue x
  submit <- Dom $ assuredly $ select (byId "set-send" . from) html
  clicks <- return $ click submit
  sets <- return $ remote POST "/post" $ (\_ -> toDto $ parseToJson (sample title) (sample code) (sample points)) <$> clicks
  terminate sets (\_ -> return ())

retrieveGets :: [Element] -> Dom ()
retrieveGets html = do
  values <- Dom $ (assuredly $ select (inputs . byId "get-in" . from) html) >>= \x -> return $ inputValue x
  textSubmit <- Dom $ assuredly $ select (byId "get" . from) html
  textOut <- Dom $ assuredly $ select (byId "get-out" . from) html
  clicks <- return $ click textSubmit
  gets <- return $ remote POST "/get" $ (\_ -> toDto $ json $ sample values) <$> clicks
  put textOut (((\s -> fromJson $ toJson $ process s) <$> gets) :: Signal Course)
  where json v = JsonObject [JsonPair (JsonString "name", JsonString $ jsStringToString v)]


process :: JSString -> JSString
process t = stringToJSString $ unescape $ trimTail $ trimHead s
  where s = jsStringToString t
        trimHead s = if (head s) == '"' then tail s else s
        trimTail s = if (last s) == '"' then (take ((length s)-1) s) else s
        unescape [] = []
        unescape (x:[]) = [x]
        unescape (x:y:xs) = if x == '\\' && y == '"' then unescape (y:xs) else x:(unescape (y:xs))

data Course = Course { title :: String, code :: Integer, points :: Integer }

instance JsonSerialisable Course where
  fromJson (Just c) = Course (stringOrError c "title")
                      (floor $ (read (stringOrError c "code") :: Float))
                      (floor $ (read (stringOrError c "points") :: Float))
  fromJson Nothing = Course "not found" (-1) (-1)

instance Renderable Course where
  render c = stringToJSString $ (title c)++(show $ code c)++":"++(show $ points c)

parseToJson :: JSString -> JSString -> JSString -> JsonObject
parseToJson title code points = parseToJson' (jsStringToString title) (jsStringToString code) (jsStringToString points)

parseToJson' :: String -> String -> String -> JsonObject
parseToJson' title code points = JsonObject [key, value]
                                 where
                                   key = JsonPair (JsonString "key", JsonString (title++code))
                                   value = JsonPair (JsonString "value", JsonObj (JsonObject [ptitle, pcode, ppoints]))
                                   ptitle = JsonPair (JsonString "title", JsonString title)
                                   pcode = JsonPair (JsonString "code", JsonString $ show $ parseNumber code)
                                   ppoints = JsonPair (JsonString "points", JsonString $ show $ parseNumber points)

parseNumber :: String -> Int
parseNumber s = case parse numbers s of
  [] -> (-1)
  x -> (read $ fst $ head x)
  where numbers = many1 digit