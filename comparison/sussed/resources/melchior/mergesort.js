// Sussed.MergeSort
var $Sussed=
 ($Sussed ? $Sussed : {});
$Sussed.$MergeSort=
 ($Sussed.$MergeSort ? $Sussed.$MergeSort : {});
$Sussed.$MergeSort.$__6__107__0NEW1UNQ59CCN=
 new _F_(function($__,$x1,$x2)
         {var $y=
           new _A_($Sussed.$MergeSort.$yNEW5UNQ60CCN,[$__,$x1,$x2]);
          var $x25=
           _e_($x2);
          var $__swJSW0__0;
          switch($x25._tag_)
           {case 0:
             $__swJSW0__0=
              $y;
             break;
            case 1:
             $__swJSW0__0=
              $x1;
             break;}
          return $__swJSW0__0;});
$Sussed.$MergeSort.$yNEW5UNQ60CCN=
 new _F_(function($__,$x1,$x2)
         {var $x14=
           _e_($x1);
          var $__swJSW1__0;
          switch($x14._tag_)
           {case 0:
             var $x27=
              _e_($x2);
             var $__swJSW2__0;
             switch($x27._tag_)
              {case 0:
                var $__10=
                 new _A_($UHC.$Base.$_3c,[$__,$x14._1,$x27._1]);
                var $__11=
                 _e_($__10);
                var $__swJSW3__0;
                switch($__11._tag_)
                 {case 0:
                   var $__12=
                    new _A_($UHC.$Base.$_3a,[$x14._1,$x14._2]);
                   var $__13=
                    new _A_($Sussed.$MergeSort.$merge,[$__,$x27._2,$__12]);
                   var $__14=
                    new _A_($UHC.$Base.$_3a,[$x27._1,$__13]);
                   $__swJSW3__0=
                    $__14;
                   break;
                  case 1:
                   var $__15=
                    new _A_($UHC.$Base.$_3a,[$x27._1,$x27._2]);
                   var $__16=
                    new _A_($Sussed.$MergeSort.$merge,[$__,$x14._2,$__15]);
                   var $__17=
                    new _A_($UHC.$Base.$_3a,[$x14._1,$__16]);
                   $__swJSW3__0=
                    $__17;
                   break;}
                $__swJSW2__0=
                 $__swJSW3__0;
                break;
               case 1:
                $__swJSW2__0=
                 $UHC.$Base.$undefined;
                break;}
             $__swJSW1__0=
              $__swJSW2__0;
             break;
            case 1:
             $__swJSW1__0=
              $UHC.$Base.$undefined;
             break;}
          return $__swJSW1__0;});
$Sussed.$MergeSort.$merge=
 new _F_(function($__,$x1,$x2)
         {var $__4=
           new _A_($Sussed.$MergeSort.$__6__107__0NEW1UNQ59CCN,[$__,$x1,$x2]);
          var $x15=
           _e_($x1);
          var $__swJSW4__0;
          switch($x15._tag_)
           {case 0:
             $__swJSW4__0=
              $__4;
             break;
            case 1:
             $__swJSW4__0=
              $x2;
             break;}
          return $__swJSW4__0;});
$Sussed.$MergeSort.$__6__332__0NEW22UNQ87CCN=
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
           new _A_($Sussed.$MergeSort.$msort,[$__,$two]);
          var $__8=
           new _A_($Sussed.$MergeSort.$msort,[$__,$one]);
          return new _A_($Sussed.$MergeSort.$merge,[$__,$__8,$__7]);});
$Sussed.$MergeSort.$msort=
 new _F_(function($__,$x1)
         {var $__3=
           new _A_($Sussed.$MergeSort.$__6__332__0NEW22UNQ87CCN,[$__,$x1]);
          var $__4=
           _e_($x1);
          var $__swJSW5__0;
          switch($__4._tag_)
           {case 0:
             var $__7=
              _e_($__4._2);
             var $__swJSW6__0;
             switch($__7._tag_)
              {case 0:
                $__swJSW6__0=
                 $__3;
                break;
               case 1:
                var $__10=
                 new _A_($UHC.$Base.$_3a,[$__4._1,$UHC.$Base.$_5b_5d]);
                $__swJSW6__0=
                 $__10;
                break;}
             $__swJSW5__0=
              $__swJSW6__0;
             break;
            case 1:
             $__swJSW5__0=
              $UHC.$Base.$_5b_5d;
             break;}
          return $__swJSW5__0;});
$Sussed.$MergeSort.$__6__556__1__0=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$Show__DCT73__87__0,[$UHC.$Base.$Show__DCT73__157__0]);}),[]);
$Sussed.$MergeSort.$main=
 new _F_(function($__)
         {var $__2=
           new _A_($UHC.$Base.$packedStringToInteger,["6"]);
          var $__3=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__2]);
          var $__4=
           new _A_($UHC.$Base.$_3a,[$__3,$UHC.$Base.$_5b_5d]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToInteger,["5"]);
          var $__6=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__5]);
          var $__7=
           new _A_($UHC.$Base.$_3a,[$__6,$__4]);
          var $__8=
           new _A_($UHC.$Base.$packedStringToInteger,["4"]);
          var $__9=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__8]);
          var $__10=
           new _A_($UHC.$Base.$_3a,[$__9,$__7]);
          var $__11=
           new _A_($UHC.$Base.$packedStringToInteger,["2"]);
          var $__12=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__11]);
          var $__13=
           new _A_($UHC.$Base.$_3a,[$__12,$__10]);
          var $__14=
           new _A_($UHC.$Base.$packedStringToInteger,["3"]);
          var $__15=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__14]);
          var $__16=
           new _A_($UHC.$Base.$_3a,[$__15,$__13]);
          var $__17=
           new _A_($UHC.$Base.$packedStringToInteger,["4"]);
          var $__18=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__17]);
          var $__19=
           new _A_($UHC.$Base.$_3a,[$__18,$__16]);
          var $__20=
           new _A_($UHC.$Base.$packedStringToInteger,["5"]);
          var $__21=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__20]);
          var $__22=
           new _A_($UHC.$Base.$_3a,[$__21,$__19]);
          var $__23=
           new _A_($UHC.$Base.$packedStringToInteger,["6"]);
          var $__24=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__23]);
          var $__25=
           new _A_($UHC.$Base.$_3a,[$__24,$__22]);
          var $__26=
           new _A_($UHC.$Base.$packedStringToInteger,["8"]);
          var $__27=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__26]);
          var $__28=
           new _A_($UHC.$Base.$_3a,[$__27,$__25]);
          var $__29=
           new _A_($UHC.$Base.$packedStringToInteger,["7"]);
          var $__30=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__29]);
          var $__31=
           new _A_($UHC.$Base.$_3a,[$__30,$__28]);
          var $__32=
           new _A_($UHC.$Base.$packedStringToInteger,["6"]);
          var $__33=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__32]);
          var $__34=
           new _A_($UHC.$Base.$_3a,[$__33,$__31]);
          var $__35=
           new _A_($UHC.$Base.$packedStringToInteger,["3"]);
          var $__36=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__35]);
          var $__37=
           new _A_($UHC.$Base.$_3a,[$__36,$__34]);
          var $__38=
           new _A_($UHC.$Base.$packedStringToInteger,["4"]);
          var $__39=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__38]);
          var $__40=
           new _A_($UHC.$Base.$_3a,[$__39,$__37]);
          var $__41=
           new _A_($UHC.$Base.$packedStringToInteger,["5"]);
          var $__42=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__41]);
          var $__43=
           new _A_($UHC.$Base.$_3a,[$__42,$__40]);
          var $__44=
           new _A_($UHC.$Base.$packedStringToInteger,["8"]);
          var $__45=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__44]);
          var $__46=
           new _A_($UHC.$Base.$_3a,[$__45,$__43]);
          var $__47=
           new _A_($UHC.$Base.$packedStringToInteger,["7"]);
          var $__48=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__47]);
          var $__49=
           new _A_($UHC.$Base.$_3a,[$__48,$__46]);
          var $__50=
           new _A_($UHC.$Base.$packedStringToInteger,["5"]);
          var $__51=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__50]);
          var $__52=
           new _A_($UHC.$Base.$_3a,[$__51,$__49]);
          var $__53=
           new _A_($UHC.$Base.$packedStringToInteger,["2"]);
          var $__54=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__53]);
          var $__55=
           new _A_($UHC.$Base.$_3a,[$__54,$__52]);
          var $__56=
           new _A_($UHC.$Base.$packedStringToInteger,["4"]);
          var $__57=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__56]);
          var $__58=
           new _A_($UHC.$Base.$_3a,[$__57,$__55]);
          var $__59=
           new _A_($UHC.$Base.$packedStringToInteger,["7"]);
          var $__60=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__59]);
          var $__61=
           new _A_($UHC.$Base.$_3a,[$__60,$__58]);
          var $__62=
           new _A_($UHC.$Base.$packedStringToInteger,["9"]);
          var $__63=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__62]);
          var $__64=
           new _A_($UHC.$Base.$_3a,[$__63,$__61]);
          var $__65=
           new _A_($UHC.$Base.$packedStringToInteger,["7"]);
          var $__66=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__65]);
          var $__67=
           new _A_($UHC.$Base.$_3a,[$__66,$__64]);
          var $__68=
           new _A_($UHC.$Base.$packedStringToInteger,["3"]);
          var $__69=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__68]);
          var $__70=
           new _A_($UHC.$Base.$_3a,[$__69,$__67]);
          var $__71=
           new _A_($UHC.$Base.$packedStringToInteger,["5"]);
          var $__72=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__71]);
          var $__73=
           new _A_($UHC.$Base.$_3a,[$__72,$__70]);
          var $__74=
           new _A_($UHC.$Base.$packedStringToInteger,["7"]);
          var $__75=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__74]);
          var $__76=
           new _A_($UHC.$Base.$_3a,[$__75,$__73]);
          var $__77=
           new _A_($UHC.$Base.$packedStringToInteger,["2"]);
          var $__78=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__77]);
          var $__79=
           new _A_($UHC.$Base.$_3a,[$__78,$__76]);
          var $__80=
           new _A_($UHC.$Base.$packedStringToInteger,["3"]);
          var $__81=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__80]);
          var $__82=
           new _A_($UHC.$Base.$_3a,[$__81,$__79]);
          var $__83=
           new _A_($UHC.$Base.$packedStringToInteger,["6"]);
          var $__84=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__83]);
          var $__85=
           new _A_($UHC.$Base.$_3a,[$__84,$__82]);
          var $__86=
           new _A_($UHC.$Base.$packedStringToInteger,["4"]);
          var $__87=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__86]);
          var $__88=
           new _A_($UHC.$Base.$_3a,[$__87,$__85]);
          var $__89=
           new _A_($UHC.$Base.$packedStringToInteger,["7"]);
          var $__90=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__89]);
          var $__91=
           new _A_($UHC.$Base.$_3a,[$__90,$__88]);
          var $__92=
           new _A_($UHC.$Base.$packedStringToInteger,["9"]);
          var $__93=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__92]);
          var $__94=
           new _A_($UHC.$Base.$_3a,[$__93,$__91]);
          var $__95=
           new _A_($UHC.$Base.$packedStringToInteger,["1"]);
          var $__96=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__95]);
          var $__97=
           new _A_($UHC.$Base.$_3a,[$__96,$__94]);
          var $__98=
           new _A_($Sussed.$MergeSort.$msort,[$UHC.$Base.$Ord__DCT73__132__0,$__97]);
          var $__99=
           new _A_($UHC.$Base.$show,[$Sussed.$MergeSort.$__6__556__1__0]);
          var $__100=
           new _A_($UHC.$Base.$_24,[$__99,$__98]);
          var $__101=
           new _A_($UHC.$Base.$_24,[$Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,$__100]);
          var $__102=
           new _A_($UHC.$Base.$return,[$__]);
          return new _A_($UHC.$Base.$_24_21,[$__102,$__101]);});
$Sussed.$MergeSort.$__8__244=
 new _A_(new _F_(function()
                 {return new _A_($Sussed.$MergeSort.$main,[$UHC.$Base.$Monad__DCT73__341__0]);}),[]);
var $main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Run.$ehcRunMain,[$Sussed.$MergeSort.$__8__244]);}),[]);
_e_(new _A_($main,[[]]));
