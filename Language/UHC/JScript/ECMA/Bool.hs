module Language.UHC.JScript.ECMA.Bool where
  
import Language.UHC.JScript.Types
  
data JSBoolPtr
type JSBool = JSBoolPtr

instance ToJS Bool JSBool where
  toJS = toJSBool

toJSBool :: Bool -> JSBool
toJSBool True  = _true
toJSBool False = _false

foreign import js "true"
  _true :: JSBool
  
foreign import js "false"
  _false :: JSBool