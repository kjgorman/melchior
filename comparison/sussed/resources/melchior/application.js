// Comparisons.Sussed
var $Comparisons=
 ($Comparisons ? $Comparisons : {});
$Comparisons.$Sussed=
 ($Comparisons.$Sussed ? $Comparisons.$Sussed : {});
$Comparisons.$Sussed.$__20__10__0=
 new _F_(function($__,$pivot,$_24x__17__12__0)
         {return new _A_($UHC.$Base.$_3c,[$__,$_24x__17__12__0,$pivot]);});
$Comparisons.$Sussed.$__20__18__0=
 new _F_(function($__,$pivot,$_24x__17__14__0)
         {return new _A_($UHC.$Base.$_3e_3d,[$__,$_24x__17__14__0,$pivot]);});
$Comparisons.$Sussed.$qsort=
 new _F_(function($__,$x1)
         {var $__3=
           _e_($x1);
          var $__swJSW0__0;
          switch($__3._tag_)
           {case 0:
             var $__6=
              new _A_($Comparisons.$Sussed.$__20__10__0,[$__,$__3._1]);
             var $lesser=
              new _A_($UHC.$Base.$filter,[$__6,$__3._2]);
             var $__8=
              new _A_($Comparisons.$Sussed.$__20__18__0,[$__,$__3._1]);
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
$Comparisons.$Sussed.$__18__410__0NEW11UNQ67CCN=
 new _F_(function($__,$x1,$x2)
         {var $y=
           new _A_($Comparisons.$Sussed.$yNEW15UNQ68CCN,[$__,$x1,$x2]);
          var $x25=
           _e_($x2);
          var $__swJSW1__0;
          switch($x25._tag_)
           {case 0:
             $__swJSW1__0=
              $y;
             break;
            case 1:
             $__swJSW1__0=
              $x1;
             break;}
          return $__swJSW1__0;});
$Comparisons.$Sussed.$yNEW15UNQ68CCN=
 new _F_(function($__,$x1,$x2)
         {var $x14=
           _e_($x1);
          var $__swJSW2__0;
          switch($x14._tag_)
           {case 0:
             var $x27=
              _e_($x2);
             var $__swJSW3__0;
             switch($x27._tag_)
              {case 0:
                var $__10=
                 new _A_($UHC.$Base.$_3c,[$__,$x14._1,$x27._1]);
                var $__11=
                 _e_($__10);
                var $__swJSW4__0;
                switch($__11._tag_)
                 {case 0:
                   var $__12=
                    new _A_($UHC.$Base.$_3a,[$x14._1,$x14._2]);
                   var $__13=
                    new _A_($Comparisons.$Sussed.$merge,[$__,$x27._2,$__12]);
                   var $__14=
                    new _A_($UHC.$Base.$_3a,[$x27._1,$__13]);
                   $__swJSW4__0=
                    $__14;
                   break;
                  case 1:
                   var $__15=
                    new _A_($UHC.$Base.$_3a,[$x27._1,$x27._2]);
                   var $__16=
                    new _A_($Comparisons.$Sussed.$merge,[$__,$x14._2,$__15]);
                   var $__17=
                    new _A_($UHC.$Base.$_3a,[$x14._1,$__16]);
                   $__swJSW4__0=
                    $__17;
                   break;}
                $__swJSW3__0=
                 $__swJSW4__0;
                break;
               case 1:
                $__swJSW3__0=
                 $UHC.$Base.$undefined;
                break;}
             $__swJSW2__0=
              $__swJSW3__0;
             break;
            case 1:
             $__swJSW2__0=
              $UHC.$Base.$undefined;
             break;}
          return $__swJSW2__0;});
$Comparisons.$Sussed.$merge=
 new _F_(function($__,$x1,$x2)
         {var $__4=
           new _A_($Comparisons.$Sussed.$__18__410__0NEW11UNQ67CCN,[$__,$x1,$x2]);
          var $x15=
           _e_($x1);
          var $__swJSW5__0;
          switch($x15._tag_)
           {case 0:
             $__swJSW5__0=
              $__4;
             break;
            case 1:
             $__swJSW5__0=
              $x2;
             break;}
          return $__swJSW5__0;});
$Comparisons.$Sussed.$__18__635__0NEW32UNQ95CCN=
 new _F_(function($__,$x1)
         {var $__3=
           new _A_($UHC.$Base.$length,[$x1]);
          var $half=
           new _A_($UHC.$Base.$div,[$UHC.$Base.$Integral__DCT73__110__0,$__3,2]);
          var $one=
           new _A_($UHC.$Base.$take,[$half,$x1]);
          var $two=
           new _A_($UHC.$Base.$drop,[$half,$x1]);
          var $__7=
           new _A_($Comparisons.$Sussed.$msort,[$__,$two]);
          var $__8=
           new _A_($Comparisons.$Sussed.$msort,[$__,$one]);
          return new _A_($Comparisons.$Sussed.$merge,[$__,$__8,$__7]);});
$Comparisons.$Sussed.$msort=
 new _F_(function($__,$x1)
         {var $__3=
           new _A_($Comparisons.$Sussed.$__18__635__0NEW32UNQ95CCN,[$__,$x1]);
          var $__4=
           _e_($x1);
          var $__swJSW6__0;
          switch($__4._tag_)
           {case 0:
             var $__7=
              _e_($__4._2);
             var $__swJSW7__0;
             switch($__7._tag_)
              {case 0:
                $__swJSW7__0=
                 $__3;
                break;
               case 1:
                var $__10=
                 new _A_($UHC.$Base.$_3a,[$__4._1,$UHC.$Base.$_5b_5d]);
                $__swJSW7__0=
                 $__10;
                break;}
             $__swJSW6__0=
              $__swJSW7__0;
             break;
            case 1:
             $__swJSW6__0=
              $UHC.$Base.$_5b_5d;
             break;}
          return $__swJSW6__0;});
$Comparisons.$Sussed.$_24okUNQ114=
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
                  return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Remote.$Internal.$ParserUtils.$Monad__DCT55__0__0,$__,$Comparisons.$Sussed.$_24okUNQ114]);}),[]);
$Comparisons.$Sussed.$numbers=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Remote.$Internal.$ParserUtils.$many1,[$Comparisons.$Sussed.$numberAndDelim]);}),[]);
$Comparisons.$Sussed.$stringify=
 new _A_(new _F_(function()
                 {return new _A_($Control.$Applicative.$_3c_24_3e,[$Melchior.$Control.$Functor__DCT25__0__0,$Language.$UHC.$JScript.$ECMA.$String.$jsStringToString]);}),[]);
$Comparisons.$Sussed.$stringListToNumbers=
 new _F_(function($s)
         {var $__=
           new _A_($Melchior.$Remote.$Internal.$ParserUtils.$parse,[$Comparisons.$Sussed.$numbers,$s]);
          var $__3=
           _e_($__);
          var $__swJSW8__0;
          switch($__3._tag_)
           {case 0:
             var $__6=
              new _A_($UHC.$Base.$fst,[$__3._1]);
             var $__7=
              new _A_($UHC.$Base.$read,[$UHC.$Base.$Read__DCT73__127__0]);
             var $__8=
              new _A_($UHC.$Base.$map,[$__7,$__6]);
             $__swJSW8__0=
              $__8;
             break;
            case 1:
             $__swJSW8__0=
              $UHC.$Base.$_5b_5d;
             break;}
          return $__swJSW8__0;});
$Comparisons.$Sussed.$parseToNumbers=
 new _F_(function($s)
         {var $__=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$jsStringToString,[$s]);
          return new _A_($UHC.$Base.$_24,[$Comparisons.$Sussed.$stringListToNumbers,$__]);});
$Comparisons.$Sussed.$_24okUNQ143=
 new _F_(function($__,$html,$__3,$inp,$_24x)
         {var $__6=
           new _A_($Melchior.$Dom.$Selectors.$from,[$__]);
          var $__7=
           new _A_($UHC.$Base.$packedStringToString,["merge"]);
          var $__8=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT43__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT43__7__0,$__7]);
          var $__9=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT43__11__0,$__8,$__6]);
          var $__10=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__9,$html]);
          var $__11=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__10,$Comparisons.$Sussed.$__20__234__0]);
          var $__12=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__11]);
          var $__13=
           new _A_($Comparisons.$Sussed.$_24okUNQ150,[$__3,$inp,$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT19__1__0,$__12,$__13]);});
$Comparisons.$Sussed.$_24okUNQ150=
 new _F_(function($__,$inp,$_24x,$_24x4)
         {var $__5=
           new _A_($Melchior.$Dom.$Html.$Renderable__DCT13__7__0,[$Melchior.$Dom.$Html.$Renderable__DCT13__2__0,$UHC.$Base.$Show__DCT73__128__0]);
          var $__6=
           new _A_($Melchior.$Dom.$Events.$ElementEvt__,[$Melchior.$Dom.$Events.$InputEvt__]);
          var $__7=
           new _A_($UHC.$Base.$packedStringToString,["string"]);
          var $__8=
           new _A_($Melchior.$Control.$Of__,[$__7]);
          var $__9=
           new _A_($Melchior.$Control.$createEventedSignal,[$__,$__8,$inp,$__6]);
          var $__10=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT19__1__0]);
          var $__11=
           new _A_($UHC.$Base.$_24,[$__10,$__9]);
          var $__12=
           new _A_($Comparisons.$Sussed.$_24okUNQ166,[$__,$inp,$_24x,$_24x4,$__5]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT19__1__0,$__11,$__12]);});
$Comparisons.$Sussed.$_24okUNQ166=
 new _F_(function($__,$inp,$_24x,$_24x4,$__5,$_24x6)
         {var $__7=
           new _A_($Comparisons.$Sussed.$__20__192__0,[$__,$inp]);
          var $__8=
           new _A_($Control.$Applicative.$_3c_24_3e,[$Melchior.$Control.$Functor__DCT25__0__0,$__7,$_24x6]);
          var $__9=
           new _A_($Melchior.$Control.$put,[$__5,$_24x4,$__8]);
          var $__10=
           new _A_($Comparisons.$Sussed.$__20__175__0,[$__,$inp]);
          var $__11=
           new _A_($Control.$Applicative.$_3c_24_3e,[$Melchior.$Control.$Functor__DCT25__0__0,$__10,$_24x6]);
          var $__12=
           new _A_($Melchior.$Control.$put,[$__5,$_24x,$__11]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT19__1__0,$__12,$__9]);});
$Comparisons.$Sussed.$__20__192__0=
 new _F_(function($__,$inp,$__3)
         {var $__4=
           new _A_($Melchior.$Dom.$toInput,[$__,$inp]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$value,$__4]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Comparisons.$Sussed.$parseToNumbers,$__5]);
          var $__7=
           new _A_($Comparisons.$Sussed.$msort,[$UHC.$Base.$Ord__DCT73__91__0]);
          return new _A_($UHC.$Base.$_24,[$__7,$__6]);});
$Comparisons.$Sussed.$__20__175__0=
 new _F_(function($__,$inp,$__3)
         {var $__4=
           new _A_($Melchior.$Dom.$toInput,[$__,$inp]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$value,$__4]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Comparisons.$Sussed.$parseToNumbers,$__5]);
          var $__7=
           new _A_($Comparisons.$Sussed.$qsort,[$UHC.$Base.$Ord__DCT73__91__0]);
          return new _A_($UHC.$Base.$_24,[$__7,$__6]);});
$Comparisons.$Sussed.$__20__234__0=
 new _F_(function($m)
         {var $__=
           new _A_($Melchior.$Dom.$ensures,[$Melchior.$Dom.$DomNode__DCT19__5__0,$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$Comparisons.$Sussed.$__20__259__0=
 new _F_(function($m)
         {var $__=
           new _A_($Melchior.$Dom.$ensures,[$Melchior.$Dom.$DomNode__DCT19__5__0,$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$Comparisons.$Sussed.$manualSorting=
 new _F_(function($__,$html,$__3,$inp)
         {var $__5=
           new _A_($Melchior.$Dom.$Selectors.$from,[$__]);
          var $__6=
           new _A_($UHC.$Base.$packedStringToString,["quick"]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT43__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT43__7__0,$__6]);
          var $__8=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT43__11__0,$__7,$__5]);
          var $__9=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__8,$html]);
          var $__10=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__9,$Comparisons.$Sussed.$__20__259__0]);
          var $__11=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__10]);
          var $__12=
           new _A_($Comparisons.$Sussed.$_24okUNQ143,[$__,$html,$__3,$inp]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT19__1__0,$__11,$__12]);});
$Comparisons.$Sussed.$_24okUNQ186=
 new _F_(function($html,$_24x)
         {var $__=
           new _A_($Comparisons.$Sussed.$__20__279NEW110,[$html,$_24x]);
          var $__4=
           new _A_($Comparisons.$Sussed.$manualSorting,[$Melchior.$Dom.$Selectors.$Nodes__DCT43__7__0,$html,$Melchior.$Dom.$DomNode__DCT19__5__0,$_24x]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT19__1__0,$__4,$__]);});
$Comparisons.$Sussed.$__20__279NEW110=
 new _F_(function($html,$_24x)
         {var $__=
           new _A_($UHC.$Base.$Show__DCT73__87__0,[$UHC.$Base.$Show__DCT73__65__0]);
          var $__4=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT43__7__0]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToString,["remote"]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT43__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT43__7__0,$__5]);
          var $__7=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT43__11__0,$__6,$__4]);
          var $__8=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__7,$html]);
          var $__9=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__8,$Comparisons.$Sussed.$__20__321__0]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__9]);
          var $__11=
           new _A_($Comparisons.$Sussed.$_24okUNQ195,[$html,$_24x,$__]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT19__1__0,$__10,$__11]);});
$Comparisons.$Sussed.$_24okUNQ195=
 new _F_(function($html,$_24x,$__,$_24x4)
         {var $__5=
           new _A_($UHC.$Base.$head,[$html]);
          var $__6=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT19__1__0]);
          var $__7=
           new _A_($UHC.$Base.$_24,[$__6,$__5]);
          var $__8=
           new _A_($Melchior.$EventSources.$Mouse.$click,[$_24x4]);
          var $__9=
           new _A_($UHC.$Base.$packedStringToString,["/numbers"]);
          var $__10=
           new _A_($Melchior.$Remote.$XHR.$remote,[$Melchior.$Remote.$XHR.$GET__,$__9,$__8]);
          var $__11=
           new _A_($Comparisons.$Sussed.$stringify,[$__10]);
          var $__12=
           new _A_($Melchior.$Dom.$toInput,[$Melchior.$Dom.$DomNode__DCT19__5__0,$_24x]);
          var $__13=
           new _A_($Melchior.$Control.$setValue,[$__,$__12]);
          var $__14=
           new _A_($UHC.$Base.$_24,[$__13,$__11]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT19__1__0,$__14,$__7]);});
$Comparisons.$Sussed.$__20__321__0=
 new _F_(function($m)
         {var $__=
           new _A_($Melchior.$Dom.$ensures,[$Melchior.$Dom.$DomNode__DCT19__5__0,$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$Comparisons.$Sussed.$__20__346__0=
 new _F_(function($m)
         {var $__=
           new _A_($Melchior.$Dom.$ensures,[$Melchior.$Dom.$DomNode__DCT19__5__0,$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$Comparisons.$Sussed.$setupSorting=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT43__7__0]);
          var $__3=
           new _A_($UHC.$Base.$packedStringToString,["inp"]);
          var $__4=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT43__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT43__7__0,$__3]);
          var $__5=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT43__11__0,$__4,$__]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__5,$html]);
          var $__7=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__6,$Comparisons.$Sussed.$__20__346__0]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__7]);
          var $__9=
           new _A_($Comparisons.$Sussed.$_24okUNQ186,[$html]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT19__1__0,$__8,$__9]);});
$Comparisons.$Sussed.$main=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Control.$runDom,[$Comparisons.$Sussed.$setupSorting]);}),[]);
var $main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Run.$ehcRunMain,[$Comparisons.$Sussed.$main]);}),[]);
_e_(new _A_($main,[[]]));
