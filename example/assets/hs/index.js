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
$index.$replaceBody=
 new _A_(new _F_(function()
                 {return $Melchior.$Dom.$setBody;}),[]);
$index.$__14__26__0=
 new _F_(function($content,$x)
         {var $__=
           new _A_($index.$replaceBody,[$content]);
          return new _A_($Melchior.$Control.$bind,[$x,$__]);});
$index.$contentSwitcher=
 new _F_(function($signals,$content)
         {var $__=
           new _A_($index.$__14__26__0,[$content]);
          return new _A_($Melchior.$Data.$List.$map,[$__,$signals]);});
$index.$clickListener=
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
$index.$_24okUNQ34=
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
          var $__10=
           new _A_($UHC.$Base.$packedStringToString,["links"]);
          var $__11=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$__10]);
          var $__12=
           new _A_($index.$pass,[$__11]);
          var $__13=
           new _A_($UHC.$Base.$_24,[$__12,$__9]);
          var $__14=
           new _A_($index.$_24okUNQ43,[$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$__13,$__14]);});
$index.$_24okUNQ43=
 new _F_(function($_24x,$_24x2)
         {var $__=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0,$_24x2]);
          var $__4=
           new _A_($Melchior.$Data.$List.$head,[$Melchior.$Dom.$DomNode__DCT10__4__0]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$__4,$__]);
          var $__6=
           new _A_($Melchior.$Data.$List.$map,[$index.$clickListener,$_24x2]);
          var $__7=
           new _A_($index.$contentSwitcher,[$__6,$_24x]);
          var $__8=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$__8,$__7]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__9,$__5]);});
$index.$setupNavLinks=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT10__6__0,$html]);
          var $__3=
           new _A_($UHC.$Base.$_3a,[$__,$UHC.$Base.$_5b_5d]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["main-content"]);
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
           new _A_($index.$_24okUNQ34,[$html]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT10__0__0,$__10,$__11]);});
$index.$__14__108__0=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT10__6__0]);
          var $__3=
           new _A_($UHC.$Base.$_24,[$__,$html]);
          var $__4=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT10__0__0]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$__4,$__3]);
          var $__6=
           new _A_($index.$setupNavLinks,[$html]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT10__0__0,$__6,$__5]);});
$index.$main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_24,[$Melchior.$Control.$runDom,$index.$__14__108__0]);}),[]);
var $main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Run.$ehcRunMain,[$index.$main]);}),[]);
_e_(new _A_($main,[[]]));
