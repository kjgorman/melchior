// Comparisons.Sussed
var $Comparisons=
 ($Comparisons ? $Comparisons : {});
$Comparisons.$Sussed=
 ($Comparisons.$Sussed ? $Comparisons.$Sussed : {});
$Comparisons.$Sussed.$__15__10__0=
 new _F_(function($__,$pivot,$_24x__12__11__0)
         {return new _A_($UHC.$Base.$_3c,[$__,$_24x__12__11__0,$pivot]);});
$Comparisons.$Sussed.$__15__18__0=
 new _F_(function($__,$pivot,$_24x__12__13__0)
         {return new _A_($UHC.$Base.$_3e_3d,[$__,$_24x__12__13__0,$pivot]);});
$Comparisons.$Sussed.$qsort=
 new _F_(function($__,$x1)
         {var $__3=
           _e_($x1);
          var $__swJSW0__0;
          switch($__3._tag_)
           {case 0:
             var $__6=
              new _A_($Comparisons.$Sussed.$__15__10__0,[$__,$__3._1]);
             var $lesser=
              new _A_($UHC.$Base.$filter,[$__6,$__3._2]);
             var $__8=
              new _A_($Comparisons.$Sussed.$__15__18__0,[$__,$__3._1]);
             var $greater=
              new _A_($UHC.$Base.$filter,[$__8,$__3._2]);
             var $__10=
              new _A_($Comparisons.$Sussed.$qsort,[$__,$greater]);
             var $__11=
              new _A_($UHC.$Base.$_3a,[$__3._1,$UHC.$Base.$_5b_5d]);
             var $__12=
              new _A_($UHC.$Base.$_2b_2b,[$__11,$__10]);
             var $__13=
              new _A_($Comparisons.$Sussed.$qsort,[$__,$lesser]);
             $__swJSW0__0=
              new _A_($UHC.$Base.$_2b_2b,[$__13,$__12]);
             break;
            case 1:
             $__swJSW0__0=
              $UHC.$Base.$_5b_5d;
             break;}
          return $__swJSW0__0;});
$Comparisons.$Sussed.$_24okUNQ45=
 new _F_(function($_24x)
         {var $__=
           new _A_($UHC.$Base.$return,[$Melchior.$Remote.$Internal.$ParserUtils.$Monad__DCT55__0__0,$_24x]);
          var $__3=
           new _A_($UHC.$Base.$return,[$Melchior.$Remote.$Internal.$ParserUtils.$Monad__DCT55__0__0,$UHC.$Base.$_5b_5d]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,[","]);
          var $__5=
           new _A_($Melchior.$Remote.$Internal.$ParserUtils.$symb,[$__4]);
          var $__6=
           new _A_($Melchior.$Remote.$Internal.$ParserUtils.$_2b_2b_2b,[$__5,$__3]);
          var $__7=
           new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Remote.$Internal.$ParserUtils.$Monad__DCT55__0__0,$__6,$__]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Remote.$Internal.$ParserUtils.$Monad__DCT55__0__0,$Melchior.$Remote.$Internal.$ParserUtils.$space,$__7]);});
$Comparisons.$Sussed.$numberAndDelim=
 new _A_(new _F_(function()
                 {var $__=
                   new _A_($Melchior.$Remote.$Internal.$ParserUtils.$many1,[$Melchior.$Remote.$Internal.$ParserUtils.$digit]);
                  return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Remote.$Internal.$ParserUtils.$Monad__DCT55__0__0,$__,$Comparisons.$Sussed.$_24okUNQ45]);}),[]);
$Comparisons.$Sussed.$numbers=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Remote.$Internal.$ParserUtils.$many1,[$Comparisons.$Sussed.$numberAndDelim]);}),[]);
$Comparisons.$Sussed.$stringListToNumbers=
 new _F_(function($s)
         {var $__=
           new _A_($Melchior.$Remote.$Internal.$ParserUtils.$parse,[$Comparisons.$Sussed.$numbers,$s]);
          var $__3=
           _e_($__);
          var $__swJSW1__0;
          switch($__3._tag_)
           {case 0:
             var $__6=
              new _A_($UHC.$Base.$fst,[$__3._1]);
             var $__7=
              new _A_($UHC.$Base.$read,[$UHC.$Base.$Read__DCT73__127__0]);
             var $__8=
              new _A_($UHC.$Base.$map,[$__7,$__6]);
             $__swJSW1__0=
              $__8;
             break;
            case 1:
             $__swJSW1__0=
              $UHC.$Base.$_5b_5d;
             break;}
          return $__swJSW1__0;});
$Comparisons.$Sussed.$parseToNumbers=
 new _F_(function($s)
         {var $__=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$jsStringToString,[$s]);
          return new _A_($UHC.$Base.$_24,[$Comparisons.$Sussed.$stringListToNumbers,$__]);});
$Comparisons.$Sussed.$_24okUNQ69=
 new _F_(function($__,$html,$_24x)
         {var $__4=
           new _A_($Melchior.$Dom.$Selectors.$from,[$__]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToString,["quick"]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT43__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT43__7__0,$__5]);
          var $__7=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT43__11__0,$__6,$__4]);
          var $__8=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__7,$html]);
          var $__9=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__8,$Comparisons.$Sussed.$__15__140__0]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__9]);
          var $__11=
           new _A_($Comparisons.$Sussed.$_24okUNQ76,[$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT19__1__0,$__10,$__11]);});
$Comparisons.$Sussed.$_24okUNQ76=
 new _F_(function($_24x,$_24x2)
         {var $__=
           new _A_($Melchior.$Dom.$Html.$Renderable__DCT13__7__0,[$Melchior.$Dom.$Html.$Renderable__DCT13__2__0,$UHC.$Base.$Show__DCT73__128__0]);
          var $__4=
           new _A_($Melchior.$Dom.$Events.$ElementEvt__,[$Melchior.$Dom.$Events.$InputEvt__]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToString,["string"]);
          var $__6=
           new _A_($Melchior.$Control.$Of__,[$__5]);
          var $__7=
           new _A_($Melchior.$Control.$createEventedSignal,[$Melchior.$Dom.$DomNode__DCT19__5__0,$__6,$_24x,$__4]);
          var $__8=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT19__1__0]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$__8,$__7]);
          var $__10=
           new _A_($Comparisons.$Sussed.$_24okUNQ86,[$_24x,$_24x2,$__]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT19__1__0,$__9,$__10]);});
$Comparisons.$Sussed.$_24okUNQ86=
 new _F_(function($_24x,$_24x2,$__,$_24x4)
         {var $__5=
           new _A_($Comparisons.$Sussed.$__15__98__0,[$_24x]);
          var $__6=
           new _A_($Control.$Applicative.$_3c_24_3e,[$Melchior.$Control.$Functor__DCT25__0__0,$__5,$_24x4]);
          return new _A_($Melchior.$Control.$put,[$__,$_24x2,$__6]);});
$Comparisons.$Sussed.$__15__98__0=
 new _F_(function($_24x,$__)
         {var $__3=
           new _A_($Melchior.$Dom.$toInput,[$Melchior.$Dom.$DomNode__DCT19__5__0,$_24x]);
          var $__4=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$value,$__3]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$Comparisons.$Sussed.$parseToNumbers,$__4]);
          var $__6=
           new _A_($Comparisons.$Sussed.$qsort,[$UHC.$Base.$Ord__DCT73__91__0]);
          return new _A_($UHC.$Base.$_24,[$__6,$__5]);});
$Comparisons.$Sussed.$__15__140__0=
 new _F_(function($m)
         {var $__=
           new _A_($Melchior.$Dom.$ensures,[$Melchior.$Dom.$DomNode__DCT19__5__0,$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$Comparisons.$Sussed.$__15__165__0=
 new _F_(function($m)
         {var $__=
           new _A_($Melchior.$Dom.$ensures,[$Melchior.$Dom.$DomNode__DCT19__5__0,$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$Comparisons.$Sussed.$manualSorting=
 new _F_(function($__,$html)
         {var $__3=
           new _A_($Melchior.$Dom.$Selectors.$from,[$__]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["inp"]);
          var $__5=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT43__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT43__7__0,$__4]);
          var $__6=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT43__11__0,$__5,$__3]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__6,$html]);
          var $__8=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__7,$Comparisons.$Sussed.$__15__165__0]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__8]);
          var $__10=
           new _A_($Comparisons.$Sussed.$_24okUNQ69,[$__,$html]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT19__1__0,$__9,$__10]);});
$Comparisons.$Sussed.$setupSorting=
 new _F_(function($html)
         {var $__=
           new _A_($UHC.$Base.$head,[$html]);
          var $__3=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT19__1__0]);
          var $__4=
           new _A_($UHC.$Base.$_24,[$__3,$__]);
          var $__5=
           new _A_($Comparisons.$Sussed.$manualSorting,[$Melchior.$Dom.$Selectors.$Nodes__DCT43__7__0,$html]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT19__1__0,$__5,$__4]);});
$Comparisons.$Sussed.$main=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Control.$runDom,[$Comparisons.$Sussed.$setupSorting]);}),[]);
var $main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Run.$ehcRunMain,[$Comparisons.$Sussed.$main]);}),[]);
_e_(new _A_($main,[[]]));
