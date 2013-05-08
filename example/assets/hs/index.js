// index
var $index=
 ($index ? $index : {});
$index.$pass=
 new _F_(function($__,$__2)
         {var $__3=
           _e_($__);
          var $__4=
           _e_($__2);
          return log($__4,$__3);});
$index.$log=
 new _F_(function($__,$__2)
         {var $__3=
           _e_($__);
          var $__4=
           _e_($__2);
          return log($__4,$__3);});
$index.$terminal=
 new _F_(function($s)
         {var $__=
           new _A_($UHC.$Base.$_24_21,[$Melchior.$Control.$signalIO]);
          return new _A_($Melchior.$Control.$pipe,[$s,$__]);});
$index.$__20__29__0=
 new _F_(function($s,$x)
         {var $__=
           new _A_($Melchior.$Control.$source,[$s]);
          var $__4=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$siblings,$__]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$UHC.$Base.$head,$__4]);
          var $__6=
           new _A_($UHC.$Base.$packedStringToString,["checked"]);
          var $__7=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$__6]);
          var $__8=
           new _A_($Melchior.$Dom.$toggle,[$__7]);
          return new _A_($UHC.$Base.$_24,[$__8,$__5]);});
$index.$strike=
 new _F_(function($s)
         {var $__=
           new _A_($index.$__20__29__0,[$s]);
          return new _A_($Melchior.$Control.$pipe,[$s,$__]);});
$index.$__20__52__0=
 new _F_(function($s,$stripClass,$x)
         {var $__=
           new _A_($UHC.$Base.$_24,[$Melchior.$Control.$source,$s]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$parentOf,$__]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$siblings,$__5]);
          var $__7=
           new _A_($Melchior.$Data.$List.$map,[$stripClass]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$__7,$__6]);
          var $__9=
           new _A_($Melchior.$Control.$passThrough,[$x]);
          return new _A_($UHC.$Base.$_24,[$__9,$__8]);});
$index.$removeSiblingClass=
 new _F_(function($cls,$s)
         {var $__=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$cls]);
          var $stripClass=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$removeClass,$__]);
          var $__5=
           new _A_($index.$__20__52__0,[$s,$stripClass]);
          return new _A_($Melchior.$Control.$pipe,[$s,$__5]);});
$index.$__20__73__0=
 new _F_(function($cls,$s,$x)
         {var $__=
           new _A_($Melchior.$Control.$source,[$s]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$parentOf,$__]);
          var $__6=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$cls]);
          var $__7=
           new _A_($Melchior.$Dom.$addClass,[$__6]);
          return new _A_($UHC.$Base.$_24,[$__7,$__5]);});
$index.$addClassToParent=
 new _F_(function($cls,$s)
         {var $__=
           new _A_($index.$__20__73__0,[$cls,$s]);
          return new _A_($Melchior.$Control.$pipe,[$s,$__]);});
$index.$clickListener=
 new _F_(function($e)
         {var $__=
           new _A_($UHC.$Base.$packedStringToString,["innerHTML"]);
          var $__3=
           new _A_($Melchior.$Dom.$Events.$MouseEvt__,[$Melchior.$Dom.$Events.$ClickEvt__]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["jsstring"]);
          var $__5=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$__4]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Melchior.$Control.$Of__,$__5]);
          return new _A_($Melchior.$Control.$createEventedSignalOf,[$Melchior.$Dom.$DomNode__DCT10__4__0,$__6,$e,$__3,$__]);});
$index.$__20__101__0=
 new _F_(function($x)
         {var $__=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__3=
           new _A_($UHC.$Base.$_24_21,[$__,$x]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["lifted"]);
          var $__5=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$__4]);
          var $__6=
           new _A_($index.$pass,[$__5]);
          return new _A_($UHC.$Base.$_24,[$__6,$__3]);});
$index.$liftSignal=
 new _F_(function($s)
         {return new _A_($Melchior.$Control.$pipe,[$s,$index.$__20__101__0]);});
$index.$__20__118__0=
 new _F_(function($cls,$x)
         {var $__=
           new _A_($index.$__20__122NEW47,[$cls,$x]);
          return new _A_($UHC.$Base.$_24,[$Melchior.$Control.$signalIO,$__]);});
$index.$__20__122NEW47=
 new _F_(function($cls,$x)
         {var $__=
           new _A_($index.$_24okUNQ67,[$cls]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$x,$__]);});
$index.$_24okUNQ67=
 new _F_(function($cls,$_24x)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT10__6__0,$Melchior.$Dom.$document]);
          var $__4=
           new _A_($UHC.$Base.$_3a,[$__,$UHC.$Base.$_5b_5d]);
          var $__5=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$jsStringToString,[$_24x]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Selectors.$byId,$__5]);
          var $__7=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Selectors.$Selector__,$__6]);
          var $__8=
           new _A_($Melchior.$Dom.$Selectors.$get,[$Melchior.$Dom.$DomNode__DCT10__4__0,$__7,$__4]);
          var $__9=
           new _A_($Melchior.$Data.$List.$head,[$Melchior.$Dom.$DomNode__DCT10__4__0]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$__9,$__8]);
          var $__11=
           new _A_($index.$_24okUNQ71,[$cls,$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$__10,$__11]);});
$index.$_24okUNQ71=
 new _F_(function($cls,$_24x,$_24x3)
         {var $__=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__5=
           new _A_($UHC.$Base.$_24_21,[$__,$_24x]);
          var $__6=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$cls]);
          var $__7=
           new _A_($Melchior.$Dom.$removeClass,[$__6,$_24x3]);
          var $__8=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__9=
           new _A_($UHC.$Base.$_24_21,[$__8,$__7]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__9,$__5]);});
$index.$removeClassFrom=
 new _F_(function($cls,$s)
         {var $__=
           new _A_($index.$__20__118__0,[$cls]);
          return new _A_($Melchior.$Control.$pipe,[$s,$__]);});
$index.$_24okUNQ111=
 new _F_(function($_24x)
         {var $__=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0,$_24x]);
          var $__3=
           new _A_($Melchior.$Data.$List.$head,[$Melchior.$Dom.$DomNode__DCT10__4__0]);
          var $__4=
           new _A_($UHC.$Base.$_24,[$__3,$__]);
          var $__5=
           new _A_($Melchior.$Data.$List.$map,[$index.$clickListener,$_24x]);
          var $__6=
           new _A_($Melchior.$Data.$List.$map,[$index.$strike]);
          var $__7=
           new _A_($UHC.$Base.$_24,[$__6,$__5]);
          var $__8=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$__8,$__7]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__9,$__4]);});
$index.$setupClickListeners=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT10__6__0,$html]);
          var $__3=
           new _A_($UHC.$Base.$_3a,[$__,$UHC.$Base.$_5b_5d]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["check"]);
          var $__5=
           new _A_($Melchior.$Dom.$Selectors.$byClass,[$__4]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Selectors.$Selector__,$__5]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$get,[$Melchior.$Dom.$DomNode__DCT10__4__0,$__6]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$__7,$__3]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$__8,$index.$_24okUNQ111]);});
$index.$_24okUNQ101=
 new _F_(function($_24x)
         {var $__=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0,$_24x]);
          var $__3=
           new _A_($index.$clickListener,[$_24x]);
          var $__4=
           new _A_($UHC.$Base.$_24,[$index.$strike,$__3]);
          var $__5=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$__5,$__4]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__6,$__]);});
$index.$setupMainButton=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT10__6__0,$html]);
          var $__3=
           new _A_($UHC.$Base.$_3a,[$__,$UHC.$Base.$_5b_5d]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["btn-success"]);
          var $__5=
           new _A_($Melchior.$Dom.$Selectors.$byClass,[$__4]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Selectors.$Selector__,$__5]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$get,[$Melchior.$Dom.$DomNode__DCT10__4__0,$__6]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$__7,$__3]);
          var $__9=
           new _A_($Melchior.$Data.$List.$head,[$Melchior.$Dom.$DomNode__DCT10__4__0]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$__9,$__8]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$__10,$index.$_24okUNQ101]);});
$index.$__20__240__0=
 new _F_(function($cls,$z)
         {var $__=
           new _A_($index.$__20__247NEW101,[$cls,$z]);
          var $__4=
           new _A_($UHC.$Base.$_24,[$Melchior.$Control.$signalIO,$__]);
          var $__5=
           new _A_($Melchior.$Control.$passThrough,[$z]);
          return new _A_($UHC.$Base.$_24_21,[$__5,$__4]);});
$index.$__20__247NEW101=
 new _F_(function($cls,$z)
         {var $__=
           new _A_($index.$_24okUNQ86,[$cls,$z]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$z,$__]);});
$index.$_24okUNQ86=
 new _F_(function($cls,$z,$_24x)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT10__6__0,$Melchior.$Dom.$document]);
          var $__5=
           new _A_($UHC.$Base.$_3a,[$__,$UHC.$Base.$_5b_5d]);
          var $__6=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$jsStringToString,[$_24x]);
          var $__7=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Selectors.$byId,$__6]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Selectors.$Selector__,$__7]);
          var $__9=
           new _A_($Melchior.$Dom.$Selectors.$get,[$Melchior.$Dom.$DomNode__DCT10__4__0,$__8,$__5]);
          var $__10=
           new _A_($Melchior.$Data.$List.$head,[$Melchior.$Dom.$DomNode__DCT10__4__0]);
          var $__11=
           new _A_($UHC.$Base.$_24,[$__10,$__9]);
          var $__12=
           new _A_($index.$_24okUNQ93,[$cls,$z]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$__11,$__12]);});
$index.$_24okUNQ93=
 new _F_(function($cls,$z,$_24x)
         {var $__=
           new _A_($Melchior.$Dom.$siblings,[$_24x]);
          var $__5=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$cls]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$addClass,$__5]);
          var $__7=
           new _A_($Melchior.$Data.$List.$map,[$__6]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$__7,$__]);
          var $__9=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__10=
           new _A_($UHC.$Base.$_24_21,[$__9,$__8]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__10,$z]);});
$index.$addClassToSiblings=
 new _F_(function($cls,$s)
         {var $__=
           new _A_($index.$__20__240__0,[$cls]);
          return new _A_($Melchior.$Control.$pipe,[$s,$__]);});
$index.$_24okUNQ120=
 new _F_(function($html,$_24x)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT10__6__0,$html]);
          var $__4=
           new _A_($UHC.$Base.$_3a,[$__,$UHC.$Base.$_5b_5d]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToString,["link"]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$byClass,[$__5]);
          var $__7=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Selectors.$Selector__,$__6]);
          var $__8=
           new _A_($Melchior.$Dom.$Selectors.$get,[$Melchior.$Dom.$DomNode__DCT10__4__0,$__7]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$__8,$__4]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$__9,$index.$_24okUNQ128]);});
$index.$_24okUNQ128=
 new _F_(function($_24x)
         {var $__=
           new _A_($Melchior.$Data.$List.$map,[$index.$clickListener,$_24x]);
          var $__3=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__4=
           new _A_($UHC.$Base.$_24,[$__3,$__]);
          var $__5=
           new _A_($index.$_24okUNQ138,[$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$__4,$__5]);});
$index.$_24okUNQ138=
 new _F_(function($_24x,$_24x2)
         {var $__=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0,$_24x]);
          var $__4=
           new _A_($Melchior.$Data.$List.$head,[$Melchior.$Dom.$DomNode__DCT10__4__0]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$__4,$__]);
          var $__6=
           new _A_($Melchior.$Data.$List.$map,[$index.$liftSignal,$_24x2]);
          var $__7=
           new _A_($UHC.$Base.$packedStringToString,["hidden"]);
          var $__8=
           new _A_($index.$removeClassFrom,[$__7]);
          var $__9=
           new _A_($UHC.$Base.$packedStringToString,["hidden"]);
          var $__10=
           new _A_($index.$addClassToSiblings,[$__9]);
          var $__11=
           new _A_($Melchior.$Control.$_3e_3e_3e,[$__10,$__8]);
          var $__12=
           new _A_($Melchior.$Control.$_3e_3e_3e,[$__11,$index.$terminal]);
          var $__13=
           new _A_($Melchior.$Data.$List.$map,[$__12]);
          var $__14=
           new _A_($UHC.$Base.$_24,[$__13,$__6]);
          var $__15=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__16=
           new _A_($UHC.$Base.$_24,[$__15,$__14]);
          var $__17=
           new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__16,$__5]);
          var $__18=
           new _A_($UHC.$Base.$packedStringToString,["active"]);
          var $__19=
           new _A_($index.$addClassToParent,[$__18]);
          var $__20=
           new _A_($UHC.$Base.$packedStringToString,["active"]);
          var $__21=
           new _A_($index.$removeSiblingClass,[$__20]);
          var $__22=
           new _A_($Melchior.$Control.$_3e_3e_3e,[$__21,$__19]);
          var $__23=
           new _A_($Melchior.$Data.$List.$map,[$__22,$_24x2]);
          var $__24=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__25=
           new _A_($UHC.$Base.$_24,[$__24,$__23]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__25,$__17]);});
$index.$setupNavLinks=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT10__6__0,$html]);
          var $__3=
           new _A_($UHC.$Base.$_3a,[$__,$UHC.$Base.$_5b_5d]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["jumbotron"]);
          var $__5=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$__4]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Selectors.$Selector__,$__5]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$get,[$Melchior.$Dom.$DomNode__DCT10__4__0,$__6]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$__7,$__3]);
          var $__9=
           new _A_($Melchior.$Data.$List.$head,[$Melchior.$Dom.$DomNode__DCT10__4__0]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$__9,$__8]);
          var $__11=
           new _A_($index.$_24okUNQ120,[$html]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$__10,$__11]);});
$index.$__20__381__0=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT10__6__0,$html]);
          var $__3=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__4=
           new _A_($UHC.$Base.$_24,[$__3,$__]);
          var $__5=
           new _A_($index.$setupMainButton,[$html]);
          var $__6=
           new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__5,$__4]);
          var $__7=
           new _A_($index.$setupClickListeners,[$html]);
          var $__8=
           new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__7,$__6]);
          var $__9=
           new _A_($index.$setupNavLinks,[$html]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__9,$__8]);});
$index.$main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_24,[$Melchior.$Control.$runDom,$index.$__20__381__0]);}),[]);
var $main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Run.$ehcRunMain,[$index.$main]);}),[]);
_e_(new _A_($main,[[]]));
