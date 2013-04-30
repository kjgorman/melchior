// userdefined
var $userdefined=
 ($userdefined ? $userdefined : {});
$userdefined.$reversal=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return reversal($__2);});
$userdefined.$inspect=
 new _F_(function($__,$__2)
         {var $__3=
           _e_($__);
          var $__4=
           _e_($__2);
          return log($__4,$__3);});
$userdefined.$reverseSignal=
 new _F_(function($s)
         {return new _A_($Melchior.$Control.$pipe,[$s,$userdefined.$reversal]);});
$userdefined.$clickResponse=
 new _F_(function($s,$e)
         {var $__=
           new _A_($Melchior.$Dom.$setBody,[$e]);
          var $__4=
           new _A_($userdefined.$reverseSignal,[$s]);
          return new _A_($Melchior.$Control.$bind,[$__4,$__]);});
$userdefined.$bindBody=
 new _F_(function($s,$e)
         {var $__=
           new _A_($Melchior.$Dom.$setBody,[$e]);
          return new _A_($Melchior.$Control.$bind,[$s,$__]);});
$userdefined.$__14__46=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT10__6__0,$Melchior.$Dom.$document]);}),[]);
$userdefined.$__14__44=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_3a,[$userdefined.$__14__46,$UHC.$Base.$_5b_5d]);}),[]);
$userdefined.$__14__43=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToString,["clickable"]);}),[]);
$userdefined.$__14__42=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Dom.$Selectors.$byClass,[$userdefined.$__14__43]);}),[]);
$userdefined.$__14__40=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Selectors.$Selector__,$userdefined.$__14__42]);}),[]);
$userdefined.$clickableElems=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Dom.$Selectors.$get,[$Melchior.$Dom.$DomNode__DCT10__4__0,$userdefined.$__14__40,$userdefined.$__14__44]);}),[]);
$userdefined.$value=
 new _F_(function($i)
         {var $__=
           new _A_($Melchior.$Dom.$Events.$ElementEvt__,[$Melchior.$Dom.$Events.$InputEvt__]);
          var $__3=
           new _A_($UHC.$Base.$packedStringToString,["string"]);
          var $__4=
           new _A_($Melchior.$Control.$Of__,[$__3]);
          return new _A_($Melchior.$Control.$createEventedSignal,[$Melchior.$Dom.$DomNode__DCT10__5__0,$__4,$i,$__]);});
$userdefined.$manualMapBind=
 new _F_(function($e,$i)
         {var $__=
           new _A_($userdefined.$value,[$i]);
          var $__4=
           new _A_($userdefined.$bindBody,[$__]);
          var $__5=
           new _A_($Melchior.$Data.$List.$map,[$__4,$e]);
          var $__6=
           new _A_($UHC.$Base.$sequence,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          return new _A_($UHC.$Base.$_24,[$__6,$__5]);});
$userdefined.$clickEdge=
 new _F_(function($e)
         {var $__=
           new _A_($UHC.$Base.$packedStringToString,["innerHTML"]);
          var $__3=
           new _A_($Melchior.$Dom.$Events.$MouseEvt__,[$Melchior.$Dom.$Events.$ClickEvt__]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["string"]);
          var $__5=
           new _A_($Melchior.$Control.$Of__,[$__4]);
          return new _A_($Melchior.$Control.$createEventedSignalOf,[$Melchior.$Dom.$DomNode__DCT10__4__0,$__5,$e,$__3,$__]);});
$userdefined.$_24okUNQ44=
 new _F_(function($html,$_24x)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT10__6__0,$html]);
          var $__4=
           new _A_($UHC.$Base.$_3a,[$__,$UHC.$Base.$_5b_5d]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToString,["output"]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$__5]);
          var $__7=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Selectors.$Selector__,$__6]);
          var $__8=
           new _A_($Melchior.$Dom.$Selectors.$get,[$Melchior.$Dom.$DomNode__DCT10__4__0,$__7]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$__8,$__4]);
          var $__10=
           new _A_($Melchior.$Data.$List.$head,[$Melchior.$Dom.$DomNode__DCT10__4__0]);
          var $__11=
           new _A_($UHC.$Base.$_24,[$__10,$__9]);
          var $__12=
           new _A_($userdefined.$_24okUNQ53,[$html,$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$__11,$__12]);});
$userdefined.$_24okUNQ53=
 new _F_(function($html,$_24x,$_24x3)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT10__6__0,$html]);
          var $__5=
           new _A_($UHC.$Base.$_3a,[$__,$UHC.$Base.$_5b_5d]);
          var $__6=
           new _A_($UHC.$Base.$packedStringToString,["elem"]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$byClass,[$__6]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Selectors.$Selector__,$__7]);
          var $__9=
           new _A_($UHC.$Base.$packedStringToString,["specific-div"]);
          var $__10=
           new _A_($Melchior.$Dom.$Selectors.$byClass,[$__9]);
          var $__11=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Selectors.$Selector__,$__10]);
          var $__12=
           new _A_($Control.$Category.$_3e_3e_3e,[$Melchior.$Dom.$Selectors.$Category__DCT16__1__0,$__11,$__8]);
          var $__13=
           new _A_($Melchior.$Dom.$Selectors.$get,[$Melchior.$Dom.$DomNode__DCT10__4__0,$__12]);
          var $__14=
           new _A_($UHC.$Base.$_24,[$__13,$__5]);
          var $__15=
           new _A_($userdefined.$_24okUNQ60,[$_24x,$_24x3]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$__14,$__15]);});
$userdefined.$_24okUNQ60=
 new _F_(function($_24x,$_24x2,$_24x3)
         {var $__=
           new _A_($Melchior.$Data.$List.$head,[$Melchior.$Dom.$DomNode__DCT10__4__0]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$__,$userdefined.$clickableElems]);
          var $__6=
           new _A_($userdefined.$_24okUNQ72,[$_24x,$_24x2,$_24x3]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$__5,$__6]);});
$userdefined.$_24okUNQ72=
 new _F_(function($_24x,$_24x2,$_24x3,$_24x4)
         {var $__=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0,$_24x]);
          var $__6=
           new _A_($userdefined.$clickEdge,[$_24x4]);
          var $__7=
           new _A_($userdefined.$clickResponse,[$__6]);
          var $__8=
           new _A_($Melchior.$Data.$List.$map,[$__7,$_24x3]);
          var $__9=
           new _A_($UHC.$Base.$sequence,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$__9,$__8]);
          var $__11=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__12=
           new _A_($UHC.$Base.$_24,[$__11,$__10]);
          var $__13=
           new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__12,$__]);
          var $__14=
           new _A_($Melchior.$Dom.$toInput,[$Melchior.$Dom.$DomNode__DCT10__4__0,$_24x]);
          var $__15=
           new _A_($userdefined.$manualMapBind,[$_24x3,$__14]);
          var $__16=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__17=
           new _A_($UHC.$Base.$_24,[$__16,$__15]);
          var $__18=
           new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__17,$__13]);
          var $__19=
           new _A_($Melchior.$Dom.$toInput,[$Melchior.$Dom.$DomNode__DCT10__4__0,$_24x]);
          var $__20=
           new _A_($UHC.$Base.$_24,[$userdefined.$value,$__19]);
          var $__21=
           new _A_($userdefined.$bindBody,[$__20,$_24x2]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__21,$__18]);});
$userdefined.$__14__85__0=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT10__6__0,$html]);
          var $__3=
           new _A_($UHC.$Base.$_3a,[$__,$UHC.$Base.$_5b_5d]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["input"]);
          var $__5=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$__4]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Selectors.$Selector__,$__5]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$get,[$Melchior.$Dom.$DomNode__DCT10__4__0,$__6]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$__7,$__3]);
          var $__9=
           new _A_($UHC.$Base.$packedStringToString,["get"]);
          var $__10=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$__9]);
          var $__11=
           new _A_($Melchior.$Dom.$Selectors.$pass,[$__10]);
          var $__12=
           new _A_($UHC.$Base.$_24,[$__11,$__8]);
          var $__13=
           new _A_($Melchior.$Data.$List.$head,[$Melchior.$Dom.$DomNode__DCT10__4__0]);
          var $__14=
           new _A_($UHC.$Base.$_24,[$__13,$__12]);
          var $__15=
           new _A_($userdefined.$_24okUNQ44,[$html]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$__14,$__15]);});
$userdefined.$main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_24,[$Melchior.$Control.$runDom,$userdefined.$__14__85__0]);}),[]);
var $main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Run.$ehcRunMain,[$userdefined.$main]);}),[]);
_e_(new _A_($main,[[]]));
