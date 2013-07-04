// Comparisons.Bobble
var $Comparisons=
 ($Comparisons ? $Comparisons : {});
$Comparisons.$Bobble=
 ($Comparisons.$Bobble ? $Comparisons.$Bobble : {});
$Comparisons.$Bobble.$y=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.y;});
$Comparisons.$Bobble.$x=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.x;});
$Comparisons.$Bobble.$vy=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.vy;});
$Comparisons.$Bobble.$vx=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.vx;});
$Comparisons.$Bobble.$score=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.score;});
$Comparisons.$Bobble.$frame=
 new _F_(function($__)
         {var $__2=
           new _A_($UHC.$Base.$packedStringToInteger,["17"]);
          return new _A_($UHC.$Base.$fromInteger,[$__,$__2]);});
$Comparisons.$Bobble.$dv=
 new _F_(function($__)
         {var $__2=
           new _A_($UHC.$Base.$packedStringToInteger,["1"]);
          var $__3=
           new _A_($UHC.$Base.$packedStringToInteger,["5"]);
          var $__4=
           new _A_($UHC.$Base.$_3a_25,[$__3,$__2]);
          return new _A_($UHC.$Base.$fromRational,[$__,$__4]);});
$Comparisons.$Bobble.$ioNEW20UNQ347=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2._1;});
$Comparisons.$Bobble.$drawPlayer=
 new _F_(function($p,$c)
         {var $__=
           new _A_($Comparisons.$Bobble.$y,[$p]);
          var $__4=
           new _A_($Comparisons.$Bobble.$x,[$p]);
          var $__5=
           new _A_($Melchior.$Dom.$Drawing.$circle,[$__4,$__,25,$c]);
          var $io=
           new _A_($Comparisons.$Bobble.$ioNEW20UNQ347,[$__5]);
          return $io;});
$Comparisons.$Bobble.$__17__60__0=
 new _F_(function($x,$y,$c)
         {var $__=
           new _A_($Melchior.$Dom.$Drawing.$circle,[$x,$y,10,$c]);
          var $io=
           new _A_($Comparisons.$Bobble.$ioNEW27UNQ559,[$__]);
          return $io;});
$Comparisons.$Bobble.$ioNEW27UNQ559=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2._1;});
$Comparisons.$Bobble.$drawBall=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return new _A_($Comparisons.$Bobble.$__17__60__0,[$__2._1,$__2._2]);});
$Comparisons.$Bobble.$__17__93NEW31=
 new _F_(function($p2,$c)
         {var $__=
           new _A_($UHC.$Base.$packedStringToString,["40pt Helvetica"]);
          var $__4=
           new _A_($Melchior.$Dom.$Drawing.$fontStyle,[$c,$__]);
          var $__5=
           new _A_($UHC.$Base.$show,[$UHC.$Base.$Show__DCT73__128__0,$p2]);
          var $__6=
           new _A_($Melchior.$Dom.$Drawing.$text,[$__5,650,50,$__4]);
          var $io=
           new _A_($Comparisons.$Bobble.$ioNEW38UNQ185,[$__6]);
          return $io;});
$Comparisons.$Bobble.$ioNEW38UNQ185=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2._1;});
$Comparisons.$Bobble.$__17__80NEW41=
 new _F_(function($p1,$c)
         {var $__=
           new _A_($UHC.$Base.$packedStringToString,["40pt Helvetica"]);
          var $__4=
           new _A_($Melchior.$Dom.$Drawing.$fontStyle,[$c,$__]);
          var $__5=
           new _A_($UHC.$Base.$show,[$UHC.$Base.$Show__DCT73__128__0,$p1]);
          var $__6=
           new _A_($Melchior.$Dom.$Drawing.$text,[$__5,25,50,$__4]);
          var $io=
           new _A_($Comparisons.$Bobble.$ioNEW48UNQ178,[$__6]);
          return $io;});
$Comparisons.$Bobble.$ioNEW48UNQ178=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2._1;});
$Comparisons.$Bobble.$drawScores=
 new _F_(function($p1,$p2,$c)
         {var $__=
           new _A_($Comparisons.$Bobble.$__17__93NEW31,[$p2,$c]);
          var $__5=
           new _A_($Comparisons.$Bobble.$__17__80NEW41,[$p1,$c]);
          return new _A_($UHC.$Base.$_3e_3e,[$UHC.$Base.$Monad__DCT73__341__0,$__5,$__]);});
$Comparisons.$Bobble.$__17__139NEW52=
 new _F_(function($c)
         {var $__=
           new _A_($UHC.$Base.$packedStringToString,["#3F3"]);
          var $__3=
           new _A_($Melchior.$Dom.$Drawing.$fillStyle,[$c,$__]);
          var $__4=
           new _A_($Melchior.$Dom.$Drawing.$rectangle,[375,320,1,60,$__3]);
          var $io=
           new _A_($Comparisons.$Bobble.$ioNEW57UNQ210,[$__4]);
          return $io;});
$Comparisons.$Bobble.$ioNEW57UNQ210=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2._1;});
$Comparisons.$Bobble.$__17__127NEW60=
 new _F_(function($c)
         {var $__=
           new _A_($UHC.$Base.$packedStringToString,["#FFF"]);
          var $__3=
           new _A_($Melchior.$Dom.$Drawing.$fillStyle,[$c,$__]);
          var $__4=
           new _A_($Melchior.$Dom.$Drawing.$rectangle,[0,0,750,350,$__3]);
          var $io=
           new _A_($Comparisons.$Bobble.$ioNEW65UNQ202,[$__4]);
          return $io;});
$Comparisons.$Bobble.$ioNEW65UNQ202=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2._1;});
$Comparisons.$Bobble.$__17__112NEW69=
 new _F_(function($c)
         {var $__=
           new _A_($UHC.$Base.$packedStringToString,["#999"]);
          var $__3=
           new _A_($Melchior.$Dom.$Drawing.$fillStyle,[$c,$__]);
          var $__4=
           new _A_($Melchior.$Dom.$Drawing.$rectangle,[0,350,750,400,$__3]);
          var $io=
           new _A_($Comparisons.$Bobble.$ioNEW74UNQ194,[$__4]);
          return $io;});
$Comparisons.$Bobble.$ioNEW74UNQ194=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2._1;});
$Comparisons.$Bobble.$drawBackground=
 new _F_(function($c)
         {var $__=
           new _A_($Comparisons.$Bobble.$__17__139NEW52,[$c]);
          var $__3=
           new _A_($Comparisons.$Bobble.$__17__127NEW60,[$c]);
          var $__4=
           new _A_($UHC.$Base.$_3e_3e,[$UHC.$Base.$Monad__DCT73__341__0,$__3,$__]);
          var $__5=
           new _A_($Comparisons.$Bobble.$__17__112NEW69,[$c]);
          return new _A_($UHC.$Base.$_3e_3e,[$UHC.$Base.$Monad__DCT73__341__0,$__5,$__4]);});
$Comparisons.$Bobble.$__17__156__0=
 new _F_(function($b,$p1,$p2,$c)
         {var $__=
           new _A_($Melchior.$Dom.$Drawing.$fillStyle,[$c,$Melchior.$Dom.$Drawing.$green]);
          var $__6=
           new _A_($Comparisons.$Bobble.$drawBall,[$b,$__]);
          var $__7=
           new _A_($Melchior.$Dom.$Drawing.$fillStyle,[$c,$Melchior.$Dom.$Drawing.$blue]);
          var $__8=
           new _A_($Comparisons.$Bobble.$drawPlayer,[$p2,$__7]);
          var $__9=
           new _A_($UHC.$Base.$_3e_3e,[$UHC.$Base.$Monad__DCT73__341__0,$__8,$__6]);
          var $__10=
           new _A_($Melchior.$Dom.$Drawing.$fillStyle,[$c,$Melchior.$Dom.$Drawing.$red]);
          var $__11=
           new _A_($Comparisons.$Bobble.$drawPlayer,[$p1,$__10]);
          var $__12=
           new _A_($UHC.$Base.$_3e_3e,[$UHC.$Base.$Monad__DCT73__341__0,$__11,$__9]);
          var $__13=
           new _A_($Comparisons.$Bobble.$score,[$p2]);
          var $__14=
           new _A_($Comparisons.$Bobble.$score,[$p1]);
          var $__15=
           new _A_($Comparisons.$Bobble.$drawScores,[$__14,$__13,$c]);
          return new _A_($UHC.$Base.$_3e_3e,[$UHC.$Base.$Monad__DCT73__341__0,$__15,$__12]);});
$Comparisons.$Bobble.$drawGameElements=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return new _A_($Comparisons.$Bobble.$__17__156__0,[$__2._3,$__2._1,$__2._2]);});
$Comparisons.$Bobble.$Player__=
 new _F_(function($x1,$x2,$x3,$x4,$x5)
         {return {_tag_:0,x:$x1,y:$x2,vx:$x3,vy:$x4,score:$x5};});
$Comparisons.$Bobble.$__Rep0PlayerDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {var $proj__3=
           _e_($proj__1);
          var $proj__45=
           _e_($proj__3._1);
          var $proj__98=
           _e_($proj__3._2);
          var $proj__1211=
           _e_($proj__98._2);
          var $__=
           new _A_($Comparisons.$Bobble.$Player__,[$proj__45._1,$proj__45._2,$proj__98._1,$proj__1211._1,$proj__1211._2]);
          return $__;});
$Comparisons.$Bobble.$__Rep0PlayerDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__8=
           new _A_($UHC.$Base.$K1__,[$x2.score]);
          var $__9=
           new _A_($UHC.$Base.$M1__,[$__8]);
          var $__10=
           new _A_($UHC.$Base.$K1__,[$x2.vy]);
          var $__11=
           new _A_($UHC.$Base.$M1__,[$__10]);
          var $__12=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__11,$__9]);
          var $__13=
           new _A_($UHC.$Base.$K1__,[$x2.vx]);
          var $__14=
           new _A_($UHC.$Base.$M1__,[$__13]);
          var $__15=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__14,$__12]);
          var $__16=
           new _A_($UHC.$Base.$K1__,[$x2.y]);
          var $__17=
           new _A_($UHC.$Base.$M1__,[$__16]);
          var $__18=
           new _A_($UHC.$Base.$K1__,[$x2.x]);
          var $__19=
           new _A_($UHC.$Base.$M1__,[$__18]);
          var $__20=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__19,$__17]);
          var $__21=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__20,$__15]);
          var $__22=
           new _A_($UHC.$Base.$M1__,[$__21]);
          var $__23=
           new _A_($UHC.$Base.$M1__,[$__22]);
          return $__23;});
$Comparisons.$Bobble.$__Rep0PlayerNEW117UNQ218SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($Comparisons.$Bobble.$__Rep0PlayerNEW119UNQ219EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$Comparisons.$Bobble.$__Rep0PlayerNEW119UNQ219EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS73__371__0,[$__]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Bobble.$__Rep0PlayerDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$Comparisons.$Bobble.$__Rep0PlayerDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$Comparisons.$Bobble.$__Rep0PlayerUNQ218SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$__Rep0PlayerNEW117UNQ218SDCGENRepresentable0,[$Comparisons.$Bobble.$__Rep0PlayerUNQ218SDCGENRepresentable0]);}),[]);
$Comparisons.$Bobble.$__Rep0PlayerGENRepresentable0=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$__Rep0PlayerUNQ218SDCGENRepresentable0;}),[]);
$Comparisons.$Bobble.$collideP=
 new _F_(function($p)
         {var $__=
           new _A_($Comparisons.$Bobble.$x,[$p]);
          var $__3=
           new _A_($UHC.$Base.$_3e,[$UHC.$Base.$Ord__DCT73__91__0,$__,700]);
          var $__4=
           new _A_($Comparisons.$Bobble.$x,[$p]);
          var $__5=
           new _A_($UHC.$Base.$_3c,[$UHC.$Base.$Ord__DCT73__91__0,$__4,25]);
          var $__6=
           new _A_($UHC.$Base.$_7c_7c,[$__5,$__3]);
          var $__7=
           new _A_($Comparisons.$Bobble.$x,[$p]);
          var $__8=
           new _A_($UHC.$Base.$_2d,[$UHC.$Base.$Num__DCT73__101__0,$__7,375]);
          var $__9=
           new _A_($UHC.$Base.$abs,[$UHC.$Base.$Num__DCT73__101__0]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$__9,$__8]);
          var $__11=
           new _A_($UHC.$Base.$_3c,[$UHC.$Base.$Ord__DCT73__91__0,$__10,25]);
          var $__12=
           new _A_($UHC.$Base.$_7c_7c,[$__11,$__6]);
          var $__13=
           _e_($__12);
          var $__swJSW20__0;
          switch($__13._tag_)
           {case 0:
             $__swJSW20__0=
              $p;
             break;
            case 1:
             var $__14=
              new _A_($Comparisons.$Bobble.$score,[$p]);
             var $__15=
              new _A_($Comparisons.$Bobble.$vy,[$p]);
             var $__16=
              new _A_($UHC.$Base.$packedStringToInteger,["1"]);
             var $__17=
              new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__16]);
             var $__18=
              new _A_($UHC.$Base.$negate,[$UHC.$Base.$Num__DCT73__168__0,$__17]);
             var $__19=
              new _A_($Comparisons.$Bobble.$vx,[$p]);
             var $__20=
              new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT73__168__0,$__19,$__18]);
             var $__21=
              new _A_($Comparisons.$Bobble.$y,[$p]);
             var $__22=
              new _A_($Comparisons.$Bobble.$x,[$p]);
             var $__23=
              new _A_($Comparisons.$Bobble.$Player__,[$__22,$__21,$__20,$__15,$__14]);
             $__swJSW20__0=
              $__23;
             break;}
          return $__swJSW20__0;});
$Comparisons.$Bobble.$__17__305NEW153=
 new _F_(function($y)
         {var $__=
           new _A_($UHC.$Base.$_3e,[$UHC.$Base.$Ord__DCT73__91__0,$y,350]);
          var $__3=
           _e_($__);
          var $__swJSW21__0;
          switch($__3._tag_)
           {case 0:
             $__swJSW21__0=
              $y;
             break;
            case 1:
             $__swJSW21__0=
              350;
             break;}
          return $__swJSW21__0;});
$Comparisons.$Bobble.$gravitate=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          var $__8=
           new _A_($UHC.$Base.$packedStringToInteger,["2"]);
          var $__9=
           new _A_($UHC.$Base.$packedStringToInteger,["1"]);
          var $__10=
           new _A_($UHC.$Base.$_3a_25,[$__9,$__8]);
          var $__11=
           new _A_($UHC.$Base.$fromRational,[$UHC.$Base.$Fractional__DCT73__192__0,$__10]);
          var $__12=
           new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__168__0,$__2.vy,$__11]);
          var $__13=
           new _A_($Comparisons.$Bobble.$__17__305NEW153,[$__2.y]);
          var $__14=
           new _A_($Comparisons.$Bobble.$Player__,[$__2.x,$__13,$__2.vx,$__12,$__2.score]);
          return $__14;});
$Comparisons.$Bobble.$moveP=
 new _F_(function($p,$i)
         {var $__=
           new _A_($UHC.$Base.$_3d_3d,[$UHC.$Base.$Eq__DCT73__88__0,$i,65]);
          var $__4=
           new _A_($UHC.$Base.$_3d_3d,[$UHC.$Base.$Eq__DCT73__88__0,$i,37]);
          var $__5=
           new _A_($UHC.$Base.$_7c_7c,[$__4,$__]);
          var $__6=
           _e_($__5);
          var $__swJSW23__0;
          switch($__6._tag_)
           {case 0:
             var $__7=
              new _A_($UHC.$Base.$_3d_3d,[$UHC.$Base.$Eq__DCT73__88__0,$i,87]);
             var $__8=
              new _A_($UHC.$Base.$_3d_3d,[$UHC.$Base.$Eq__DCT73__88__0,$i,38]);
             var $__9=
              new _A_($UHC.$Base.$_7c_7c,[$__8,$__7]);
             var $__10=
              _e_($__9);
             var $__swJSW24__0;
             switch($__10._tag_)
              {case 0:
                var $__11=
                 new _A_($UHC.$Base.$_3d_3d,[$UHC.$Base.$Eq__DCT73__88__0,$i,68]);
                var $__12=
                 new _A_($UHC.$Base.$_3d_3d,[$UHC.$Base.$Eq__DCT73__88__0,$i,39]);
                var $__13=
                 new _A_($UHC.$Base.$_7c_7c,[$__12,$__11]);
                var $__14=
                 _e_($__13);
                var $__swJSW25__0;
                switch($__14._tag_)
                 {case 0:
                   var $__15=
                    new _A_($Comparisons.$Bobble.$score,[$p]);
                   var $__16=
                    new _A_($UHC.$Base.$packedStringToInteger,["10"]);
                   var $__17=
                    new _A_($UHC.$Base.$packedStringToInteger,["9"]);
                   var $__18=
                    new _A_($UHC.$Base.$_3a_25,[$__17,$__16]);
                   var $__19=
                    new _A_($UHC.$Base.$fromRational,[$UHC.$Base.$Fractional__DCT73__192__0,$__18]);
                   var $__20=
                    new _A_($Comparisons.$Bobble.$vy,[$p]);
                   var $__21=
                    new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT73__168__0,$__20,$__19]);
                   var $__22=
                    new _A_($UHC.$Base.$packedStringToInteger,["10"]);
                   var $__23=
                    new _A_($UHC.$Base.$packedStringToInteger,["9"]);
                   var $__24=
                    new _A_($UHC.$Base.$_3a_25,[$__23,$__22]);
                   var $__25=
                    new _A_($UHC.$Base.$fromRational,[$UHC.$Base.$Fractional__DCT73__192__0,$__24]);
                   var $__26=
                    new _A_($Comparisons.$Bobble.$vx,[$p]);
                   var $__27=
                    new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT73__168__0,$__26,$__25]);
                   var $__28=
                    new _A_($Comparisons.$Bobble.$vy,[$p]);
                   var $__29=
                    new _A_($UHC.$Base.$round,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0,$__28]);
                   var $__30=
                    new _A_($Comparisons.$Bobble.$y,[$p]);
                   var $__31=
                    new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$__30,$__29]);
                   var $__32=
                    new _A_($Comparisons.$Bobble.$vx,[$p]);
                   var $__33=
                    new _A_($UHC.$Base.$round,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0,$__32]);
                   var $__34=
                    new _A_($Comparisons.$Bobble.$x,[$p]);
                   var $__35=
                    new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$__34,$__33]);
                   var $__36=
                    new _A_($Comparisons.$Bobble.$Player__,[$__35,$__31,$__27,$__21,$__15]);
                   $__swJSW25__0=
                    $__36;
                   break;
                  case 1:
                   var $__37=
                    new _A_($Comparisons.$Bobble.$score,[$p]);
                   var $__38=
                    new _A_($Comparisons.$Bobble.$vy,[$p]);
                   var $__39=
                    new _A_($Comparisons.$Bobble.$dv,[$UHC.$Base.$Fractional__DCT73__192__0]);
                   var $__40=
                    new _A_($Comparisons.$Bobble.$vx,[$p]);
                   var $__41=
                    new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__168__0,$__40,$__39]);
                   var $__42=
                    new _A_($Comparisons.$Bobble.$y,[$p]);
                   var $__43=
                    new _A_($Comparisons.$Bobble.$vx,[$p]);
                   var $__44=
                    new _A_($UHC.$Base.$round,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0,$__43]);
                   var $__45=
                    new _A_($Comparisons.$Bobble.$x,[$p]);
                   var $__46=
                    new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$__45,$__44]);
                   var $__47=
                    new _A_($Comparisons.$Bobble.$Player__,[$__46,$__42,$__41,$__38,$__37]);
                   $__swJSW25__0=
                    $__47;
                   break;}
                $__swJSW24__0=
                 $__swJSW25__0;
                break;
               case 1:
                var $__48=
                 new _A_($Comparisons.$Bobble.$y,[$p]);
                var $__49=
                 new _A_($UHC.$Base.$_3d_3d,[$UHC.$Base.$Eq__DCT73__88__0,$__48,350]);
                var $__50=
                 _e_($__49);
                var $__swJSW26__0;
                switch($__50._tag_)
                 {case 0:
                   var $__51=
                    new _A_($Comparisons.$Bobble.$score,[$p]);
                   var $__52=
                    new _A_($UHC.$Base.$packedStringToInteger,["10"]);
                   var $__53=
                    new _A_($UHC.$Base.$packedStringToInteger,["9"]);
                   var $__54=
                    new _A_($UHC.$Base.$_3a_25,[$__53,$__52]);
                   var $__55=
                    new _A_($UHC.$Base.$fromRational,[$UHC.$Base.$Fractional__DCT73__192__0,$__54]);
                   var $__56=
                    new _A_($Comparisons.$Bobble.$vy,[$p]);
                   var $__57=
                    new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT73__168__0,$__56,$__55]);
                   var $__58=
                    new _A_($UHC.$Base.$packedStringToInteger,["10"]);
                   var $__59=
                    new _A_($UHC.$Base.$packedStringToInteger,["9"]);
                   var $__60=
                    new _A_($UHC.$Base.$_3a_25,[$__59,$__58]);
                   var $__61=
                    new _A_($UHC.$Base.$fromRational,[$UHC.$Base.$Fractional__DCT73__192__0,$__60]);
                   var $__62=
                    new _A_($Comparisons.$Bobble.$vx,[$p]);
                   var $__63=
                    new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT73__168__0,$__62,$__61]);
                   var $__64=
                    new _A_($Comparisons.$Bobble.$vy,[$p]);
                   var $__65=
                    new _A_($UHC.$Base.$round,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0,$__64]);
                   var $__66=
                    new _A_($Comparisons.$Bobble.$y,[$p]);
                   var $__67=
                    new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$__66,$__65]);
                   var $__68=
                    new _A_($Comparisons.$Bobble.$vx,[$p]);
                   var $__69=
                    new _A_($UHC.$Base.$round,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0,$__68]);
                   var $__70=
                    new _A_($Comparisons.$Bobble.$x,[$p]);
                   var $__71=
                    new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$__70,$__69]);
                   var $__72=
                    new _A_($Comparisons.$Bobble.$Player__,[$__71,$__67,$__63,$__57,$__51]);
                   $__swJSW26__0=
                    $__72;
                   break;
                  case 1:
                   var $__73=
                    new _A_($Comparisons.$Bobble.$score,[$p]);
                   var $__74=
                    new _A_($Comparisons.$Bobble.$dv,[$UHC.$Base.$Fractional__DCT73__192__0]);
                   var $__75=
                    new _A_($UHC.$Base.$packedStringToInteger,["5"]);
                   var $__76=
                    new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__75]);
                   var $__77=
                    new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT73__168__0,$__76,$__74]);
                   var $__78=
                    new _A_($Comparisons.$Bobble.$vy,[$p]);
                   var $__79=
                    new _A_($UHC.$Base.$_2d,[$UHC.$Base.$Num__DCT73__168__0,$__78,$__77]);
                   var $__80=
                    new _A_($Comparisons.$Bobble.$vx,[$p]);
                   var $__81=
                    new _A_($Comparisons.$Bobble.$vy,[$p]);
                   var $__82=
                    new _A_($UHC.$Base.$round,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0,$__81]);
                   var $__83=
                    new _A_($Comparisons.$Bobble.$y,[$p]);
                   var $__84=
                    new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$__83,$__82]);
                   var $__85=
                    new _A_($Comparisons.$Bobble.$x,[$p]);
                   var $__86=
                    new _A_($Comparisons.$Bobble.$Player__,[$__85,$__84,$__80,$__79,$__73]);
                   $__swJSW26__0=
                    $__86;
                   break;}
                $__swJSW24__0=
                 $__swJSW26__0;
                break;}
             $__swJSW23__0=
              $__swJSW24__0;
             break;
            case 1:
             var $__87=
              new _A_($Comparisons.$Bobble.$score,[$p]);
             var $__88=
              new _A_($Comparisons.$Bobble.$vy,[$p]);
             var $__89=
              new _A_($Comparisons.$Bobble.$dv,[$UHC.$Base.$Fractional__DCT73__192__0]);
             var $__90=
              new _A_($Comparisons.$Bobble.$vx,[$p]);
             var $__91=
              new _A_($UHC.$Base.$_2d,[$UHC.$Base.$Num__DCT73__168__0,$__90,$__89]);
             var $__92=
              new _A_($Comparisons.$Bobble.$y,[$p]);
             var $__93=
              new _A_($Comparisons.$Bobble.$vx,[$p]);
             var $__94=
              new _A_($UHC.$Base.$round,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0,$__93]);
             var $__95=
              new _A_($Comparisons.$Bobble.$x,[$p]);
             var $__96=
              new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$__95,$__94]);
             var $__97=
              new _A_($Comparisons.$Bobble.$Player__,[$__96,$__92,$__91,$__88,$__87]);
             $__swJSW23__0=
              $__97;
             break;}
          return $__swJSW23__0;});
$Comparisons.$Bobble.$Game__=
 new _F_(function($x1,$x2,$x3)
         {return {_tag_:0,_1:$x1,_2:$x2,_3:$x3};});
$Comparisons.$Bobble.$__Rep0GameDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {var $proj__3=
           _e_($proj__1);
          var $proj__65=
           _e_($proj__3._2);
          var $__=
           new _A_($Comparisons.$Bobble.$Game__,[$proj__3._1,$proj__65._1,$proj__65._2]);
          return $__;});
$Comparisons.$Bobble.$__Rep0GameDFLUHC_2eBase_2efrom0GENRepresentable0=
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
$Comparisons.$Bobble.$__Rep0GameNEW272UNQ430SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($Comparisons.$Bobble.$__Rep0GameNEW274UNQ431EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$Comparisons.$Bobble.$__Rep0GameNEW274UNQ431EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS73__371__0,[$__]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Bobble.$__Rep0GameDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$Comparisons.$Bobble.$__Rep0GameDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$Comparisons.$Bobble.$__Rep0GameUNQ430SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$__Rep0GameNEW272UNQ430SDCGENRepresentable0,[$Comparisons.$Bobble.$__Rep0GameUNQ430SDCGENRepresentable0]);}),[]);
$Comparisons.$Bobble.$__Rep0GameGENRepresentable0=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$__Rep0GameUNQ430SDCGENRepresentable0;}),[]);
$Comparisons.$Bobble.$scoreP=
 new _F_(function($x1,$x2)
         {var $x13=
           _e_($x1);
          var $__swJSW31__0;
          switch($x13._tag_)
           {case 0:
             var $x24=
              _e_($x2);
             var $__8=
              _e_($x24._2);
             var $__14=
              new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$__8.score,1]);
             var $__15=
              new _A_($Comparisons.$Bobble.$Player__,[$__8.x,$__8.y,$__8.vx,$__8.vy,$__14]);
             var $__16=
              new _A_($Comparisons.$Bobble.$Game__,[$x24._1,$__15,$x24._3]);
             $__swJSW31__0=
              $__16;
             break;
            case 1:
             var $x217=
              _e_($x2);
             var $__21=
              _e_($x217._1);
             var $__27=
              new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$__21.score,1]);
             var $__28=
              new _A_($Comparisons.$Bobble.$Player__,[$__21.x,$__21.y,$__21.vx,$__21.vy,$__27]);
             var $__29=
              new _A_($Comparisons.$Bobble.$Game__,[$__28,$x217._2,$x217._3]);
             $__swJSW31__0=
              $__29;
             break;}
          return $__swJSW31__0;});
$Comparisons.$Bobble.$Ball__=
 new _F_(function($x1,$x2,$x3,$x4)
         {return {_tag_:0,_1:$x1,_2:$x2,_3:$x3,_4:$x4};});
$Comparisons.$Bobble.$__Rep0BallDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {var $proj__3=
           _e_($proj__1);
          var $proj__45=
           _e_($proj__3._1);
          var $proj__98=
           _e_($proj__3._2);
          var $__=
           new _A_($Comparisons.$Bobble.$Ball__,[$proj__45._1,$proj__45._2,$proj__98._1,$proj__98._2]);
          return $__;});
$Comparisons.$Bobble.$__Rep0BallDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__7=
           new _A_($UHC.$Base.$K1__,[$x2._4]);
          var $__8=
           new _A_($UHC.$Base.$M1__,[$__7]);
          var $__9=
           new _A_($UHC.$Base.$K1__,[$x2._3]);
          var $__10=
           new _A_($UHC.$Base.$M1__,[$__9]);
          var $__11=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__10,$__8]);
          var $__12=
           new _A_($UHC.$Base.$K1__,[$x2._2]);
          var $__13=
           new _A_($UHC.$Base.$M1__,[$__12]);
          var $__14=
           new _A_($UHC.$Base.$K1__,[$x2._1]);
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
$Comparisons.$Bobble.$__Rep0BallNEW312UNQ371SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($Comparisons.$Bobble.$__Rep0BallNEW314UNQ372EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$Comparisons.$Bobble.$__Rep0BallNEW314UNQ372EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS73__371__0,[$__]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Bobble.$__Rep0BallDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$Comparisons.$Bobble.$__Rep0BallDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$Comparisons.$Bobble.$__Rep0BallUNQ371SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$__Rep0BallNEW312UNQ371SDCGENRepresentable0,[$Comparisons.$Bobble.$__Rep0BallUNQ371SDCGENRepresentable0]);}),[]);
$Comparisons.$Bobble.$__Rep0BallGENRepresentable0=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$__Rep0BallUNQ371SDCGENRepresentable0;}),[]);
$Comparisons.$Bobble.$collideWith=
 new _F_(function($p,$__)
         {var $__3=
           _e_($__);
          var $__8=
           new _A_($UHC.$Base.$packedStringToInteger,["2"]);
          var $__9=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__8]);
          var $__10=
           new _A_($UHC.$Base.$_5e,[$UHC.$Base.$Num__DCT73__101__0,$UHC.$Base.$Integral__DCT73__143__0,25,$__9]);
          var $__11=
           new _A_($UHC.$Base.$packedStringToInteger,["2"]);
          var $__12=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__11]);
          var $__13=
           new _A_($Comparisons.$Bobble.$y,[$p]);
          var $__14=
           new _A_($UHC.$Base.$_2d,[$UHC.$Base.$Num__DCT73__101__0,$__13,$__3._2]);
          var $__15=
           new _A_($UHC.$Base.$_5e,[$UHC.$Base.$Num__DCT73__101__0,$UHC.$Base.$Integral__DCT73__143__0,$__14,$__12]);
          var $__16=
           new _A_($UHC.$Base.$packedStringToInteger,["2"]);
          var $__17=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__134__0,$__16]);
          var $__18=
           new _A_($Comparisons.$Bobble.$x,[$p]);
          var $__19=
           new _A_($UHC.$Base.$_2d,[$UHC.$Base.$Num__DCT73__101__0,$__18,$__3._1]);
          var $__20=
           new _A_($UHC.$Base.$_5e,[$UHC.$Base.$Num__DCT73__101__0,$UHC.$Base.$Integral__DCT73__143__0,$__19,$__17]);
          var $__21=
           new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$__20,$__15]);
          var $__22=
           new _A_($UHC.$Base.$_3c,[$UHC.$Base.$Ord__DCT73__91__0,$__21,$__10]);
          var $__23=
           _e_($__22);
          var $__swJSW42__0;
          switch($__23._tag_)
           {case 0:
             var $__24=
              new _A_($Comparisons.$Bobble.$Ball__,[$__3._1,$__3._2,$__3._3,$__3._4]);
             $__swJSW42__0=
              $__24;
             break;
            case 1:
             var $__25=
              new _A_($UHC.$Base.$negate,[$UHC.$Base.$Num__DCT73__168__0,$__3._4]);
             var $__26=
              new _A_($Comparisons.$Bobble.$Ball__,[$__3._1,$__3._2,$__25,$__3._3]);
             $__swJSW42__0=
              $__26;
             break;}
          return $__swJSW42__0;});
$Comparisons.$Bobble.$collideB=
 new _F_(function($p1,$p2,$b)
         {var $__=
           new _A_($Comparisons.$Bobble.$collideWith,[$p2,$b]);
          var $__5=
           new _A_($Comparisons.$Bobble.$collideWith,[$p1]);
          return new _A_($UHC.$Base.$_24,[$__5,$__]);});
$Comparisons.$Bobble.$collide=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          var $__6=
           new _A_($Comparisons.$Bobble.$collideB,[$__2._1,$__2._2,$__2._3]);
          var $__7=
           new _A_($Comparisons.$Bobble.$collideP,[$__2._2]);
          var $__8=
           new _A_($Comparisons.$Bobble.$collideP,[$__2._1]);
          var $__9=
           new _A_($Comparisons.$Bobble.$Game__,[$__8,$__7,$__6]);
          return $__9;});
$Comparisons.$Bobble.$moveB=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          var $__7=
           new _A_($UHC.$Base.$packedStringToInteger,["10"]);
          var $__8=
           new _A_($UHC.$Base.$packedStringToInteger,["1"]);
          var $__9=
           new _A_($UHC.$Base.$_3a_25,[$__8,$__7]);
          var $__10=
           new _A_($UHC.$Base.$fromRational,[$UHC.$Base.$Fractional__DCT73__192__0,$__9]);
          var $__11=
           new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__168__0,$__2._4,$__10]);
          var $__12=
           new _A_($UHC.$Base.$round,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0,$__2._4]);
          var $__13=
           new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$__2._2,$__12]);
          var $__14=
           new _A_($UHC.$Base.$round,[$UHC.$Base.$RealFrac__DCT73__225__0,$UHC.$Base.$Integral__DCT73__110__0,$__2._3]);
          var $__15=
           new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$__2._1,$__14]);
          var $__16=
           new _A_($Comparisons.$Bobble.$Ball__,[$__15,$__13,$__2._3,$__11]);
          return $__16;});
$Comparisons.$Bobble.$__17__770__0=
 new _F_(function($b,$p1,$p2,$i)
         {var $__=
           new _A_($UHC.$Base.$_3e,[$UHC.$Base.$Ord__DCT73__91__0,$i,40]);
          var $__6=
           _e_($__);
          var $__swJSW45__0;
          switch($__6._tag_)
           {case 0:
             var $__7=
              new _A_($Comparisons.$Bobble.$moveB,[$b]);
             var $__8=
              new _A_($Comparisons.$Bobble.$moveP,[$p2,$i]);
             var $__9=
              new _A_($UHC.$Base.$_24,[$Comparisons.$Bobble.$gravitate,$__8]);
             var $__10=
              new _A_($UHC.$Base.$negate,[$UHC.$Base.$Num__DCT73__101__0,1]);
             var $__11=
              new _A_($Comparisons.$Bobble.$moveP,[$p1,$__10]);
             var $__12=
              new _A_($UHC.$Base.$_24,[$Comparisons.$Bobble.$gravitate,$__11]);
             var $__13=
              new _A_($Comparisons.$Bobble.$Game__,[$__12,$__9,$__7]);
             $__swJSW45__0=
              $__13;
             break;
            case 1:
             var $__14=
              new _A_($Comparisons.$Bobble.$moveB,[$b]);
             var $__15=
              new _A_($UHC.$Base.$negate,[$UHC.$Base.$Num__DCT73__101__0,1]);
             var $__16=
              new _A_($Comparisons.$Bobble.$moveP,[$p2,$__15]);
             var $__17=
              new _A_($UHC.$Base.$_24,[$Comparisons.$Bobble.$gravitate,$__16]);
             var $__18=
              new _A_($Comparisons.$Bobble.$moveP,[$p1,$i]);
             var $__19=
              new _A_($UHC.$Base.$_24,[$Comparisons.$Bobble.$gravitate,$__18]);
             var $__20=
              new _A_($Comparisons.$Bobble.$Game__,[$__19,$__17,$__14]);
             $__swJSW45__0=
              $__20;
             break;}
          return $__swJSW45__0;});
$Comparisons.$Bobble.$move=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return new _A_($Comparisons.$Bobble.$__17__770__0,[$__2._3,$__2._1,$__2._2]);});
$Comparisons.$Bobble.$reset=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          var $__6=
           new _A_($UHC.$Base.$packedStringToInteger,["1"]);
          var $__7=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__6]);
          var $__8=
           new _A_($UHC.$Base.$packedStringToInteger,["3"]);
          var $__9=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__8]);
          var $__10=
           new _A_($Comparisons.$Bobble.$Ball__,[350,50,$__9,$__7]);
          var $__11=
           new _A_($Comparisons.$Bobble.$Game__,[$__2._1,$__2._2,$__10]);
          return $__11;});
$Comparisons.$Bobble.$scoreG=
 new _F_(function($g)
         {var $g2=
           _e_($g);
          var $__6=
           _e_($g2._3);
          var $__11=
           new _A_($UHC.$Base.$_3e,[$UHC.$Base.$Ord__DCT73__91__0,$__6._2,350]);
          var $__12=
           _e_($__11);
          var $__swJSW50__0;
          switch($__12._tag_)
           {case 0:
             $__swJSW50__0=
              $g2;
             break;
            case 1:
             var $__13=
              new _A_($UHC.$Base.$_3c,[$UHC.$Base.$Ord__DCT73__91__0,$__6._1,375]);
             var $__14=
              new _A_($Comparisons.$Bobble.$scoreP,[$__13,$g2]);
             var $__15=
              new _A_($UHC.$Base.$_24,[$Comparisons.$Bobble.$reset,$__14]);
             $__swJSW50__0=
              $__15;
             break;}
          return $__swJSW50__0;});
$Comparisons.$Bobble.$__17__855__0=
 new _F_(function($g,$context,$keys,$__)
         {var $__5=
           new _A_($Comparisons.$Bobble.$__17__861NEW397,[$g,$context,$keys]);
          var $__6=
           new _A_($Comparisons.$Bobble.$drawBackground,[$context]);
          return new _A_($UHC.$Base.$_3e_3e,[$UHC.$Base.$Monad__DCT73__341__0,$__6,$__5]);});
$Comparisons.$Bobble.$__17__861NEW397=
 new _F_(function($g,$context,$keys)
         {var $__=
           new _A_($Melchior.$Control.$takes,[$keys]);
          var $__5=
           new _A_($Comparisons.$Bobble.$move,[$g,$__]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Comparisons.$Bobble.$collide,$__5]);
          var $__7=
           new _A_($UHC.$Base.$_24,[$Comparisons.$Bobble.$scoreG,$__6]);
          var $__8=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$__8,$__7]);
          var $__10=
           new _A_($Comparisons.$Bobble.$_24okUNQ634,[$context,$keys]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__9,$__10]);});
$Comparisons.$Bobble.$_24okUNQ634=
 new _F_(function($context,$keys,$_24x)
         {var $__=
           new _A_($Comparisons.$Bobble.$__17__869NEW402,[$context,$keys,$_24x]);
          var $__5=
           new _A_($Comparisons.$Bobble.$drawGameElements,[$_24x,$context]);
          return new _A_($UHC.$Base.$_3e_3e,[$UHC.$Base.$Monad__DCT73__341__0,$__5,$__]);});
$Comparisons.$Bobble.$__17__869NEW402=
 new _F_(function($context,$keys,$_24x)
         {var $__=
           new _A_($Comparisons.$Bobble.$play,[$_24x,$context,$keys]);
          var $io=
           new _A_($Comparisons.$Bobble.$ioNEW407UNQ639,[$__]);
          return $io;});
$Comparisons.$Bobble.$ioNEW407UNQ639=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2._1;});
$Comparisons.$Bobble.$play=
 new _F_(function($g,$context,$keys)
         {var $__=
           new _A_($Comparisons.$Bobble.$frame,[$UHC.$Base.$Num__DCT73__101__0]);
          var $__5=
           new _A_($Melchior.$Time.$after,[$__]);
          var $__6=
           new _A_($Comparisons.$Bobble.$__17__855__0,[$g,$context,$keys]);
          return new _A_($Melchior.$Control.$terminate,[$__5,$__6]);});
$Comparisons.$Bobble.$_24okUNQ649=
 new _F_(function($_24x)
         {var $__=
           new _A_($Melchior.$Dom.$Drawing.$contextOf,[$_24x]);
          var $__3=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT19__1__0]);
          var $__4=
           new _A_($UHC.$Base.$_24,[$__3,$__]);
          var $__5=
           new _A_($Comparisons.$Bobble.$_24okUNQ670,[$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT19__1__0,$__4,$__5]);});
$Comparisons.$Bobble.$_24okUNQ670=
 new _F_(function($_24x,$_24x2)
         {var $__=
           new _A_($UHC.$Base.$packedStringToInteger,["1"]);
          var $__4=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToInteger,["3"]);
          var $__6=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__5]);
          var $__7=
           new _A_($Comparisons.$Bobble.$Ball__,[350,50,$__6,$__4]);
          var $__8=
           new _A_($UHC.$Base.$packedStringToInteger,["0"]);
          var $__9=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__8]);
          var $__10=
           new _A_($UHC.$Base.$packedStringToInteger,["0"]);
          var $__11=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__10]);
          var $__12=
           new _A_($Comparisons.$Bobble.$Player__,[650,350,$__11,$__9,0]);
          var $__13=
           new _A_($UHC.$Base.$packedStringToInteger,["0"]);
          var $__14=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__13]);
          var $__15=
           new _A_($UHC.$Base.$packedStringToInteger,["0"]);
          var $__16=
           new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT73__168__0,$__15]);
          var $__17=
           new _A_($Comparisons.$Bobble.$Player__,[50,350,$__16,$__14,0]);
          var $__18=
           new _A_($Comparisons.$Bobble.$Game__,[$__17,$__12,$__7]);
          var $__19=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT19__1__0]);
          var $__20=
           new _A_($UHC.$Base.$_24,[$__19,$__18]);
          var $__21=
           new _A_($Comparisons.$Bobble.$_24okUNQ678,[$_24x,$_24x2]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT19__1__0,$__20,$__21]);});
$Comparisons.$Bobble.$_24okUNQ678=
 new _F_(function($_24x,$_24x2,$_24x3)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT19__7__0,$Melchior.$Dom.$document]);
          var $__5=
           new _A_($Melchior.$EventSources.$Keyboard.$keyDownSignal,[$__]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Melchior.$EventSources.$Keyboard.$keyCode,$__5]);
          var $__7=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT19__1__0]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$__7,$__6]);
          var $__9=
           new _A_($Comparisons.$Bobble.$_24okUNQ685,[$_24x,$_24x2,$_24x3]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT19__1__0,$__8,$__9]);});
$Comparisons.$Bobble.$_24okUNQ685=
 new _F_(function($_24x,$_24x2,$_24x3,$_24x4)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT19__10__0,$_24x]);
          var $__6=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT19__1__0]);
          var $__7=
           new _A_($UHC.$Base.$_24,[$__6,$__]);
          var $__8=
           new _A_($Comparisons.$Bobble.$play,[$_24x3,$_24x2,$_24x4]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT19__1__0,$__8,$__7]);});
$Comparisons.$Bobble.$setupBobble=
 new _F_(function($__,$html)
         {var $__3=
           new _A_($Melchior.$Dom.$Selectors.$from,[$__]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["canvas"]);
          var $__5=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT20__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT20__7__0,$__4]);
          var $__6=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT20__11__0,$__5,$__3]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$canvases,[$Melchior.$Dom.$Selectors.$Nodes__DCT20__4__0]);
          var $__8=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT20__11__0,$__7,$__6]);
          var $__9=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__8,$html]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$assuredly,$__9]);
          var $__11=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__10]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT19__1__0,$__11,$Comparisons.$Bobble.$_24okUNQ649]);});
$Comparisons.$Bobble.$__17__999=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$setupBobble,[$Melchior.$Dom.$Selectors.$Nodes__DCT20__7__0]);}),[]);
$Comparisons.$Bobble.$main=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Control.$runDom,[$Comparisons.$Bobble.$__17__999]);}),[]);
$Comparisons.$Bobble.$_24S__yDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["y"]);});
$Comparisons.$Bobble.$_24S__yNEW468UNQ303SDCGENSelector=
 new _F_(function($_24S__y)
         {var $_24S__y2=
           new _A_($Comparisons.$Bobble.$_24S__yNEW470UNQ304EVLSDCGENSelector,[$_24S__y]);
          return $_24S__y2;});
$Comparisons.$Bobble.$_24S__yNEW470UNQ304EVLSDCGENSelector=
 new _F_(function($_24S__y)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS73__353__0,[$_24S__y]));
          var $__4=
           {_tag_:0,_1:$Comparisons.$Bobble.$_24S__yDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$Comparisons.$Bobble.$_24S__yUNQ303SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$_24S__yNEW468UNQ303SDCGENSelector,[$Comparisons.$Bobble.$_24S__yUNQ303SDCGENSelector]);}),[]);
$Comparisons.$Bobble.$_24S__yGENSelector=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$_24S__yUNQ303SDCGENSelector;}),[]);
$Comparisons.$Bobble.$_24S__xDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["x"]);});
$Comparisons.$Bobble.$_24S__xNEW476UNQ298SDCGENSelector=
 new _F_(function($_24S__x)
         {var $_24S__x2=
           new _A_($Comparisons.$Bobble.$_24S__xNEW478UNQ299EVLSDCGENSelector,[$_24S__x]);
          return $_24S__x2;});
$Comparisons.$Bobble.$_24S__xNEW478UNQ299EVLSDCGENSelector=
 new _F_(function($_24S__x)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS73__353__0,[$_24S__x]));
          var $__4=
           {_tag_:0,_1:$Comparisons.$Bobble.$_24S__xDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$Comparisons.$Bobble.$_24S__xUNQ298SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$_24S__xNEW476UNQ298SDCGENSelector,[$Comparisons.$Bobble.$_24S__xUNQ298SDCGENSelector]);}),[]);
$Comparisons.$Bobble.$_24S__xGENSelector=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$_24S__xUNQ298SDCGENSelector;}),[]);
$Comparisons.$Bobble.$_24S__vyDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["vy"]);});
$Comparisons.$Bobble.$_24S__vyNEW484UNQ293SDCGENSelector=
 new _F_(function($_24S__vy)
         {var $_24S__vy2=
           new _A_($Comparisons.$Bobble.$_24S__vyNEW486UNQ294EVLSDCGENSelector,[$_24S__vy]);
          return $_24S__vy2;});
$Comparisons.$Bobble.$_24S__vyNEW486UNQ294EVLSDCGENSelector=
 new _F_(function($_24S__vy)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS73__353__0,[$_24S__vy]));
          var $__4=
           {_tag_:0,_1:$Comparisons.$Bobble.$_24S__vyDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$Comparisons.$Bobble.$_24S__vyUNQ293SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$_24S__vyNEW484UNQ293SDCGENSelector,[$Comparisons.$Bobble.$_24S__vyUNQ293SDCGENSelector]);}),[]);
$Comparisons.$Bobble.$_24S__vyGENSelector=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$_24S__vyUNQ293SDCGENSelector;}),[]);
$Comparisons.$Bobble.$_24S__vxDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["vx"]);});
$Comparisons.$Bobble.$_24S__vxNEW492UNQ288SDCGENSelector=
 new _F_(function($_24S__vx)
         {var $_24S__vx2=
           new _A_($Comparisons.$Bobble.$_24S__vxNEW494UNQ289EVLSDCGENSelector,[$_24S__vx]);
          return $_24S__vx2;});
$Comparisons.$Bobble.$_24S__vxNEW494UNQ289EVLSDCGENSelector=
 new _F_(function($_24S__vx)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS73__353__0,[$_24S__vx]));
          var $__4=
           {_tag_:0,_1:$Comparisons.$Bobble.$_24S__vxDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$Comparisons.$Bobble.$_24S__vxUNQ288SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$_24S__vxNEW492UNQ288SDCGENSelector,[$Comparisons.$Bobble.$_24S__vxUNQ288SDCGENSelector]);}),[]);
$Comparisons.$Bobble.$_24S__vxGENSelector=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$_24S__vxUNQ288SDCGENSelector;}),[]);
$Comparisons.$Bobble.$_24S__scoreDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["score"]);});
$Comparisons.$Bobble.$_24S__scoreNEW500UNQ283SDCGENSelector=
 new _F_(function($_24S__score)
         {var $_24S__score2=
           new _A_($Comparisons.$Bobble.$_24S__scoreNEW502UNQ284EVLSDCGENSelector,[$_24S__score]);
          return $_24S__score2;});
$Comparisons.$Bobble.$_24S__scoreNEW502UNQ284EVLSDCGENSelector=
 new _F_(function($_24S__score)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS73__353__0,[$_24S__score]));
          var $__4=
           {_tag_:0,_1:$Comparisons.$Bobble.$_24S__scoreDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$Comparisons.$Bobble.$_24S__scoreUNQ283SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$_24S__scoreNEW500UNQ283SDCGENSelector,[$Comparisons.$Bobble.$_24S__scoreUNQ283SDCGENSelector]);}),[]);
$Comparisons.$Bobble.$_24S__scoreGENSelector=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$_24S__scoreUNQ283SDCGENSelector;}),[]);
$Comparisons.$Bobble.$_24D__PlayerDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Comparisons.Bobble"]);});
$Comparisons.$Bobble.$_24D__PlayerDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Player"]);});
$Comparisons.$Bobble.$_24D__PlayerNEW509UNQ267SDCGENDatatype=
 new _F_(function($_24D__Player)
         {var $_24D__Player2=
           new _A_($Comparisons.$Bobble.$_24D__PlayerNEW511UNQ268EVLSDCGENDatatype,[$_24D__Player]);
          return $_24D__Player2;});
$Comparisons.$Bobble.$_24D__PlayerNEW511UNQ268EVLSDCGENDatatype=
 new _F_(function($_24D__Player)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS73__352__0,[$_24D__Player]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Bobble.$_24D__PlayerDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$Comparisons.$Bobble.$_24D__PlayerDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$Comparisons.$Bobble.$_24D__PlayerUNQ267SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$_24D__PlayerNEW509UNQ267SDCGENDatatype,[$Comparisons.$Bobble.$_24D__PlayerUNQ267SDCGENDatatype]);}),[]);
$Comparisons.$Bobble.$_24D__PlayerGENDatatype=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$_24D__PlayerUNQ267SDCGENDatatype;}),[]);
$Comparisons.$Bobble.$_24D__GameDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Comparisons.Bobble"]);});
$Comparisons.$Bobble.$_24D__GameDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Game"]);});
$Comparisons.$Bobble.$_24D__GameNEW518UNQ463SDCGENDatatype=
 new _F_(function($_24D__Game)
         {var $_24D__Game2=
           new _A_($Comparisons.$Bobble.$_24D__GameNEW520UNQ464EVLSDCGENDatatype,[$_24D__Game]);
          return $_24D__Game2;});
$Comparisons.$Bobble.$_24D__GameNEW520UNQ464EVLSDCGENDatatype=
 new _F_(function($_24D__Game)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS73__352__0,[$_24D__Game]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Bobble.$_24D__GameDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$Comparisons.$Bobble.$_24D__GameDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$Comparisons.$Bobble.$_24D__GameUNQ463SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$_24D__GameNEW518UNQ463SDCGENDatatype,[$Comparisons.$Bobble.$_24D__GameUNQ463SDCGENDatatype]);}),[]);
$Comparisons.$Bobble.$_24D__GameGENDatatype=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$_24D__GameUNQ463SDCGENDatatype;}),[]);
$Comparisons.$Bobble.$_24D__BallDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Comparisons.Bobble"]);});
$Comparisons.$Bobble.$_24D__BallDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Ball"]);});
$Comparisons.$Bobble.$_24D__BallNEW527UNQ412SDCGENDatatype=
 new _F_(function($_24D__Ball)
         {var $_24D__Ball2=
           new _A_($Comparisons.$Bobble.$_24D__BallNEW529UNQ413EVLSDCGENDatatype,[$_24D__Ball]);
          return $_24D__Ball2;});
$Comparisons.$Bobble.$_24D__BallNEW529UNQ413EVLSDCGENDatatype=
 new _F_(function($_24D__Ball)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS73__352__0,[$_24D__Ball]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Bobble.$_24D__BallDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$Comparisons.$Bobble.$_24D__BallDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$Comparisons.$Bobble.$_24D__BallUNQ412SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$_24D__BallNEW527UNQ412SDCGENDatatype,[$Comparisons.$Bobble.$_24D__BallUNQ412SDCGENDatatype]);}),[]);
$Comparisons.$Bobble.$_24D__BallGENDatatype=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$_24D__BallUNQ412SDCGENDatatype;}),[]);
$Comparisons.$Bobble.$_24C__PlayerDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Player"]);});
$Comparisons.$Bobble.$_24C__PlayerDFLUHC_2eBase_2econIsRecordGENConstructor=
 new _F_(function($x)
         {return $UHC.$Base.$True__;});
$Comparisons.$Bobble.$_24C__PlayerNEW536UNQ274SDCGENConstructor=
 new _F_(function($_24C__Player)
         {var $_24C__Player2=
           new _A_($Comparisons.$Bobble.$_24C__PlayerNEW538UNQ275EVLSDCGENConstructor,[$_24C__Player]);
          return $_24C__Player2;});
$Comparisons.$Bobble.$_24C__PlayerNEW538UNQ275EVLSDCGENConstructor=
 new _F_(function($_24C__Player)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS73__355__0,[$_24C__Player]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Comparisons.$Bobble.$_24C__PlayerDFLUHC_2eBase_2econIsRecordGENConstructor,_3:$Constructor__._3,_4:$Comparisons.$Bobble.$_24C__PlayerDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$Comparisons.$Bobble.$_24C__PlayerUNQ274SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$_24C__PlayerNEW536UNQ274SDCGENConstructor,[$Comparisons.$Bobble.$_24C__PlayerUNQ274SDCGENConstructor]);}),[]);
$Comparisons.$Bobble.$_24C__PlayerGENConstructor=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$_24C__PlayerUNQ274SDCGENConstructor;}),[]);
$Comparisons.$Bobble.$_24C__GameDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Game"]);});
$Comparisons.$Bobble.$_24C__GameNEW544UNQ470SDCGENConstructor=
 new _F_(function($_24C__Game)
         {var $_24C__Game2=
           new _A_($Comparisons.$Bobble.$_24C__GameNEW546UNQ471EVLSDCGENConstructor,[$_24C__Game]);
          return $_24C__Game2;});
$Comparisons.$Bobble.$_24C__GameNEW546UNQ471EVLSDCGENConstructor=
 new _F_(function($_24C__Game)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS73__355__0,[$_24C__Game]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$Comparisons.$Bobble.$_24C__GameDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$Comparisons.$Bobble.$_24C__GameUNQ470SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$_24C__GameNEW544UNQ470SDCGENConstructor,[$Comparisons.$Bobble.$_24C__GameUNQ470SDCGENConstructor]);}),[]);
$Comparisons.$Bobble.$_24C__GameGENConstructor=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$_24C__GameUNQ470SDCGENConstructor;}),[]);
$Comparisons.$Bobble.$_24C__BallDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Ball"]);});
$Comparisons.$Bobble.$_24C__BallNEW552UNQ419SDCGENConstructor=
 new _F_(function($_24C__Ball)
         {var $_24C__Ball2=
           new _A_($Comparisons.$Bobble.$_24C__BallNEW554UNQ420EVLSDCGENConstructor,[$_24C__Ball]);
          return $_24C__Ball2;});
$Comparisons.$Bobble.$_24C__BallNEW554UNQ420EVLSDCGENConstructor=
 new _F_(function($_24C__Ball)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS73__355__0,[$_24C__Ball]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$Comparisons.$Bobble.$_24C__BallDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$Comparisons.$Bobble.$_24C__BallUNQ419SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Bobble.$_24C__BallNEW552UNQ419SDCGENConstructor,[$Comparisons.$Bobble.$_24C__BallUNQ419SDCGENConstructor]);}),[]);
$Comparisons.$Bobble.$_24C__BallGENConstructor=
 new _A_(new _F_(function()
                 {return $Comparisons.$Bobble.$_24C__BallUNQ419SDCGENConstructor;}),[]);
var $main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Run.$ehcRunMain,[$Comparisons.$Bobble.$main]);}),[]);
_e_(new _A_($main,[[]]));
