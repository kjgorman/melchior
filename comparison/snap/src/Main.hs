{-# LANGUAGE OverloadedStrings #-}
module Main where

import           Control.Applicative
import           Control.Monad.IO.Class
import           Snap.Core
import           Snap.Util.FileServe
import           Snap.Http.Server
import           Snap.Extras.JSON (writeJSON)
import           Database.Redis
import qualified Data.ByteString as D
import qualified Data.ByteString.UTF8 as U
import           Course

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
  writeBS "{\"status\":\"success\"}"

add :: Maybe D.ByteString -> Maybe D.ByteString -> IO ()
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
    writeEntry (Right x) = writeBS $ clean x

getn :: Maybe D.ByteString -> IO (Either Reply (Maybe D.ByteString))
getn n = case getter of
  Nothing -> return . Right . Just $ "could not read param"
  Just x -> x
  where getter = n >>= \name ->
          Just $ do
           conn <- connect defaultConnectInfo
           runRedis conn $ get name

clean :: Maybe D.ByteString -> D.ByteString
clean Nothing = "Nothing"
clean (Just n) = U.fromString . process $ U.toString n

process :: String -> String
process = unescape . trimTail . trimHead
  where trimHead s = if (head s) == '"' then tail s else s
        trimTail s = if (last s) == '"' then (take ((length s)-1) s) else s
        unescape [] = []
        unescape (x:[]) = [x]
        unescape (x:y:xs) = if x == '\\' && y == '"' then unescape (y:xs) else x:(unescape (y:xs))