// userdefined
var $userdefined=
 ($userdefined ? $userdefined : {});
$userdefined.$update=
 new _F_(function($__)
         {var $__2=
           new _A_($UHC.$Base.$packedStringToString,["#output"]);
          var $__3=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$__2]);
          var $output=
           new _A_($UHC.$Base.$_24,[$Melchior.$DOM.$select,$__3]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToString,["#input"]);
          var $__6=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$__5]);
          var $input=
           new _A_($UHC.$Base.$_24,[$Melchior.$DOM.$select,$__6]);
          var $__8=
           new _A_($Melchior.$DOM.$getValue,[$input]);
          var $__9=
           new _A_($Melchior.$DOM.$setHTML,[$output,$__8]);
          return new _A_($Melchior.$Control.$Signal__,[$__9]);});
$userdefined.$__11__34=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToString,["DEBUG:: App started"]);}),[]);
$userdefined.$__11__33=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$DOM.$log,[$userdefined.$__11__34]);}),[]);
$userdefined.$__11__32=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Dom.$Events.$ElementEvt__,[$Melchior.$Dom.$Events.$Input__]);}),[]);
$userdefined.$__11__31=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Dom.$Events.$showJS,[$userdefined.$__11__32]);}),[]);
$userdefined.$__11__30=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToString,["#input"]);}),[]);
$userdefined.$__11__29=
 new _A_(new _F_(function()
                 {return new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$userdefined.$__11__30]);}),[]);
$userdefined.$__11__27=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_24,[$Melchior.$DOM.$select,$userdefined.$__11__29]);}),[]);
$userdefined.$__11__24=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$DOM.$bind,[$userdefined.$__11__27,$userdefined.$__11__31,$userdefined.$update]);}),[]);
$userdefined.$__11__23=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);}),[]);
$userdefined.$__11__21=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_24,[$userdefined.$__11__23,$userdefined.$__11__24]);}),[]);
$userdefined.$main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_3e_3e,[$UHC.$Base.$Monad__DCT73__341__0,$userdefined.$__11__21,$userdefined.$__11__33]);}),[]);
var $main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Run.$ehcRunMain,[$userdefined.$main]);}),[]);
_e_(new _A_($main,[[]]));
