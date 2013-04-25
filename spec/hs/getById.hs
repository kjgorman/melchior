import Melchior.Control
import Melchior.Dom
import Melchior.Dom.Selectors
import Melchior.Test
import Melchior.Data.List

main :: IO Element
main = runDom $! \html -> do
  element <- head $ get (Selector $ byId "anElement") [toElement html]
  return $! expects "getById" $ element             