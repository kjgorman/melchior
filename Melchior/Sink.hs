module Melchior.Sink (
    terminate
  , setValue
  , put
  , append
  , prepend
  ) where

import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Html

terminate :: Signal a -> (a -> IO ()) -> Dom ()
terminate s f = Dom $ primTerminate s f

foreign import js "Signals.terminate(%1, %2)"
  primTerminate :: Signal a -> (a -> IO ()) -> IO ()

setValue :: (Show a) => Input -> Signal a -> Dom ()
setValue i s = terminate s (\x -> setV i (show x))

put :: (Renderable a) => Element -> Signal a -> Dom ()
put el s = terminate s (\x -> return $ set el "innerHTML" $ render x)

append :: (Renderable a) => Element -> Signal a -> Dom ()
append el s = terminate s (\x -> appendHtml el $ render x)

prepend :: (Renderable a) => Element -> Signal a -> Dom ()
prepend el s = terminate s (\x -> prependHtml el $ render x)
