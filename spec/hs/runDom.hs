import Melchior.Control
import Melchior.Dom
import Melchior.Test

main :: IO Element
main = runDom $ \html -> return $! expects "runDom" $ toElement document