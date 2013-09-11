{-# LANGUAGE OverloadedStrings #-}
module Main where

import           Control.Applicative
import           Control.Monad
import           Control.Monad.IO.Class
import           Data.Aeson.Types
import           Snap.Core
import           Snap.Util.FileServe
import           Snap.Http.Server
import           Snap.Extras.JSON (writeJSON)
import           Database.Redis
import           Data.ByteString

main :: IO ()
main = quickHttpServe site

site :: Snap ()
site =
    ifTop (serveFile "./static/index.html") <|>
    route [ ("post", method POST addEntry) , ("get", method POST getEntry)] <|>
    dir "static" (serveDirectory "./static/")

addEntry :: Snap ()
addEntry = do
  name <- getParam "key"
  value <- getParam "value"
  liftIO $ add name value
  writeJSON $ object ["status" .= ("success"::String)]

add :: Maybe ByteString -> Maybe ByteString -> IO ()
add k v = case setter of
  Nothing -> return ()
  Just x -> x
  where setter = k >>= \key -> v >>= \value ->
          Just $ do
            conn <- connect defaultConnectInfo
            runRedis conn $ do
              set key value
              return ()

getEntry :: Snap ()
getEntry = do
  name <- getPostParam "name"
  value <- liftIO $ getn name
  writeEntry value
  where
    writeEntry (Left _) = writeBS "error"
    writeEntry (Right x) = writeJSON x

getn :: Maybe ByteString -> IO (Either Reply (Maybe ByteString))
getn n = case getter of
  Nothing -> return . Right . Just $ "could not read param"
  Just x -> x
  where getter = n >>= \name ->
          Just $ do
           conn <- connect defaultConnectInfo
           runRedis conn $ do get name


data Course = Course { title :: String, code :: Integer, points :: Integer }

instance ToJSON Course where
  toJSON c = object ["title" .= title c, "code" .= code c, "points" .= points c]

instance FromJSON Course where
  parseJSON (Object v) = Course <$>
                         v .: "title" <*>
                         v .: "code" <*>
                         v .: "points"
  parseJSON _ = mzero