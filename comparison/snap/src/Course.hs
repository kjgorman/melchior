module Course where

import Melchior.Data.String
import Melchior.Dom.Html
import Melchior.Remote.Json
import Melchior.Remote.Internal.Parser
import Melchior.Remote.Internal.ParserUtils

data Course = Course { title :: String, code :: Integer, points :: Integer }

-----------------------------------------------------------------------------
-- Instances
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


-----------------------------------------------------------------------------
-- Parsing
parseToJson :: JSString -> JSString -> JSString -> JsonObject
parseToJson t c p = parseToJson' (jsStringToString t) (jsStringToString c) (jsStringToString p)

parseToJson' :: String -> String -> String -> JsonObject
parseToJson' t c p = JsonObject [ptitle, pcode, ppoints]
                     where
                       ptitle = JsonPair (JsonString "title", JsonString t)
                       pcode = JsonPair (JsonString "code", JsonString . show $ parseNumber c)
                       ppoints = JsonPair (JsonString "points", JsonString . show $ parseNumber p)

parseNumber :: String -> Int
parseNumber s = case parse numbers s of
  [] -> (-1)
  x -> (read . fst $ head x)
  where numbers = many1 digit

fromString :: String -> Course
fromString s = fromJson $ parseJson s

-----------------------------------------------------------------------------
-- Operations

-- Get the database key
getKey :: Course -> String
getKey c = (title c)++(show $ title c)

-- Update the points value of a course
setPoint :: Course -> Integer -> Course
setPoint c i = Course (title c) (code c) i

-- Update the code value of a course
setCode :: Course -> Integer -> Course
setCode c i = Course (title c) i (points c)

-- Update the title value of a course
setTitle :: Course -> String -> Course
setTitle c s = Course s (code c) (points c)