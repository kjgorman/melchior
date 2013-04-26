import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Selectors
import Melchior.Data.List
import Melchior.Test

import Prelude hiding (head)

main :: IO Element
main = runDom $ \html -> do
  elems <- get (Selector $ byClass "foo") [toElement html]
  head . return $! expects "getByClass" elems