module Course where

import Melchior.Data.String
import Melchior.Dom.Html
import Melchior.Remote.Json
import Melchior.Remote.Internal.Parser
import Melchior.Remote.Internal.ParserUtils

data Course = Course { title :: String, code :: Integer, points :: Integer }

instance JsonSerialisable Course where
  fromJson (Just c) = Course (stringOrError c "title")
                      (floor $ (read (stringOrError c "code") :: Float))
                      (floor $ (read (stringOrError c "points") :: Float))
  fromJson Nothing = Course "not found" (-1) (-1)

instance Renderable Course where
  render c = stringToJSString $ (title c)++(show $ code c)++":"++(show $ points c)

instance JsonWriteable Course where
  asJson c = Just $ parseToJson' (title c) (show $ code c) (show $ points c)

instance Show Course where
  show c = (title c)++(show $ code c)++":"++(show $ points c)

parseToJson :: JSString -> JSString -> JSString -> JsonObject
parseToJson title code points = parseToJson' (jsStringToString title) (jsStringToString code) (jsStringToString points)

parseToJson' :: String -> String -> String -> JsonObject
parseToJson' title code points = JsonObject [ptitle, pcode, ppoints]
                                 where
                                   ptitle = JsonPair (JsonString "title", JsonString title)
                                   pcode = JsonPair (JsonString "code", JsonString $ show $ parseNumber code)
                                   ppoints = JsonPair (JsonString "points", JsonString $ show $ parseNumber points)

parseNumber :: String -> Int
parseNumber s = case parse numbers s of
  [] -> (-1)
  x -> (read $ fst $ head x)
  where numbers = many1 digit

getKey :: Course -> String
getKey c = (title c)++(show $ title c)