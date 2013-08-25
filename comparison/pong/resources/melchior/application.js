// Comparisons.Pong
var $Comparisons=
 ($Comparisons ? $Comparisons : {});
$Comparisons.$Pong=
 ($Comparisons.$Pong ? $Comparisons.$Pong : {});
$Comparisons.$Pong.$y=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.y;});
$Comparisons.$Pong.$x=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.x;});
$Comparisons.$Pong.$vy=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.vy;});
$Comparisons.$Pong.$vx=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.vx;});
$Comparisons.$Pong.$score=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.score;});
$Comparisons.$Pong.$mv=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.mv;});
$Comparisons.$Pong.$frame=
 new _F_(function($__)
         {var $__2=
           new _A_($UHC.$Base.$packedStringToInteger,["29"]);
          return new _A_($UHC.$Base.$fromInteger,[$__,$__2]);});
$Comparisons.$Pong.$by=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.by;});
$Comparisons.$Pong.$bx=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.bx;});
$Comparisons.$Pong.$back=
 new _F_(function($c)
         {var $__=
           new _A_($UHC.$Base.$packedStringToString,["#3C643C"]);
          var $__3=
           new _A_($Melchior.$Dom.$Drawing.$fillStyle,[$c,$__]);
          return new _A_($Melchior.$Dom.$Drawing.$rectangle,[0,0,600,400,$__3]);});
$Comparisons.$Pong.$__19__60=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT21__7__0,$Melchior.$Dom.$document]);}),[]);
$Comparisons.$Pong.$keys=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_24,[$Melchior.$EventSources.$Keyboard.$presses,$Comparisons.$Pong.$__19__60]);}),[]);
$Comparisons.$Pong.$__19__68=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$frame,[$UHC.$Base.$Num__DCT73__101__0]);}),[]);
$Comparisons.$Pong.$__19__67=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Time.$every,[$Comparisons.$Pong.$__19__68]);}),[]);
$Comparisons.$Pong.$__19__65=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_24,[$Melchior.$Time.$delta,$Comparisons.$Pong.$__19__67]);}),[]);
$Comparisons.$Pong.$tick=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Control.$_26,[$Comparisons.$Pong.$keys,$Comparisons.$Pong.$__19__65]);}),[]);
$Comparisons.$Pong.$reset=
 new _F_(function($b)
         {var $__=
           new _A_($UHC.$Base.$packedStringToInteger,["790"]);
          var $__3=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__]);
          var $__4=
           new _A_($Comparisons.$Pong.$bx,[$b]);
          var $__5=
           new _A_($UHC.$Base.$_3e,[$UHC.$Base.$Ord__DCT73__164__0,$__4,$__3]);
          var $__6=
           new _A_($UHC.$Base.$packedStringToInteger,["10"]);
          var $__7=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__6]);
          var $__8=
           new _A_($Comparisons.$Pong.$bx,[$b]);
          var $__9=
           new _A_($UHC.$Base.$_3c,[$UHC.$Base.$Ord__DCT73__164__0,$__8,$__7]);
          return new _A_($UHC.$Base.$_7c_7c,[$__9,$__5]);});
$Comparisons.$Pong.$__19__93__0=
 new _F_(function($b,$p1,$p2,$c)
         {var $__=
           new _A_($UHC.$Base.$packedStringToString,["#FFF"]);
          var $__6=
           new _A_($Melchior.$Dom.$Drawing.$fillStyle,[$c,$__]);
          var $__7=
           new _A_($Comparisons.$Pong.$by,[$b]);
          var $__8=
           new _A_($UHC.$Base.$floor,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$__8,$__7]);
          var $__10=
           new _A_($Comparisons.$Pong.$bx,[$b]);
          var $__11=
           new _A_($UHC.$Base.$floor,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0]);
          var $__12=
           new _A_($UHC.$Base.$_24,[$__11,$__10]);
          var $__13=
           new _A_($Melchior.$Dom.$Drawing.$circle,[$__12,$__9,10,$__6]);
          var $__14=
           new _A_($UHC.$Base.$packedStringToString,["20pt Helvetica"]);
          var $__15=
           new _A_($Melchior.$Dom.$Drawing.$fontStyle,[$c,$__14]);
          var $__16=
           new _A_($Comparisons.$Pong.$score,[$p2]);
          var $__17=
           new _A_($UHC.$Base.$show,[$UHC.$Base.$Show__DCT73__128__0]);
          var $__18=
           new _A_($UHC.$Base.$_24,[$__17,$__16]);
          var $__19=
           new _A_($Melchior.$Dom.$Drawing.$text,[$__18,500,50,$__15]);
          var $__20=
           new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT21__1__0,$__19,$__13]);
          var $__21=
           new _A_($UHC.$Base.$packedStringToString,["20pt Helvetica"]);
          var $__22=
           new _A_($Melchior.$Dom.$Drawing.$fontStyle,[$c,$__21]);
          var $__23=
           new _A_($Comparisons.$Pong.$score,[$p1]);
          var $__24=
           new _A_($UHC.$Base.$show,[$UHC.$Base.$Show__DCT73__128__0]);
          var $__25=
           new _A_($UHC.$Base.$_24,[$__24,$__23]);
          var $__26=
           new _A_($Melchior.$Dom.$Drawing.$text,[$__25,100,50,$__22]);
          var $__27=
           new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT21__1__0,$__26,$__20]);
          var $__28=
           new _A_($UHC.$Base.$packedStringToString,["#FFF"]);
          var $__29=
           new _A_($Melchior.$Dom.$Drawing.$fillStyle,[$c,$__28]);
          var $__30=
           new _A_($Comparisons.$Pong.$y,[$p2]);
          var $__31=
           new _A_($UHC.$Base.$floor,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0]);
          var $__32=
           new _A_($UHC.$Base.$_24,[$__31,$__30]);
          var $__33=
           new _A_($UHC.$Base.$_2d,[$UHC.$Base.$Num__DCT73__101__0,$__32,35]);
          var $__34=
           new _A_($Comparisons.$Pong.$x,[$p2]);
          var $__35=
           new _A_($UHC.$Base.$floor,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0]);
          var $__36=
           new _A_($UHC.$Base.$_24,[$__35,$__34]);
          var $__37=
           new _A_($Melchior.$Dom.$Drawing.$rectangle,[$__36,$__33,20,70,$__29]);
          var $__38=
           new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT21__1__0,$__37,$__27]);
          var $__39=
           new _A_($UHC.$Base.$packedStringToString,["#FFF"]);
          var $__40=
           new _A_($Melchior.$Dom.$Drawing.$fillStyle,[$c,$__39]);
          var $__41=
           new _A_($Comparisons.$Pong.$y,[$p1]);
          var $__42=
           new _A_($UHC.$Base.$floor,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0]);
          var $__43=
           new _A_($UHC.$Base.$_24,[$__42,$__41]);
          var $__44=
           new _A_($UHC.$Base.$_2d,[$UHC.$Base.$Num__DCT73__101__0,$__43,35]);
          var $__45=
           new _A_($Comparisons.$Pong.$x,[$p1]);
          var $__46=
           new _A_($UHC.$Base.$floor,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0]);
          var $__47=
           new _A_($UHC.$Base.$_24,[$__46,$__45]);
          var $__48=
           new _A_($UHC.$Base.$_2d,[$UHC.$Base.$Num__DCT73__101__0,$__47,10]);
          var $__49=
           new _A_($Melchior.$Dom.$Drawing.$rectangle,[$__48,$__44,20,70,$__40]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT21__1__0,$__49,$__38]);});
$Comparisons.$Pong.$elems=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return new _A_($Comparisons.$Pong.$__19__93__0,[$__2._3,$__2._1,$__2._2]);});
$Comparisons.$Pong.$__19__198__0=
 new _F_(function($ctx,$g)
         {var $__=
           new _A_($Comparisons.$Pong.$elems,[$g,$ctx]);
          var $__4=
           new _A_($Comparisons.$Pong.$back,[$ctx]);
          var $__5=
           new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT21__1__0,$__4,$__]);
          var $io=
           new _A_($Comparisons.$Pong.$ioNEW89UNQ506,[$__5]);
          return $io;});
$Comparisons.$Pong.$ioNEW89UNQ506=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2._1;});
$Comparisons.$Pong.$display=
 new _F_(function($g,$ctx)
         {var $__=
           new _A_($Comparisons.$Pong.$__19__198__0,[$ctx]);
          return new _A_($Melchior.$Sink.$terminate,[$g,$__]);});
$Comparisons.$Pong.$Player__=
 new _F_(function($x1,$x2,$x3,$x4)
         {return {_tag_:0,x:$x1,y:$x2,mv:$x3,score:$x4};});
$Comparisons.$Pong.$__Rep0PlayerDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {var $proj__3=
           _e_($proj__1);
          var $proj__45=
           _e_($proj__3._1);
          var $proj__98=
           _e_($proj__3._2);
          var $__=
           new _A_($Comparisons.$Pong.$Player__,[$proj__45._1,$proj__45._2,$proj__98._1,$proj__98._2]);
          return $__;});
$Comparisons.$Pong.$__Rep0PlayerDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__7=
           new _A_($UHC.$Base.$K1__,[$x2.score]);
          var $__8=
           new _A_($UHC.$Base.$M1__,[$__7]);
          var $__9=
           new _A_($UHC.$Base.$K1__,[$x2.mv]);
          var $__10=
           new _A_($UHC.$Base.$M1__,[$__9]);
          var $__11=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__10,$__8]);
          var $__12=
           new _A_($UHC.$Base.$K1__,[$x2.y]);
          var $__13=
           new _A_($UHC.$Base.$M1__,[$__12]);
          var $__14=
           new _A_($UHC.$Base.$K1__,[$x2.x]);
          var $__15=
           new _A_($UHC.$Base.$M1__,[$__14]);
          var $__16=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__15,$__13]);
          var $__17=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__16,$__11]);
          var $__18=
           new _A_($UHC.$Base.$M1__,[$__17]);
          var $__19=
           new _A_($UHC.$Base.$M1__,[$__18]);
          return $__19;});
$Comparisons.$Pong.$__Rep0PlayerNEW114UNQ192SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($Comparisons.$Pong.$__Rep0PlayerNEW116UNQ193EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$Comparisons.$Pong.$__Rep0PlayerNEW116UNQ193EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS73__371__0,[$__]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Pong.$__Rep0PlayerDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$Comparisons.$Pong.$__Rep0PlayerDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$Comparisons.$Pong.$__Rep0PlayerUNQ192SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$__Rep0PlayerNEW114UNQ192SDCGENRepresentable0,[$Comparisons.$Pong.$__Rep0PlayerUNQ192SDCGENRepresentable0]);}),[]);
$Comparisons.$Pong.$__Rep0PlayerGENRepresentable0=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$__Rep0PlayerUNQ192SDCGENRepresentable0;}),[]);
$Comparisons.$Pong.$move=
 new _F_(function($p)
         {var $__=
           new _A_($UHC.$Base.$negate,[$UHC.$Base.$Num__DCT73__101__0,1]);
          var $__3=
           new _A_($Comparisons.$Pong.$mv,[$p]);
          var $__4=
           new _A_($UHC.$Base.$_3d_3d,[$UHC.$Base.$Eq__DCT73__88__0,$__3,$__]);
          var $__5=
           _e_($__4);
          var $__swJSW15__0;
          switch($__5._tag_)
           {case 0:
             var $__6=
              new _A_($Comparisons.$Pong.$mv,[$p]);
             var $__7=
              new _A_($UHC.$Base.$_3d_3d,[$UHC.$Base.$Eq__DCT73__88__0,$__6,1]);
             var $__8=
              _e_($__7);
             var $__swJSW16__0;
             switch($__8._tag_)
              {case 0:
                var $__9=
                 _e_($UHC.$Base.$otherwise);
                var $__swJSW17__0;
                switch($__9._tag_)
                 {case 0:
                   var $__10=
                    new _A_($UHC.$Base.$packedStringToString,["FAIL 16_16_0"]);
                   var $__11=
                    new _A_($UHC.$Base.$error,[$__10]);
                   $__swJSW17__0=
                    $__11;
                   break;
                  case 1:
                   $__swJSW17__0=
                    $p;
                   break;}
                $__swJSW16__0=
                 $__swJSW17__0;
                break;
               case 1:
                var $__12=
                 new _A_($Comparisons.$Pong.$score,[$p]);
                var $__13=
                 new _A_($Comparisons.$Pong.$mv,[$p]);
                var $__14=
                 new _A_($UHC.$Base.$packedStringToInteger,["10"]);
                var $__15=
                 new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__14]);
                var $__16=
                 new _A_($Comparisons.$Pong.$y,[$p]);
                var $__17=
                 new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__168__0,$__16,$__15]);
                var $__18=
                 new _A_($Comparisons.$Pong.$x,[$p]);
                var $__19=
                 new _A_($Comparisons.$Pong.$Player__,[$__18,$__17,$__13,$__12]);
                $__swJSW16__0=
                 $__19;
                break;}
             $__swJSW15__0=
              $__swJSW16__0;
             break;
            case 1:
             var $__20=
              new _A_($Comparisons.$Pong.$score,[$p]);
             var $__21=
              new _A_($Comparisons.$Pong.$mv,[$p]);
             var $__22=
              new _A_($UHC.$Base.$packedStringToInteger,["10"]);
             var $__23=
              new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__22]);
             var $__24=
              new _A_($Comparisons.$Pong.$y,[$p]);
             var $__25=
              new _A_($UHC.$Base.$_2d,[$UHC.$Base.$Num__DCT73__168__0,$__24,$__23]);
             var $__26=
              new _A_($Comparisons.$Pong.$x,[$p]);
             var $__27=
              new _A_($Comparisons.$Pong.$Player__,[$__26,$__25,$__21,$__20]);
             $__swJSW15__0=
              $__27;
             break;}
          return $__swJSW15__0;});
$Comparisons.$Pong.$score_27=
 new _F_(function($p,$b,$c)
         {var $__=
           new _A_($Comparisons.$Pong.$bx,[$b]);
          var $__5=
           new _A_($c,[$__]);
          var $__6=
           _e_($__5);
          var $__swJSW18__0;
          switch($__6._tag_)
           {case 0:
             $__swJSW18__0=
              $p;
             break;
            case 1:
             var $__7=
              new _A_($Comparisons.$Pong.$score,[$p]);
             var $__8=
              new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$__7,1]);
             var $__9=
              new _A_($Comparisons.$Pong.$mv,[$p]);
             var $__10=
              new _A_($Comparisons.$Pong.$y,[$p]);
             var $__11=
              new _A_($Comparisons.$Pong.$x,[$p]);
             var $__12=
              new _A_($Comparisons.$Pong.$Player__,[$__11,$__10,$__9,$__8]);
             $__swJSW18__0=
              $__12;
             break;}
          return $__swJSW18__0;});
$Comparisons.$Pong.$transition=
 new _F_(function($p,$i,$u,$d,$m)
         {var $__=
           new _A_($UHC.$Base.$_3d_3d,[$UHC.$Base.$Eq__DCT73__88__0,$i,$u]);
          var $__7=
           _e_($__);
          var $__swJSW19__0;
          switch($__7._tag_)
           {case 0:
             var $__8=
              new _A_($UHC.$Base.$_3d_3d,[$UHC.$Base.$Eq__DCT73__88__0,$i,$d]);
             var $__9=
              _e_($__8);
             var $__swJSW20__0;
             switch($__9._tag_)
              {case 0:
                var $__10=
                 _e_($UHC.$Base.$otherwise);
                var $__swJSW21__0;
                switch($__10._tag_)
                 {case 0:
                   var $__11=
                    new _A_($UHC.$Base.$packedStringToString,["FAIL 16_13_0"]);
                   var $__12=
                    new _A_($UHC.$Base.$error,[$__11]);
                   $__swJSW21__0=
                    $__12;
                   break;
                  case 1:
                   $__swJSW21__0=
                    $p;
                   break;}
                $__swJSW20__0=
                 $__swJSW21__0;
                break;
               case 1:
                var $__13=
                 new _A_($Comparisons.$Pong.$score,[$p]);
                var $__14=
                 new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT73__101__0,1,$m]);
                var $__15=
                 new _A_($Comparisons.$Pong.$y,[$p]);
                var $__16=
                 new _A_($Comparisons.$Pong.$x,[$p]);
                var $__17=
                 new _A_($Comparisons.$Pong.$Player__,[$__16,$__15,$__14,$__13]);
                $__swJSW20__0=
                 $__17;
                break;}
             $__swJSW19__0=
              $__swJSW20__0;
             break;
            case 1:
             var $__18=
              new _A_($Comparisons.$Pong.$score,[$p]);
             var $__19=
              new _A_($UHC.$Base.$negate,[$UHC.$Base.$Num__DCT73__101__0,1]);
             var $__20=
              new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT73__101__0,$__19,$m]);
             var $__21=
              new _A_($Comparisons.$Pong.$y,[$p]);
             var $__22=
              new _A_($Comparisons.$Pong.$x,[$p]);
             var $__23=
              new _A_($Comparisons.$Pong.$Player__,[$__22,$__21,$__20,$__18]);
             $__swJSW19__0=
              $__23;
             break;}
          return $__swJSW19__0;});
$Comparisons.$Pong.$walls=
 new _F_(function($p)
         {var $__=
           new _A_($UHC.$Base.$packedStringToInteger,["35"]);
          var $__3=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__]);
          var $__4=
           new _A_($Comparisons.$Pong.$y,[$p]);
          var $__5=
           new _A_($UHC.$Base.$_3c,[$UHC.$Base.$Ord__DCT73__164__0,$__4,$__3]);
          var $__6=
           _e_($__5);
          var $__swJSW22__0;
          switch($__6._tag_)
           {case 0:
             var $__7=
              new _A_($UHC.$Base.$packedStringToInteger,["365"]);
             var $__8=
              new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__7]);
             var $__9=
              new _A_($Comparisons.$Pong.$y,[$p]);
             var $__10=
              new _A_($UHC.$Base.$_3e,[$UHC.$Base.$Ord__DCT73__164__0,$__9,$__8]);
             var $__11=
              _e_($__10);
             var $__swJSW23__0;
             switch($__11._tag_)
              {case 0:
                var $__12=
                 _e_($UHC.$Base.$otherwise);
                var $__swJSW24__0;
                switch($__12._tag_)
                 {case 0:
                   var $__13=
                    new _A_($UHC.$Base.$packedStringToString,["FAIL 16_18_0"]);
                   var $__14=
                    new _A_($UHC.$Base.$error,[$__13]);
                   $__swJSW24__0=
                    $__14;
                   break;
                  case 1:
                   $__swJSW24__0=
                    $p;
                   break;}
                $__swJSW23__0=
                 $__swJSW24__0;
                break;
               case 1:
                var $__15=
                 new _A_($Comparisons.$Pong.$score,[$p]);
                var $__16=
                 new _A_($UHC.$Base.$packedStringToInteger,["365"]);
                var $__17=
                 new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__16]);
                var $__18=
                 new _A_($Comparisons.$Pong.$x,[$p]);
                var $__19=
                 new _A_($Comparisons.$Pong.$Player__,[$__18,$__17,0,$__15]);
                $__swJSW23__0=
                 $__19;
                break;}
             $__swJSW22__0=
              $__swJSW23__0;
             break;
            case 1:
             var $__20=
              new _A_($Comparisons.$Pong.$score,[$p]);
             var $__21=
              new _A_($UHC.$Base.$packedStringToInteger,["35"]);
             var $__22=
              new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__21]);
             var $__23=
              new _A_($Comparisons.$Pong.$x,[$p]);
             var $__24=
              new _A_($Comparisons.$Pong.$Player__,[$__23,$__22,0,$__20]);
             $__swJSW22__0=
              $__24;
             break;}
          return $__swJSW22__0;});
$Comparisons.$Pong.$Game__=
 new _F_(function($x1,$x2,$x3)
         {return {_tag_:0,_1:$x1,_2:$x2,_3:$x3};});
$Comparisons.$Pong.$__Rep0GameDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {var $proj__3=
           _e_($proj__1);
          var $proj__65=
           _e_($proj__3._2);
          var $__=
           new _A_($Comparisons.$Pong.$Game__,[$proj__3._1,$proj__65._1,$proj__65._2]);
          return $__;});
$Comparisons.$Pong.$__Rep0GameDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__6=
           new _A_($UHC.$Base.$K1__,[$x2._3]);
          var $__7=
           new _A_($UHC.$Base.$M1__,[$__6]);
          var $__8=
           new _A_($UHC.$Base.$K1__,[$x2._2]);
          var $__9=
           new _A_($UHC.$Base.$M1__,[$__8]);
          var $__10=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__9,$__7]);
          var $__11=
           new _A_($UHC.$Base.$K1__,[$x2._1]);
          var $__12=
           new _A_($UHC.$Base.$M1__,[$__11]);
          var $__13=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__12,$__10]);
          var $__14=
           new _A_($UHC.$Base.$M1__,[$__13]);
          var $__15=
           new _A_($UHC.$Base.$M1__,[$__14]);
          return $__15;});
$Comparisons.$Pong.$__Rep0GameNEW218UNQ426SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($Comparisons.$Pong.$__Rep0GameNEW220UNQ427EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$Comparisons.$Pong.$__Rep0GameNEW220UNQ427EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS73__371__0,[$__]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Pong.$__Rep0GameDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$Comparisons.$Pong.$__Rep0GameDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$Comparisons.$Pong.$__Rep0GameUNQ426SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$__Rep0GameNEW218UNQ426SDCGENRepresentable0,[$Comparisons.$Pong.$__Rep0GameUNQ426SDCGENRepresentable0]);}),[]);
$Comparisons.$Pong.$__Rep0GameGENRepresentable0=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$__Rep0GameUNQ426SDCGENRepresentable0;}),[]);
$Comparisons.$Pong.$pop=
 new _F_(function($i,$__)
         {var $__3=
           _e_($__);
          var $__7=
           new _A_($Comparisons.$Pong.$transition,[$__3._2,$i,38,40,0]);
          var $__8=
           new _A_($Comparisons.$Pong.$transition,[$__3._1,$i,87,83,0]);
          var $__9=
           new _A_($Comparisons.$Pong.$Game__,[$__8,$__7,$__3._3]);
          return $__9;});
$Comparisons.$Pong.$push=
 new _F_(function($i,$__)
         {var $__3=
           _e_($__);
          var $__7=
           new _A_($Comparisons.$Pong.$transition,[$__3._2,$i,38,40,1]);
          var $__8=
           new _A_($Comparisons.$Pong.$transition,[$__3._1,$i,87,83,1]);
          var $__9=
           new _A_($Comparisons.$Pong.$Game__,[$__8,$__7,$__3._3]);
          return $__9;});
$Comparisons.$Pong.$Ball__=
 new _F_(function($x1,$x2,$x3,$x4)
         {return {_tag_:0,bx:$x1,by:$x2,vx:$x3,vy:$x4};});
$Comparisons.$Pong.$__Rep0BallDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {var $proj__3=
           _e_($proj__1);
          var $proj__45=
           _e_($proj__3._1);
          var $proj__98=
           _e_($proj__3._2);
          var $__=
           new _A_($Comparisons.$Pong.$Ball__,[$proj__45._1,$proj__45._2,$proj__98._1,$proj__98._2]);
          return $__;});
$Comparisons.$Pong.$__Rep0BallDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__7=
           new _A_($UHC.$Base.$K1__,[$x2.vy]);
          var $__8=
           new _A_($UHC.$Base.$M1__,[$__7]);
          var $__9=
           new _A_($UHC.$Base.$K1__,[$x2.vx]);
          var $__10=
           new _A_($UHC.$Base.$M1__,[$__9]);
          var $__11=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__10,$__8]);
          var $__12=
           new _A_($UHC.$Base.$K1__,[$x2.by]);
          var $__13=
           new _A_($UHC.$Base.$M1__,[$__12]);
          var $__14=
           new _A_($UHC.$Base.$K1__,[$x2.bx]);
          var $__15=
           new _A_($UHC.$Base.$M1__,[$__14]);
          var $__16=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__15,$__13]);
          var $__17=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__16,$__11]);
          var $__18=
           new _A_($UHC.$Base.$M1__,[$__17]);
          var $__19=
           new _A_($UHC.$Base.$M1__,[$__18]);
          return $__19;});
$Comparisons.$Pong.$__Rep0BallNEW256UNQ322SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($Comparisons.$Pong.$__Rep0BallNEW258UNQ323EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$Comparisons.$Pong.$__Rep0BallNEW258UNQ323EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS73__371__0,[$__]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Pong.$__Rep0BallDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$Comparisons.$Pong.$__Rep0BallDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$Comparisons.$Pong.$__Rep0BallUNQ322SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$__Rep0BallNEW256UNQ322SDCGENRepresentable0,[$Comparisons.$Pong.$__Rep0BallUNQ322SDCGENRepresentable0]);}),[]);
$Comparisons.$Pong.$__Rep0BallGENRepresentable0=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$__Rep0BallUNQ322SDCGENRepresentable0;}),[]);
$Comparisons.$Pong.$__19__612=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["0"]);}),[]);
$Comparisons.$Pong.$__19__610=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$Comparisons.$Pong.$__19__612]);}),[]);
$Comparisons.$Pong.$__19__609=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["200"]);}),[]);
$Comparisons.$Pong.$__19__607=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$Comparisons.$Pong.$__19__609]);}),[]);
$Comparisons.$Pong.$__19__606=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["200"]);}),[]);
$Comparisons.$Pong.$__19__604=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$Comparisons.$Pong.$__19__606]);}),[]);
$Comparisons.$Pong.$__19__603=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["350"]);}),[]);
$Comparisons.$Pong.$__19__601=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$Comparisons.$Pong.$__19__603]);}),[]);
$Comparisons.$Pong.$__19__597=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$Ball__,[$Comparisons.$Pong.$__19__601,$Comparisons.$Pong.$__19__604,$Comparisons.$Pong.$__19__607,$Comparisons.$Pong.$__19__610]);}),[]);
$Comparisons.$Pong.$__19__596=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["200"]);}),[]);
$Comparisons.$Pong.$__19__594=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$Comparisons.$Pong.$__19__596]);}),[]);
$Comparisons.$Pong.$__19__593=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["575"]);}),[]);
$Comparisons.$Pong.$__19__591=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$Comparisons.$Pong.$__19__593]);}),[]);
$Comparisons.$Pong.$__19__587=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$Player__,[$Comparisons.$Pong.$__19__591,$Comparisons.$Pong.$__19__594,0,0]);}),[]);
$Comparisons.$Pong.$__19__586=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["200"]);}),[]);
$Comparisons.$Pong.$__19__584=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$Comparisons.$Pong.$__19__586]);}),[]);
$Comparisons.$Pong.$__19__583=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["15"]);}),[]);
$Comparisons.$Pong.$__19__581=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$Comparisons.$Pong.$__19__583]);}),[]);
$Comparisons.$Pong.$__19__577=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$Player__,[$Comparisons.$Pong.$__19__581,$Comparisons.$Pong.$__19__584,0,0]);}),[]);
$Comparisons.$Pong.$initial=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$Game__,[$Comparisons.$Pong.$__19__577,$Comparisons.$Pong.$__19__587,$Comparisons.$Pong.$__19__597]);}),[]);
$Comparisons.$Pong.$pb=
 new _F_(function($p,$b)
         {var $__=
           new _A_($UHC.$Base.$packedStringToInteger,["10"]);
          var $__4=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__]);
          var $__5=
           new _A_($Comparisons.$Pong.$bx,[$b]);
          var $__6=
           new _A_($Comparisons.$Pong.$x,[$p]);
          var $__7=
           new _A_($UHC.$Base.$_2d,[$UHC.$Base.$Num__DCT73__168__0,$__6,$__5]);
          var $__8=
           new _A_($UHC.$Base.$abs,[$UHC.$Base.$Num__DCT73__168__0]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$__8,$__7]);
          var $__10=
           new _A_($UHC.$Base.$_3c,[$UHC.$Base.$Ord__DCT73__164__0,$__9,$__4]);
          var $__11=
           new _A_($UHC.$Base.$packedStringToInteger,["40"]);
          var $__12=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__11]);
          var $__13=
           new _A_($Comparisons.$Pong.$by,[$b]);
          var $__14=
           new _A_($Comparisons.$Pong.$y,[$p]);
          var $__15=
           new _A_($UHC.$Base.$_2d,[$UHC.$Base.$Num__DCT73__168__0,$__14,$__13]);
          var $__16=
           new _A_($UHC.$Base.$abs,[$UHC.$Base.$Num__DCT73__168__0]);
          var $__17=
           new _A_($UHC.$Base.$_24,[$__16,$__15]);
          var $__18=
           new _A_($UHC.$Base.$_3c,[$UHC.$Base.$Ord__DCT73__164__0,$__17,$__12]);
          var $__19=
           new _A_($UHC.$Base.$_26_26,[$__18,$__10]);
          var $__20=
           _e_($__19);
          var $__swJSW36__0;
          switch($__20._tag_)
           {case 0:
             $__swJSW36__0=
              $b;
             break;
            case 1:
             var $__21=
              new _A_($Comparisons.$Pong.$vy,[$b]);
             var $__22=
              new _A_($Comparisons.$Pong.$vx,[$b]);
             var $__23=
              new _A_($UHC.$Base.$packedStringToInteger,["1"]);
             var $__24=
              new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__23]);
             var $__25=
              new _A_($UHC.$Base.$negate,[$UHC.$Base.$Num__DCT73__168__0,$__24]);
             var $__26=
              new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT73__168__0,$__25,$__22]);
             var $__27=
              new _A_($Comparisons.$Pong.$by,[$b]);
             var $__28=
              new _A_($Comparisons.$Pong.$bx,[$b]);
             var $__29=
              new _A_($Comparisons.$Pong.$Ball__,[$__28,$__27,$__26,$__21]);
             $__swJSW36__0=
              $__29;
             break;}
          return $__swJSW36__0;});
$Comparisons.$Pong.$__19__700__0=
 new _F_(function($_24x__16__24__0)
         {var $__=
           new _A_($UHC.$Base.$packedStringToInteger,["480"]);
          var $__3=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__]);
          return new _A_($UHC.$Base.$_3e,[$UHC.$Base.$Ord__DCT73__164__0,$_24x__16__24__0,$__3]);});
$Comparisons.$Pong.$__19__689__0=
 new _F_(function($_24x__16__23__0)
         {var $__=
           new _A_($UHC.$Base.$packedStringToInteger,["10"]);
          var $__3=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__]);
          return new _A_($UHC.$Base.$_3c,[$UHC.$Base.$Ord__DCT73__164__0,$_24x__16__23__0,$__3]);});
$Comparisons.$Pong.$scoreg=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          var $__6=
           new _A_($Comparisons.$Pong.$reset,[$__2._3]);
          var $__7=
           _e_($__6);
          var $__swJSW38__0;
          switch($__7._tag_)
           {case 0:
             var $__8=
              _e_($UHC.$Base.$otherwise);
             var $__swJSW39__0;
             switch($__8._tag_)
              {case 0:
                var $__9=
                 new _A_($UHC.$Base.$packedStringToString,["FAIL 16_22_0"]);
                var $__10=
                 new _A_($UHC.$Base.$error,[$__9]);
                $__swJSW39__0=
                 $__10;
                break;
               case 1:
                var $__11=
                 new _A_($Comparisons.$Pong.$Game__,[$__2._1,$__2._2,$__2._3]);
                $__swJSW39__0=
                 $__11;
                break;}
             $__swJSW38__0=
              $__swJSW39__0;
             break;
            case 1:
             var $__12=
              new _A_($UHC.$Base.$packedStringToInteger,["200"]);
             var $__13=
              new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__12]);
             var $__14=
              new _A_($UHC.$Base.$packedStringToInteger,["200"]);
             var $__15=
              new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__14]);
             var $__16=
              new _A_($UHC.$Base.$packedStringToInteger,["200"]);
             var $__17=
              new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__16]);
             var $__18=
              new _A_($UHC.$Base.$packedStringToInteger,["350"]);
             var $__19=
              new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__18]);
             var $__20=
              new _A_($Comparisons.$Pong.$Ball__,[$__19,$__17,$__15,$__13]);
             var $__21=
              new _A_($Comparisons.$Pong.$score_27,[$__2._2,$__2._3,$Comparisons.$Pong.$__19__700__0]);
             var $__22=
              new _A_($Comparisons.$Pong.$score_27,[$__2._1,$__2._3,$Comparisons.$Pong.$__19__689__0]);
             var $__23=
              new _A_($Comparisons.$Pong.$Game__,[$__22,$__21,$__20]);
             $__swJSW38__0=
              $__23;
             break;}
          return $__swJSW38__0;});
$Comparisons.$Pong.$dUNQ543=
 new _F_(function($s,$__,$__3)
         {var $__4=
           new _A_($UHC.$Base.$packedStringToInteger,["1000"]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToInteger,["1"]);
          var $__6=
           new _A_($UHC.$Base.$_3a_25,[$__5,$__4]);
          var $__7=
           new _A_($UHC.$Base.$fromRational,[$__,$__6]);
          var $__8=
           new _A_($UHC.$Base.$snd,[$s]);
          var $__9=
           new _A_($UHC.$Base.$fromIntegral,[$UHC.$Base.$Integral__DCT73__110__0,$__3]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$__9,$__8]);
          return new _A_($UHC.$Base.$_2a,[$__3,$__10,$__7]);});
$Comparisons.$Pong.$step=
 new _F_(function($s,$__)
         {var $__3=
           _e_($__);
          var $__7=
           new _A_($Comparisons.$Pong.$vy,[$__3._3]);
          var $__8=
           new _A_($Comparisons.$Pong.$vx,[$__3._3]);
          var $__9=
           new _A_($Comparisons.$Pong.$dUNQ543,[$s,$UHC.$Base.$Fractional__DCT73__192__0,$UHC.$Base.$Num__DCT73__168__0]);
          var $__10=
           new _A_($Comparisons.$Pong.$vy,[$__3._3]);
          var $__11=
           new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT73__168__0,$__10,$__9]);
          var $__12=
           new _A_($Comparisons.$Pong.$by,[$__3._3]);
          var $__13=
           new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__168__0,$__12,$__11]);
          var $__14=
           new _A_($Comparisons.$Pong.$dUNQ543,[$s,$UHC.$Base.$Fractional__DCT73__192__0,$UHC.$Base.$Num__DCT73__168__0]);
          var $__15=
           new _A_($Comparisons.$Pong.$vx,[$__3._3]);
          var $__16=
           new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT73__168__0,$__15,$__14]);
          var $__17=
           new _A_($Comparisons.$Pong.$bx,[$__3._3]);
          var $__18=
           new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__168__0,$__17,$__16]);
          var $__19=
           new _A_($Comparisons.$Pong.$Ball__,[$__18,$__13,$__8,$__7]);
          var $__20=
           new _A_($Comparisons.$Pong.$move,[$__3._2]);
          var $__21=
           new _A_($Comparisons.$Pong.$move,[$__3._1]);
          return new _A_($Comparisons.$Pong.$Game__,[$__21,$__20,$__19]);});
$Comparisons.$Pong.$wall=
 new _F_(function($b)
         {var $__=
           new _A_($UHC.$Base.$packedStringToInteger,["390"]);
          var $__3=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__]);
          var $__4=
           new _A_($Comparisons.$Pong.$by,[$b]);
          var $__5=
           new _A_($UHC.$Base.$_3e,[$UHC.$Base.$Ord__DCT73__164__0,$__4,$__3]);
          var $__6=
           new _A_($UHC.$Base.$packedStringToInteger,["10"]);
          var $__7=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__6]);
          var $__8=
           new _A_($Comparisons.$Pong.$by,[$b]);
          var $__9=
           new _A_($UHC.$Base.$_3c,[$UHC.$Base.$Ord__DCT73__164__0,$__8,$__7]);
          var $__10=
           new _A_($UHC.$Base.$_7c_7c,[$__9,$__5]);
          var $__11=
           _e_($__10);
          var $__swJSW41__0;
          switch($__11._tag_)
           {case 0:
             var $__12=
              _e_($UHC.$Base.$otherwise);
             var $__swJSW42__0;
             switch($__12._tag_)
              {case 0:
                var $__13=
                 new _A_($UHC.$Base.$packedStringToString,["FAIL 16_21_0"]);
                var $__14=
                 new _A_($UHC.$Base.$error,[$__13]);
                $__swJSW42__0=
                 $__14;
                break;
               case 1:
                $__swJSW42__0=
                 $b;
                break;}
             $__swJSW41__0=
              $__swJSW42__0;
             break;
            case 1:
             var $__15=
              new _A_($Comparisons.$Pong.$vy,[$b]);
             var $__16=
              new _A_($UHC.$Base.$packedStringToInteger,["1"]);
             var $__17=
              new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__16]);
             var $__18=
              new _A_($UHC.$Base.$negate,[$UHC.$Base.$Num__DCT73__168__0,$__17]);
             var $__19=
              new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT73__168__0,$__18,$__15]);
             var $__20=
              new _A_($Comparisons.$Pong.$vx,[$b]);
             var $__21=
              new _A_($Comparisons.$Pong.$by,[$b]);
             var $__22=
              new _A_($Comparisons.$Pong.$bx,[$b]);
             var $__23=
              new _A_($Comparisons.$Pong.$Ball__,[$__22,$__21,$__20,$__19]);
             $__swJSW41__0=
              $__23;
             break;}
          return $__swJSW41__0;});
$Comparisons.$Pong.$paddle=
 new _F_(function($b,$p1,$p2)
         {var $__=
           new _A_($Comparisons.$Pong.$wall,[$b]);
          var $__5=
           new _A_($Comparisons.$Pong.$pb,[$p1]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$__5,$__]);
          var $__7=
           new _A_($Comparisons.$Pong.$pb,[$p2]);
          return new _A_($UHC.$Base.$_24,[$__7,$__6]);});
$Comparisons.$Pong.$collide=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          var $__6=
           new _A_($Comparisons.$Pong.$paddle,[$__2._3,$__2._1,$__2._2]);
          var $__7=
           new _A_($Comparisons.$Pong.$walls,[$__2._2]);
          var $__8=
           new _A_($Comparisons.$Pong.$walls,[$__2._1]);
          var $__9=
           new _A_($Comparisons.$Pong.$Game__,[$__8,$__7,$__6]);
          return $__9;});
$Comparisons.$Pong.$nextUNQ567=
 new _F_(function($key,$game)
         {var $__=
           new _A_($UHC.$Base.$fst,[$key]);
          var $__4=
           new _A_($UHC.$Base.$_24,[$UHC.$Base.$snd,$__]);
          var $__5=
           new _A_($Comparisons.$Pong.$push,[$__4]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$__5,$game]);
          var $__7=
           new _A_($UHC.$Base.$fst,[$key]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$UHC.$Base.$fst,$__7]);
          var $__9=
           new _A_($Comparisons.$Pong.$pop,[$__8]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$__9,$__6]);
          var $__11=
           new _A_($Comparisons.$Pong.$step,[$key]);
          var $__12=
           new _A_($UHC.$Base.$_24,[$__11,$__10]);
          var $__13=
           new _A_($UHC.$Base.$_24,[$Comparisons.$Pong.$collide,$__12]);
          return new _A_($UHC.$Base.$_24,[$Comparisons.$Pong.$scoreg,$__13]);});
$Comparisons.$Pong.$state=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Control.$foldp,[$Comparisons.$Pong.$nextUNQ567,$Comparisons.$Pong.$initial,$Comparisons.$Pong.$tick]);}),[]);
$Comparisons.$Pong.$_24okUNQ572=
 new _F_(function($_24x)
         {var $context=
           new _A_($Melchior.$Dom.$Drawing.$contextOf,[$_24x]);
          return new _A_($Comparisons.$Pong.$display,[$Comparisons.$Pong.$state,$context]);});
$Comparisons.$Pong.$setupPong=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT51__7__0]);
          var $__3=
           new _A_($UHC.$Base.$packedStringToString,["canvas"]);
          var $__4=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT51__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT51__7__0,$__3]);
          var $__5=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT51__11__0,$__4,$__]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$canvases,[$Melchior.$Dom.$Selectors.$Nodes__DCT51__4__0]);
          var $__7=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT51__11__0,$__6,$__5]);
          var $__8=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__7,$html]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$assuredly,$__8]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__9]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT21__1__0,$__10,$Comparisons.$Pong.$_24okUNQ572]);});
$Comparisons.$Pong.$main=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Control.$runDom,[$Comparisons.$Pong.$setupPong]);}),[]);
$Comparisons.$Pong.$_24S__yDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["y"]);});
$Comparisons.$Pong.$_24S__yNEW423UNQ264SDCGENSelector=
 new _F_(function($_24S__y)
         {var $_24S__y2=
           new _A_($Comparisons.$Pong.$_24S__yNEW425UNQ265EVLSDCGENSelector,[$_24S__y]);
          return $_24S__y2;});
$Comparisons.$Pong.$_24S__yNEW425UNQ265EVLSDCGENSelector=
 new _F_(function($_24S__y)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS73__353__0,[$_24S__y]));
          var $__4=
           {_tag_:0,_1:$Comparisons.$Pong.$_24S__yDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$Comparisons.$Pong.$_24S__yUNQ264SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24S__yNEW423UNQ264SDCGENSelector,[$Comparisons.$Pong.$_24S__yUNQ264SDCGENSelector]);}),[]);
$Comparisons.$Pong.$_24S__yGENSelector=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24S__yUNQ264SDCGENSelector;}),[]);
$Comparisons.$Pong.$_24S__xDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["x"]);});
$Comparisons.$Pong.$_24S__xNEW431UNQ259SDCGENSelector=
 new _F_(function($_24S__x)
         {var $_24S__x2=
           new _A_($Comparisons.$Pong.$_24S__xNEW433UNQ260EVLSDCGENSelector,[$_24S__x]);
          return $_24S__x2;});
$Comparisons.$Pong.$_24S__xNEW433UNQ260EVLSDCGENSelector=
 new _F_(function($_24S__x)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS73__353__0,[$_24S__x]));
          var $__4=
           {_tag_:0,_1:$Comparisons.$Pong.$_24S__xDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$Comparisons.$Pong.$_24S__xUNQ259SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24S__xNEW431UNQ259SDCGENSelector,[$Comparisons.$Pong.$_24S__xUNQ259SDCGENSelector]);}),[]);
$Comparisons.$Pong.$_24S__xGENSelector=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24S__xUNQ259SDCGENSelector;}),[]);
$Comparisons.$Pong.$_24S__vyDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["vy"]);});
$Comparisons.$Pong.$_24S__vyNEW439UNQ394SDCGENSelector=
 new _F_(function($_24S__vy)
         {var $_24S__vy2=
           new _A_($Comparisons.$Pong.$_24S__vyNEW441UNQ395EVLSDCGENSelector,[$_24S__vy]);
          return $_24S__vy2;});
$Comparisons.$Pong.$_24S__vyNEW441UNQ395EVLSDCGENSelector=
 new _F_(function($_24S__vy)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS73__353__0,[$_24S__vy]));
          var $__4=
           {_tag_:0,_1:$Comparisons.$Pong.$_24S__vyDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$Comparisons.$Pong.$_24S__vyUNQ394SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24S__vyNEW439UNQ394SDCGENSelector,[$Comparisons.$Pong.$_24S__vyUNQ394SDCGENSelector]);}),[]);
$Comparisons.$Pong.$_24S__vyGENSelector=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24S__vyUNQ394SDCGENSelector;}),[]);
$Comparisons.$Pong.$_24S__vxDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["vx"]);});
$Comparisons.$Pong.$_24S__vxNEW447UNQ389SDCGENSelector=
 new _F_(function($_24S__vx)
         {var $_24S__vx2=
           new _A_($Comparisons.$Pong.$_24S__vxNEW449UNQ390EVLSDCGENSelector,[$_24S__vx]);
          return $_24S__vx2;});
$Comparisons.$Pong.$_24S__vxNEW449UNQ390EVLSDCGENSelector=
 new _F_(function($_24S__vx)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS73__353__0,[$_24S__vx]));
          var $__4=
           {_tag_:0,_1:$Comparisons.$Pong.$_24S__vxDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$Comparisons.$Pong.$_24S__vxUNQ389SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24S__vxNEW447UNQ389SDCGENSelector,[$Comparisons.$Pong.$_24S__vxUNQ389SDCGENSelector]);}),[]);
$Comparisons.$Pong.$_24S__vxGENSelector=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24S__vxUNQ389SDCGENSelector;}),[]);
$Comparisons.$Pong.$_24S__scoreDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["score"]);});
$Comparisons.$Pong.$_24S__scoreNEW455UNQ254SDCGENSelector=
 new _F_(function($_24S__score)
         {var $_24S__score2=
           new _A_($Comparisons.$Pong.$_24S__scoreNEW457UNQ255EVLSDCGENSelector,[$_24S__score]);
          return $_24S__score2;});
$Comparisons.$Pong.$_24S__scoreNEW457UNQ255EVLSDCGENSelector=
 new _F_(function($_24S__score)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS73__353__0,[$_24S__score]));
          var $__4=
           {_tag_:0,_1:$Comparisons.$Pong.$_24S__scoreDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$Comparisons.$Pong.$_24S__scoreUNQ254SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24S__scoreNEW455UNQ254SDCGENSelector,[$Comparisons.$Pong.$_24S__scoreUNQ254SDCGENSelector]);}),[]);
$Comparisons.$Pong.$_24S__scoreGENSelector=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24S__scoreUNQ254SDCGENSelector;}),[]);
$Comparisons.$Pong.$_24S__mvDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["mv"]);});
$Comparisons.$Pong.$_24S__mvNEW463UNQ249SDCGENSelector=
 new _F_(function($_24S__mv)
         {var $_24S__mv2=
           new _A_($Comparisons.$Pong.$_24S__mvNEW465UNQ250EVLSDCGENSelector,[$_24S__mv]);
          return $_24S__mv2;});
$Comparisons.$Pong.$_24S__mvNEW465UNQ250EVLSDCGENSelector=
 new _F_(function($_24S__mv)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS73__353__0,[$_24S__mv]));
          var $__4=
           {_tag_:0,_1:$Comparisons.$Pong.$_24S__mvDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$Comparisons.$Pong.$_24S__mvUNQ249SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24S__mvNEW463UNQ249SDCGENSelector,[$Comparisons.$Pong.$_24S__mvUNQ249SDCGENSelector]);}),[]);
$Comparisons.$Pong.$_24S__mvGENSelector=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24S__mvUNQ249SDCGENSelector;}),[]);
$Comparisons.$Pong.$_24S__byDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["by"]);});
$Comparisons.$Pong.$_24S__byNEW471UNQ384SDCGENSelector=
 new _F_(function($_24S__by)
         {var $_24S__by2=
           new _A_($Comparisons.$Pong.$_24S__byNEW473UNQ385EVLSDCGENSelector,[$_24S__by]);
          return $_24S__by2;});
$Comparisons.$Pong.$_24S__byNEW473UNQ385EVLSDCGENSelector=
 new _F_(function($_24S__by)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS73__353__0,[$_24S__by]));
          var $__4=
           {_tag_:0,_1:$Comparisons.$Pong.$_24S__byDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$Comparisons.$Pong.$_24S__byUNQ384SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24S__byNEW471UNQ384SDCGENSelector,[$Comparisons.$Pong.$_24S__byUNQ384SDCGENSelector]);}),[]);
$Comparisons.$Pong.$_24S__byGENSelector=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24S__byUNQ384SDCGENSelector;}),[]);
$Comparisons.$Pong.$_24S__bxDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["bx"]);});
$Comparisons.$Pong.$_24S__bxNEW479UNQ379SDCGENSelector=
 new _F_(function($_24S__bx)
         {var $_24S__bx2=
           new _A_($Comparisons.$Pong.$_24S__bxNEW481UNQ380EVLSDCGENSelector,[$_24S__bx]);
          return $_24S__bx2;});
$Comparisons.$Pong.$_24S__bxNEW481UNQ380EVLSDCGENSelector=
 new _F_(function($_24S__bx)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS73__353__0,[$_24S__bx]));
          var $__4=
           {_tag_:0,_1:$Comparisons.$Pong.$_24S__bxDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$Comparisons.$Pong.$_24S__bxUNQ379SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24S__bxNEW479UNQ379SDCGENSelector,[$Comparisons.$Pong.$_24S__bxUNQ379SDCGENSelector]);}),[]);
$Comparisons.$Pong.$_24S__bxGENSelector=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24S__bxUNQ379SDCGENSelector;}),[]);
$Comparisons.$Pong.$_24D__PlayerDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Comparisons.Pong"]);});
$Comparisons.$Pong.$_24D__PlayerDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Player"]);});
$Comparisons.$Pong.$_24D__PlayerNEW488UNQ233SDCGENDatatype=
 new _F_(function($_24D__Player)
         {var $_24D__Player2=
           new _A_($Comparisons.$Pong.$_24D__PlayerNEW490UNQ234EVLSDCGENDatatype,[$_24D__Player]);
          return $_24D__Player2;});
$Comparisons.$Pong.$_24D__PlayerNEW490UNQ234EVLSDCGENDatatype=
 new _F_(function($_24D__Player)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS73__352__0,[$_24D__Player]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Pong.$_24D__PlayerDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$Comparisons.$Pong.$_24D__PlayerDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$Comparisons.$Pong.$_24D__PlayerUNQ233SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24D__PlayerNEW488UNQ233SDCGENDatatype,[$Comparisons.$Pong.$_24D__PlayerUNQ233SDCGENDatatype]);}),[]);
$Comparisons.$Pong.$_24D__PlayerGENDatatype=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24D__PlayerUNQ233SDCGENDatatype;}),[]);
$Comparisons.$Pong.$_24D__GameDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Comparisons.Pong"]);});
$Comparisons.$Pong.$_24D__GameDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Game"]);});
$Comparisons.$Pong.$_24D__GameNEW497UNQ459SDCGENDatatype=
 new _F_(function($_24D__Game)
         {var $_24D__Game2=
           new _A_($Comparisons.$Pong.$_24D__GameNEW499UNQ460EVLSDCGENDatatype,[$_24D__Game]);
          return $_24D__Game2;});
$Comparisons.$Pong.$_24D__GameNEW499UNQ460EVLSDCGENDatatype=
 new _F_(function($_24D__Game)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS73__352__0,[$_24D__Game]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Pong.$_24D__GameDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$Comparisons.$Pong.$_24D__GameDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$Comparisons.$Pong.$_24D__GameUNQ459SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24D__GameNEW497UNQ459SDCGENDatatype,[$Comparisons.$Pong.$_24D__GameUNQ459SDCGENDatatype]);}),[]);
$Comparisons.$Pong.$_24D__GameGENDatatype=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24D__GameUNQ459SDCGENDatatype;}),[]);
$Comparisons.$Pong.$_24D__BallDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Comparisons.Pong"]);});
$Comparisons.$Pong.$_24D__BallDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Ball"]);});
$Comparisons.$Pong.$_24D__BallNEW506UNQ363SDCGENDatatype=
 new _F_(function($_24D__Ball)
         {var $_24D__Ball2=
           new _A_($Comparisons.$Pong.$_24D__BallNEW508UNQ364EVLSDCGENDatatype,[$_24D__Ball]);
          return $_24D__Ball2;});
$Comparisons.$Pong.$_24D__BallNEW508UNQ364EVLSDCGENDatatype=
 new _F_(function($_24D__Ball)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS73__352__0,[$_24D__Ball]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Pong.$_24D__BallDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$Comparisons.$Pong.$_24D__BallDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$Comparisons.$Pong.$_24D__BallUNQ363SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24D__BallNEW506UNQ363SDCGENDatatype,[$Comparisons.$Pong.$_24D__BallUNQ363SDCGENDatatype]);}),[]);
$Comparisons.$Pong.$_24D__BallGENDatatype=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24D__BallUNQ363SDCGENDatatype;}),[]);
$Comparisons.$Pong.$_24C__PlayerDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Player"]);});
$Comparisons.$Pong.$_24C__PlayerDFLUHC_2eBase_2econIsRecordGENConstructor=
 new _F_(function($x)
         {return $UHC.$Base.$True__;});
$Comparisons.$Pong.$_24C__PlayerNEW515UNQ240SDCGENConstructor=
 new _F_(function($_24C__Player)
         {var $_24C__Player2=
           new _A_($Comparisons.$Pong.$_24C__PlayerNEW517UNQ241EVLSDCGENConstructor,[$_24C__Player]);
          return $_24C__Player2;});
$Comparisons.$Pong.$_24C__PlayerNEW517UNQ241EVLSDCGENConstructor=
 new _F_(function($_24C__Player)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS73__355__0,[$_24C__Player]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Comparisons.$Pong.$_24C__PlayerDFLUHC_2eBase_2econIsRecordGENConstructor,_3:$Constructor__._3,_4:$Comparisons.$Pong.$_24C__PlayerDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$Comparisons.$Pong.$_24C__PlayerUNQ240SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24C__PlayerNEW515UNQ240SDCGENConstructor,[$Comparisons.$Pong.$_24C__PlayerUNQ240SDCGENConstructor]);}),[]);
$Comparisons.$Pong.$_24C__PlayerGENConstructor=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24C__PlayerUNQ240SDCGENConstructor;}),[]);
$Comparisons.$Pong.$_24C__GameDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Game"]);});
$Comparisons.$Pong.$_24C__GameNEW523UNQ466SDCGENConstructor=
 new _F_(function($_24C__Game)
         {var $_24C__Game2=
           new _A_($Comparisons.$Pong.$_24C__GameNEW525UNQ467EVLSDCGENConstructor,[$_24C__Game]);
          return $_24C__Game2;});
$Comparisons.$Pong.$_24C__GameNEW525UNQ467EVLSDCGENConstructor=
 new _F_(function($_24C__Game)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS73__355__0,[$_24C__Game]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$Comparisons.$Pong.$_24C__GameDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$Comparisons.$Pong.$_24C__GameUNQ466SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24C__GameNEW523UNQ466SDCGENConstructor,[$Comparisons.$Pong.$_24C__GameUNQ466SDCGENConstructor]);}),[]);
$Comparisons.$Pong.$_24C__GameGENConstructor=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24C__GameUNQ466SDCGENConstructor;}),[]);
$Comparisons.$Pong.$_24C__BallDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Ball"]);});
$Comparisons.$Pong.$_24C__BallDFLUHC_2eBase_2econIsRecordGENConstructor=
 new _F_(function($x)
         {return $UHC.$Base.$True__;});
$Comparisons.$Pong.$_24C__BallNEW532UNQ370SDCGENConstructor=
 new _F_(function($_24C__Ball)
         {var $_24C__Ball2=
           new _A_($Comparisons.$Pong.$_24C__BallNEW534UNQ371EVLSDCGENConstructor,[$_24C__Ball]);
          return $_24C__Ball2;});
$Comparisons.$Pong.$_24C__BallNEW534UNQ371EVLSDCGENConstructor=
 new _F_(function($_24C__Ball)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS73__355__0,[$_24C__Ball]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Comparisons.$Pong.$_24C__BallDFLUHC_2eBase_2econIsRecordGENConstructor,_3:$Constructor__._3,_4:$Comparisons.$Pong.$_24C__BallDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$Comparisons.$Pong.$_24C__BallUNQ370SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Pong.$_24C__BallNEW532UNQ370SDCGENConstructor,[$Comparisons.$Pong.$_24C__BallUNQ370SDCGENConstructor]);}),[]);
$Comparisons.$Pong.$_24C__BallGENConstructor=
 new _A_(new _F_(function()
                 {return $Comparisons.$Pong.$_24C__BallUNQ370SDCGENConstructor;}),[]);
var $main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Run.$ehcRunMain,[$Comparisons.$Pong.$main]);}),[]);
_e_(new _A_($main,[[]]));
