{-# LANGUAGE OverloadedStrings #-}
module Main where

import           Control.Applicative
import           Control.Monad.IO.Class
import           Data.Aeson.Types
import           Data.Time.Clock
import           Snap.Core
import           Snap.Util.FileServe
import           Snap.Http.Server
import           Snap.Extras.JSON (writeJSON)

main :: IO ()
main = quickHttpServe site

site :: Snap ()
site =
    ifTop (serveFile "./static/index.html") <|>
    route [ ("ajax", writeTime)] <|>
    dir "static" (serveDirectory "./static/")

writeTime :: Snap ()
writeTime = do
  t <- liftIO time
  writeJSON t

time :: IO Datum
time = tm >>= \t -> return (Datum "time" t)
  where tm = getCurrentTime >>= return . floor . toRational . utctDayTime

data Datum = Datum String Integer

instance ToJSON Datum where
  toJSON (Datum k v) = object ["key" .= k, "value" .= v]