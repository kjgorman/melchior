import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Selectors
import Melchior.Data.List
import Melchior.Test

import Prelude hiding (head)

main :: IO Element
main = runDom $ \html -> do
  elems <- get (Selector $ byTag "TEXTAREA") [toElement html]
  head . return $! expects "getByTagName" elems           
                