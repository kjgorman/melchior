// Comparisons.Sussed
var $Comparisons=
 ($Comparisons ? $Comparisons : {});
$Comparisons.$Sussed=
 ($Comparisons.$Sussed ? $Comparisons.$Sussed : {});
$Comparisons.$Sussed.$pairFoldUNQ77=
 new _F_(function($x1,$x12)
         {var $__=
           _e_($x12);
          var $__swJSW0__0;
          switch($__._tag_)
           {case 0:
             var $__6=
              _e_($__._2);
             var $__swJSW1__0;
             switch($__6._tag_)
              {case 0:
                var $__9=
                 new _A_($Comparisons.$Sussed.$pairFoldUNQ77,[$x1,$__6._2]);
                var $__10=
                 new _A_($x1,[$__._1,$__6._1]);
                var $__11=
                 new _A_($UHC.$Base.$_3a,[$__10,$__9]);
                $__swJSW1__0=
                 $__11;
                break;
               case 1:
                $__swJSW1__0=
                 $x12;
                break;}
             $__swJSW0__0=
              $__swJSW1__0;
             break;
            case 1:
             $__swJSW0__0=
              $x12;
             break;}
          return $__swJSW0__0;});
$Comparisons.$Sussed.$treeFold=
 new _F_(function($x1,$x2,$x3)
         {var $x34=
           _e_($x3);
          var $__swJSW2__0;
          switch($x34._tag_)
           {case 0:
             var $__7=
              _e_($x34._2);
             var $__swJSW3__0;
             switch($__7._tag_)
              {case 0:
                var $__10=
                 new _A_($Comparisons.$Sussed.$pairFoldUNQ77,[$x1,$__7._2]);
                var $__11=
                 new _A_($x1,[$x34._1,$__7._1]);
                var $__12=
                 new _A_($UHC.$Base.$_3a,[$__11,$__10]);
                $__swJSW3__0=
                 new _A_($Comparisons.$Sussed.$treeFold,[$x1,$x2,$__12]);
                break;
               case 1:
                $__swJSW3__0=
                 $x34._1;
                break;}
             $__swJSW2__0=
              $__swJSW3__0;
             break;
            case 1:
             $__swJSW2__0=
              $x2;
             break;}
          return $__swJSW2__0;});
$Comparisons.$Sussed.$__20__41__0=
 new _F_(function($__,$pivot,$_24x__17__12__0)
         {return new _A_($UHC.$Base.$_3c,[$__,$_24x__17__12__0,$pivot]);});
$Comparisons.$Sussed.$__20__49__0=
 new _F_(function($__,$pivot,$_24x__17__14__0)
         {return new _A_($UHC.$Base.$_3e_3d,[$__,$_24x__17__14__0,$pivot]);});
$Comparisons.$Sussed.$qsort=
 new _F_(function($__,$x1)
         {var $__3=
           _e_($x1);
          var $__swJSW4__0;
          switch($__3._tag_)
           {case 0:
             var $__6=
              new _A_($Comparisons.$Sussed.$__20__41__0,[$__,$__3._1]);
             var $lesser=
              new _A_($UHC.$Base.$filter,[$__6,$__3._2]);
             var $__8=
              new _A_($Comparisons.$Sussed.$__20__49__0,[$__,$__3._1]);
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
             $__swJSW4__0=
              new _A_($UHC.$Base.$_2b_2b,[$__13,$__12]);
             break;
            case 1:
             $__swJSW4__0=
              $UHC.$Base.$_5b_5d;
             break;}
          return $__swJSW4__0;});
$Comparisons.$Sussed.$__18__698__0NEW23UNQ127CCN=
 new _F_(function($__,$x1,$x2)
         {var $y=
           new _A_($Comparisons.$Sussed.$yNEW27UNQ128CCN,[$__,$x1,$x2]);
          var $x25=
           _e_($x2);
          var $__swJSW5__0;
          switch($x25._tag_)
           {case 0:
             $__swJSW5__0=
              $y;
             break;
            case 1:
             $__swJSW5__0=
              $x1;
             break;}
          return $__swJSW5__0;});
$Comparisons.$Sussed.$yNEW27UNQ128CCN=
 new _F_(function($__,$x1,$x2)
         {var $x14=
           _e_($x1);
          var $__swJSW6__0;
          switch($x14._tag_)
           {case 0:
             var $x27=
              _e_($x2);
             var $__swJSW7__0;
             switch($x27._tag_)
              {case 0:
                var $__10=
                 new _A_($UHC.$Base.$_3c,[$__,$x14._1,$x27._1]);
                var $__11=
                 _e_($__10);
                var $__swJSW8__0;
                switch($__11._tag_)
                 {case 0:
                   var $__12=
                    new _A_($UHC.$Base.$_3a,[$x14._1,$x14._2]);
                   var $__13=
                    new _A_($Comparisons.$Sussed.$merge,[$__,$x27._2,$__12]);
                   var $__14=
                    new _A_($UHC.$Base.$_3a,[$x27._1,$__13]);
                   $__swJSW8__0=
                    $__14;
                   break;
                  case 1:
                   var $__15=
                    new _A_($UHC.$Base.$_3a,[$x27._1,$x27._2]);
                   var $__16=
                    new _A_($Comparisons.$Sussed.$merge,[$__,$x14._2,$__15]);
                   var $__17=
                    new _A_($UHC.$Base.$_3a,[$x14._1,$__16]);
                   $__swJSW8__0=
                    $__17;
                   break;}
                $__swJSW7__0=
                 $__swJSW8__0;
                break;
               case 1:
                $__swJSW7__0=
                 $UHC.$Base.$undefined;
                break;}
             $__swJSW6__0=
              $__swJSW7__0;
             break;
            case 1:
             $__swJSW6__0=
              $UHC.$Base.$undefined;
             break;}
          return $__swJSW6__0;});
$Comparisons.$Sussed.$merge=
 new _F_(function($__,$x1,$x2)
         {var $__4=
           new _A_($Comparisons.$Sussed.$__18__698__0NEW23UNQ127CCN,[$__,$x1,$x2]);
          var $x15=
           _e_($x1);
          var $__swJSW9__0;
          switch($x15._tag_)
           {case 0:
             $__swJSW9__0=
              $__4;
             break;
            case 1:
             $__swJSW9__0=
              $x2;
             break;}
          return $__swJSW9__0;});
$Comparisons.$Sussed.$__18__923__0NEW44UNQ155CCN=
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
           new _A_($Comparisons.$Sussed.$__18__923__0NEW44UNQ155CCN,[$__,$x1]);
          var $__4=
           _e_($x1);
          var $__swJSW10__0;
          switch($__4._tag_)
           {case 0:
             var $__7=
              _e_($__4._2);
             var $__swJSW11__0;
             switch($__7._tag_)
              {case 0:
                $__swJSW11__0=
                 $__3;
                break;
               case 1:
                var $__10=
                 new _A_($UHC.$Base.$_3a,[$__4._1,$UHC.$Base.$_5b_5d]);
                $__swJSW11__0=
                 $__10;
                break;}
             $__swJSW10__0=
              $__swJSW11__0;
             break;
            case 1:
             $__swJSW10__0=
              $UHC.$Base.$_5b_5d;
             break;}
          return $__swJSW10__0;});
$Comparisons.$Sussed.$stringify=
 new _A_(new _F_(function()
                 {return new _A_($Control.$Applicative.$_3c_24_3e,[$Melchior.$Control.$Functor__DCT37__0__0,$Language.$UHC.$JScript.$ECMA.$String.$jsStringToString]);}),[]);
$Comparisons.$Sussed.$_24okUNQ315=
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
                  return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Remote.$Internal.$ParserUtils.$Monad__DCT55__0__0,$__,$Comparisons.$Sussed.$_24okUNQ315]);}),[]);
$Comparisons.$Sussed.$numbers=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Remote.$Internal.$ParserUtils.$many1,[$Comparisons.$Sussed.$numberAndDelim]);}),[]);
$Comparisons.$Sussed.$stringListToNumbers=
 new _F_(function($s)
         {var $__=
           new _A_($Melchior.$Remote.$Internal.$ParserUtils.$parse,[$Comparisons.$Sussed.$numbers,$s]);
          var $__3=
           _e_($__);
          var $__swJSW12__0;
          switch($__3._tag_)
           {case 0:
             var $__6=
              new _A_($UHC.$Base.$fst,[$__3._1]);
             var $__7=
              new _A_($UHC.$Base.$read,[$UHC.$Base.$Read__DCT73__127__0]);
             var $__8=
              new _A_($UHC.$Base.$map,[$__7,$__6]);
             $__swJSW12__0=
              $__8;
             break;
            case 1:
             $__swJSW12__0=
              $UHC.$Base.$_5b_5d;
             break;}
          return $__swJSW12__0;});
$Comparisons.$Sussed.$parseToNumbers=
 new _F_(function($s)
         {var $__=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$jsStringToString,[$s]);
          return new _A_($UHC.$Base.$_24,[$Comparisons.$Sussed.$stringListToNumbers,$__]);});
$Comparisons.$Sussed.$Node__=
 new _F_(function($x1,$x2)
         {return {_tag_:1,_1:$x1,_2:$x2};});
$Comparisons.$Sussed.$heapify=
 new _F_(function($x)
         {return new _A_($Comparisons.$Sussed.$Node__,[$x,$UHC.$Base.$_5b_5d]);});
$Comparisons.$Sussed.$Nil__=
 new _A_(new _F_(function()
                 {return {_tag_:0};}),[]);
$Comparisons.$Sussed.$__Rep0HeapDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {var $proj__2=
           _e_($proj__1);
          var $__swJSW13__0;
          switch($proj__2._tag_)
           {case 0:
             var $proj__4=
              _e_($proj__2.unL1);
             $__swJSW13__0=
              $Comparisons.$Sussed.$Nil__;
             break;
            case 1:
             var $proj__6=
              _e_($proj__2.unR1);
             var $__=
              new _A_($Comparisons.$Sussed.$Node__,[$proj__6._1,$proj__6._2]);
             $__swJSW13__0=
              $__;
             break;}
          return $__swJSW13__0;});
$Comparisons.$Sussed.$__Rep0HeapDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__swJSW16__0;
          switch($x2._tag_)
           {case 0:
             var $__=
              new _A_($UHC.$Base.$M1__,[$UHC.$Base.$U1__]);
             var $__4=
              new _A_($UHC.$Base.$L1__,[$__]);
             var $__5=
              new _A_($UHC.$Base.$M1__,[$__4]);
             $__swJSW16__0=
              $__5;
             break;
            case 1:
             var $__8=
              new _A_($UHC.$Base.$K1__,[$x2._2]);
             var $__9=
              new _A_($UHC.$Base.$M1__,[$__8]);
             var $__10=
              new _A_($UHC.$Base.$K1__,[$x2._1]);
             var $__11=
              new _A_($UHC.$Base.$M1__,[$__10]);
             var $__12=
              new _A_($UHC.$Base.$_3a_2a_3a,[$__11,$__9]);
             var $__13=
              new _A_($UHC.$Base.$M1__,[$__12]);
             var $__14=
              new _A_($UHC.$Base.$R1__,[$__13]);
             var $__15=
              new _A_($UHC.$Base.$M1__,[$__14]);
             $__swJSW16__0=
              $__15;
             break;}
          return $__swJSW16__0;});
$Comparisons.$Sussed.$__Rep0HeapNEW97UNQ171SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($Comparisons.$Sussed.$__Rep0HeapNEW99UNQ172EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$Comparisons.$Sussed.$__Rep0HeapNEW99UNQ172EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS73__371__0,[$__]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Sussed.$__Rep0HeapDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$Comparisons.$Sussed.$__Rep0HeapDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$Comparisons.$Sussed.$__Rep0HeapUNQ171SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Sussed.$__Rep0HeapNEW97UNQ171SDCGENRepresentable0,[$Comparisons.$Sussed.$__Rep0HeapUNQ171SDCGENRepresentable0]);}),[]);
$Comparisons.$Sussed.$__Rep0HeapGENRepresentable0=
 new _A_(new _F_(function()
                 {return $Comparisons.$Sussed.$__Rep0HeapUNQ171SDCGENRepresentable0;}),[]);
$Comparisons.$Sussed.$__Rep1HeapDFLUHC_2eBase_2eto1GENRepresentable1=
 new _F_(function($proj__1)
         {var $proj__2=
           _e_($proj__1);
          var $__swJSW18__0;
          switch($proj__2._tag_)
           {case 0:
             var $proj__4=
              _e_($proj__2.unL1);
             $__swJSW18__0=
              $Comparisons.$Sussed.$Nil__;
             break;
            case 1:
             var $proj__6=
              _e_($proj__2.unR1);
             var $__=
              new _A_($Comparisons.$Sussed.$Node__,[$proj__6._1,$proj__6._2]);
             $__swJSW18__0=
              $__;
             break;}
          return $__swJSW18__0;});
$Comparisons.$Sussed.$__Rep1HeapDFLUHC_2eBase_2efrom1GENRepresentable1=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__swJSW21__0;
          switch($x2._tag_)
           {case 0:
             var $__=
              new _A_($UHC.$Base.$M1__,[$UHC.$Base.$U1__]);
             var $__4=
              new _A_($UHC.$Base.$L1__,[$__]);
             var $__5=
              new _A_($UHC.$Base.$M1__,[$__4]);
             $__swJSW21__0=
              $__5;
             break;
            case 1:
             var $__8=
              new _A_($UHC.$Base.$Comp1__,[$x2._2]);
             var $__9=
              new _A_($UHC.$Base.$M1__,[$__8]);
             var $__10=
              new _A_($UHC.$Base.$Par1__,[$x2._1]);
             var $__11=
              new _A_($UHC.$Base.$M1__,[$__10]);
             var $__12=
              new _A_($UHC.$Base.$_3a_2a_3a,[$__11,$__9]);
             var $__13=
              new _A_($UHC.$Base.$M1__,[$__12]);
             var $__14=
              new _A_($UHC.$Base.$R1__,[$__13]);
             var $__15=
              new _A_($UHC.$Base.$M1__,[$__14]);
             $__swJSW21__0=
              $__15;
             break;}
          return $__swJSW21__0;});
$Comparisons.$Sussed.$__Rep1HeapNEW122UNQ202SDCGENRepresentable1=
 new _F_(function($__)
         {var $__2=
           new _A_($Comparisons.$Sussed.$__Rep1HeapNEW124UNQ203EVLSDCGENRepresentable1,[$__]);
          return $__2;});
$Comparisons.$Sussed.$__Rep1HeapNEW124UNQ203EVLSDCGENRepresentable1=
 new _F_(function($__)
         {var $Representable1__=
           _e_(new _A_($UHC.$Base.$Representable1__CLS73__372__0,[$__]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Sussed.$__Rep1HeapDFLUHC_2eBase_2efrom1GENRepresentable1,_2:$Comparisons.$Sussed.$__Rep1HeapDFLUHC_2eBase_2eto1GENRepresentable1};
          return $__5;});
$Comparisons.$Sussed.$__Rep1HeapUNQ202SDCGENRepresentable1=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Sussed.$__Rep1HeapNEW122UNQ202SDCGENRepresentable1,[$Comparisons.$Sussed.$__Rep1HeapUNQ202SDCGENRepresentable1]);}),[]);
$Comparisons.$Sussed.$__Rep1HeapGENRepresentable1=
 new _A_(new _F_(function()
                 {return $Comparisons.$Sussed.$__Rep1HeapUNQ202SDCGENRepresentable1;}),[]);
$Comparisons.$Sussed.$mergeHeapUNQ261=
 new _F_(function($__,$x1,$x2)
         {var $h=
           new _A_($Comparisons.$Sussed.$hNEW130UNQ277CCN,[$__,$x1,$x2]);
          var $x25=
           _e_($x2);
          var $__swJSW23__0;
          switch($x25._tag_)
           {case 0:
             $__swJSW23__0=
              $x1;
             break;
            case 1:
             $__swJSW23__0=
              $h;
             break;}
          return $__swJSW23__0;});
$Comparisons.$Sussed.$hNEW130UNQ277CCN=
 new _F_(function($__,$x1,$x2)
         {var $x14=
           _e_($x1);
          var $__swJSW24__0;
          switch($x14._tag_)
           {case 0:
             $__swJSW24__0=
              $UHC.$Base.$undefined;
             break;
            case 1:
             var $x27=
              _e_($x2);
             var $__swJSW25__0;
             switch($x27._tag_)
              {case 0:
                $__swJSW25__0=
                 $UHC.$Base.$undefined;
                break;
               case 1:
                var $__10=
                 new _A_($UHC.$Base.$_3c,[$__,$x14._1,$x27._1]);
                var $__11=
                 _e_($__10);
                var $__swJSW26__0;
                switch($__11._tag_)
                 {case 0:
                   var $__12=
                    _e_($UHC.$Base.$otherwise);
                   var $__swJSW27__0;
                   switch($__12._tag_)
                    {case 0:
                      $__swJSW27__0=
                       $UHC.$Base.$undefined;
                      break;
                     case 1:
                      var $__13=
                       new _A_($UHC.$Base.$_3a,[$x14,$x27._2]);
                      var $__14=
                       new _A_($Comparisons.$Sussed.$Node__,[$x27._1,$__13]);
                      $__swJSW27__0=
                       $__14;
                      break;}
                   $__swJSW26__0=
                    $__swJSW27__0;
                   break;
                  case 1:
                   var $__15=
                    new _A_($UHC.$Base.$_3a,[$x27,$x14._2]);
                   var $__16=
                    new _A_($Comparisons.$Sussed.$Node__,[$x14._1,$__15]);
                   $__swJSW26__0=
                    $__16;
                   break;}
                $__swJSW25__0=
                 $__swJSW26__0;
                break;}
             $__swJSW24__0=
              $__swJSW25__0;
             break;}
          return $__swJSW24__0;});
$Comparisons.$Sussed.$mergeHeapsUNQ262=
 new _F_(function($__)
         {var $__2=
           new _A_($Comparisons.$Sussed.$mergeHeapUNQ261,[$__]);
          return new _A_($Comparisons.$Sussed.$treeFold,[$__2,$Comparisons.$Sussed.$Nil__]);});
$Comparisons.$Sussed.$flattenHeapUNQ263=
 new _F_(function($__,$x1)
         {var $__3=
           _e_($x1);
          var $__swJSW28__0;
          switch($__3._tag_)
           {case 0:
             $__swJSW28__0=
              $UHC.$Base.$_5b_5d;
             break;
            case 1:
             var $__6=
              new _A_($Comparisons.$Sussed.$mergeHeapsUNQ262,[$__,$__3._2]);
             var $__7=
              new _A_($Comparisons.$Sussed.$flattenHeapUNQ263,[$__,$__6]);
             var $__8=
              new _A_($UHC.$Base.$_3a,[$__3._1,$__7]);
             $__swJSW28__0=
              $__8;
             break;}
          return $__swJSW28__0;});
$Comparisons.$Sussed.$hsort=
 new _F_(function($__,$h)
         {var $__3=
           new _A_($UHC.$Base.$map,[$Comparisons.$Sussed.$heapify,$h]);
          var $__4=
           new _A_($Comparisons.$Sussed.$mergeHeapsUNQ262,[$__]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$__4,$__3]);
          var $__6=
           new _A_($Comparisons.$Sussed.$flattenHeapUNQ263,[$__]);
          return new _A_($UHC.$Base.$_24,[$__6,$__5]);});
$Comparisons.$Sussed.$_24okUNQ341=
 new _F_(function($__,$html,$inp,$_24x)
         {var $__5=
           new _A_($Melchior.$Dom.$Selectors.$from,[$__]);
          var $__6=
           new _A_($UHC.$Base.$packedStringToString,["merge"]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT55__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT55__7__0,$__6]);
          var $__8=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT55__11__0,$__7,$__5]);
          var $__9=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__8,$html]);
          var $__10=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__9,$Comparisons.$Sussed.$__20__452__0]);
          var $__11=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__10]);
          var $__12=
           new _A_($Comparisons.$Sussed.$_24okUNQ353,[$__,$html,$inp,$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT31__1__0,$__11,$__12]);});
$Comparisons.$Sussed.$_24okUNQ353=
 new _F_(function($__,$html,$inp,$_24x,$_24x5)
         {var $__6=
           new _A_($Melchior.$Dom.$Selectors.$from,[$__]);
          var $__7=
           new _A_($UHC.$Base.$packedStringToString,["heap"]);
          var $__8=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT55__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT55__7__0,$__7]);
          var $__9=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT55__11__0,$__8,$__6]);
          var $__10=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__9,$html]);
          var $__11=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__10,$Comparisons.$Sussed.$__20__427__0]);
          var $__12=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__11]);
          var $__13=
           new _A_($Comparisons.$Sussed.$_24okUNQ361,[$inp,$_24x,$_24x5]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT31__1__0,$__12,$__13]);});
$Comparisons.$Sussed.$_24okUNQ361=
 new _F_(function($inp,$_24x,$_24x3,$_24x4)
         {var $__=
           new _A_($Melchior.$Dom.$Html.$Renderable__DCT19__7__0,[$Melchior.$Dom.$Html.$Renderable__DCT19__2__0,$UHC.$Base.$Show__DCT73__128__0]);
          var $__6=
           new _A_($Melchior.$Dom.$Events.$ElementEvt__,[$Melchior.$Dom.$Events.$InputEvt__]);
          var $__7=
           new _A_($UHC.$Base.$packedStringToString,["string"]);
          var $__8=
           new _A_($Melchior.$Control.$Of__,[$__7]);
          var $__9=
           new _A_($Melchior.$Control.$createEventedSignal,[$Melchior.$Dom.$DomNode__DCT31__6__0,$__8,$inp,$__6]);
          var $__10=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT31__1__0]);
          var $__11=
           new _A_($UHC.$Base.$_24,[$__10,$__9]);
          var $__12=
           new _A_($Comparisons.$Sussed.$_24okUNQ383,[$inp,$_24x,$_24x3,$_24x4,$__]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT31__1__0,$__11,$__12]);});
$Comparisons.$Sussed.$_24okUNQ383=
 new _F_(function($inp,$_24x,$_24x3,$_24x4,$__,$_24x6)
         {var $__7=
           new _A_($Comparisons.$Sussed.$__20__387__0,[$inp]);
          var $__8=
           new _A_($Control.$Applicative.$_3c_24_3e,[$Melchior.$Control.$Functor__DCT37__0__0,$__7,$_24x6]);
          var $__9=
           new _A_($Melchior.$Control.$put,[$__,$_24x4,$__8]);
          var $__10=
           new _A_($Comparisons.$Sussed.$__20__372__0,[$inp]);
          var $__11=
           new _A_($Control.$Applicative.$_3c_24_3e,[$Melchior.$Control.$Functor__DCT37__0__0,$__10,$_24x6]);
          var $__12=
           new _A_($Melchior.$Control.$put,[$__,$_24x3,$__11]);
          var $__13=
           new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT31__1__0,$__12,$__9]);
          var $__14=
           new _A_($Comparisons.$Sussed.$__20__354__0,[$inp]);
          var $__15=
           new _A_($Control.$Applicative.$_3c_24_3e,[$Melchior.$Control.$Functor__DCT37__0__0,$__14,$_24x6]);
          var $__16=
           new _A_($Melchior.$Control.$put,[$__,$_24x,$__15]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT31__1__0,$__16,$__13]);});
$Comparisons.$Sussed.$__20__387__0=
 new _F_(function($inp,$__)
         {var $__3=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$value,$inp]);
          var $__4=
           new _A_($UHC.$Base.$_24,[$Comparisons.$Sussed.$parseToNumbers,$__3]);
          var $__5=
           new _A_($Comparisons.$Sussed.$hsort,[$UHC.$Base.$Ord__DCT73__91__0]);
          return new _A_($UHC.$Base.$_24,[$__5,$__4]);});
$Comparisons.$Sussed.$__20__372__0=
 new _F_(function($inp,$__)
         {var $__3=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$value,$inp]);
          var $__4=
           new _A_($UHC.$Base.$_24,[$Comparisons.$Sussed.$parseToNumbers,$__3]);
          var $__5=
           new _A_($Comparisons.$Sussed.$msort,[$UHC.$Base.$Ord__DCT73__91__0]);
          return new _A_($UHC.$Base.$_24,[$__5,$__4]);});
$Comparisons.$Sussed.$__20__354__0=
 new _F_(function($inp,$__)
         {var $__3=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$value,$inp]);
          var $__4=
           new _A_($UHC.$Base.$_24,[$Comparisons.$Sussed.$parseToNumbers,$__3]);
          var $__5=
           new _A_($Comparisons.$Sussed.$qsort,[$UHC.$Base.$Ord__DCT73__91__0]);
          return new _A_($UHC.$Base.$_24,[$__5,$__4]);});
$Comparisons.$Sussed.$__20__427__0=
 new _F_(function($m)
         {var $__=
           new _A_($Melchior.$Dom.$ensures,[$Melchior.$Dom.$DomNode__DCT31__5__0,$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$Comparisons.$Sussed.$__20__452__0=
 new _F_(function($m)
         {var $__=
           new _A_($Melchior.$Dom.$ensures,[$Melchior.$Dom.$DomNode__DCT31__5__0,$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$Comparisons.$Sussed.$__20__477__0=
 new _F_(function($m)
         {var $__=
           new _A_($Melchior.$Dom.$ensures,[$Melchior.$Dom.$DomNode__DCT31__5__0,$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$Comparisons.$Sussed.$manualSorting=
 new _F_(function($__,$html,$inp)
         {var $__4=
           new _A_($Melchior.$Dom.$Selectors.$from,[$__]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToString,["quick"]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT55__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT55__7__0,$__5]);
          var $__7=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT55__11__0,$__6,$__4]);
          var $__8=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__7,$html]);
          var $__9=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__8,$Comparisons.$Sussed.$__20__477__0]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__9]);
          var $__11=
           new _A_($Comparisons.$Sussed.$_24okUNQ341,[$__,$html,$inp]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT31__1__0,$__10,$__11]);});
$Comparisons.$Sussed.$_24okUNQ405=
 new _F_(function($html,$_24x)
         {var $__=
           new _A_($Comparisons.$Sussed.$__20__496NEW218,[$html,$_24x]);
          var $__4=
           new _A_($Comparisons.$Sussed.$manualSorting,[$Melchior.$Dom.$Selectors.$Nodes__DCT55__7__0,$html,$_24x]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT31__1__0,$__4,$__]);});
$Comparisons.$Sussed.$__20__496NEW218=
 new _F_(function($html,$_24x)
         {var $__=
           new _A_($UHC.$Base.$Show__DCT73__87__0,[$UHC.$Base.$Show__DCT73__65__0]);
          var $__4=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT55__7__0]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToString,["remote"]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT55__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT55__7__0,$__5]);
          var $__7=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT55__11__0,$__6,$__4]);
          var $__8=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__7,$html]);
          var $__9=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__8,$Comparisons.$Sussed.$__20__538__0]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__9]);
          var $__11=
           new _A_($Comparisons.$Sussed.$_24okUNQ415,[$html,$_24x,$__]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT31__1__0,$__10,$__11]);});
$Comparisons.$Sussed.$_24okUNQ415=
 new _F_(function($html,$_24x,$__,$_24x4)
         {var $__5=
           new _A_($UHC.$Base.$head,[$html]);
          var $__6=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT31__1__0]);
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
           new _A_($Melchior.$Dom.$toInput,[$Melchior.$Dom.$DomNode__DCT31__6__0,$_24x]);
          var $__13=
           new _A_($Melchior.$Control.$setValue,[$__,$__12]);
          var $__14=
           new _A_($UHC.$Base.$_24,[$__13,$__11]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT31__1__0,$__14,$__7]);});
$Comparisons.$Sussed.$__20__538__0=
 new _F_(function($m)
         {var $__=
           new _A_($Melchior.$Dom.$ensures,[$Melchior.$Dom.$DomNode__DCT31__5__0,$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$Comparisons.$Sussed.$__20__567__0=
 new _F_(function($m)
         {var $__=
           new _A_($Melchior.$Dom.$ensures,[$Melchior.$Dom.$DomNode__DCT31__6__0,$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$Comparisons.$Sussed.$setupSorting=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT55__7__0]);
          var $__3=
           new _A_($UHC.$Base.$packedStringToString,["inp"]);
          var $__4=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT55__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT55__7__0,$__3]);
          var $__5=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT55__11__0,$__4,$__]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$inputs,[$Melchior.$Dom.$Selectors.$Nodes__DCT55__4__0]);
          var $__7=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT55__11__0,$__6,$__5]);
          var $__8=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__7,$html]);
          var $__9=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__8,$Comparisons.$Sussed.$__20__567__0]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__9]);
          var $__11=
           new _A_($Comparisons.$Sussed.$_24okUNQ405,[$html]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT31__1__0,$__10,$__11]);});
$Comparisons.$Sussed.$main=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Control.$runDom,[$Comparisons.$Sussed.$setupSorting]);}),[]);
$Comparisons.$Sussed.$_24D__HeapDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Comparisons.Sussed"]);});
$Comparisons.$Sussed.$_24D__HeapDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Heap"]);});
$Comparisons.$Sussed.$_24D__HeapNEW260UNQ233SDCGENDatatype=
 new _F_(function($_24D__Heap)
         {var $_24D__Heap2=
           new _A_($Comparisons.$Sussed.$_24D__HeapNEW262UNQ234EVLSDCGENDatatype,[$_24D__Heap]);
          return $_24D__Heap2;});
$Comparisons.$Sussed.$_24D__HeapNEW262UNQ234EVLSDCGENDatatype=
 new _F_(function($_24D__Heap)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS73__352__0,[$_24D__Heap]));
          var $__5=
           {_tag_:0,_1:$Comparisons.$Sussed.$_24D__HeapDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$Comparisons.$Sussed.$_24D__HeapDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$Comparisons.$Sussed.$_24D__HeapUNQ233SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Sussed.$_24D__HeapNEW260UNQ233SDCGENDatatype,[$Comparisons.$Sussed.$_24D__HeapUNQ233SDCGENDatatype]);}),[]);
$Comparisons.$Sussed.$_24D__HeapGENDatatype=
 new _A_(new _F_(function()
                 {return $Comparisons.$Sussed.$_24D__HeapUNQ233SDCGENDatatype;}),[]);
$Comparisons.$Sussed.$_24C__NodeDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Node"]);});
$Comparisons.$Sussed.$_24C__NodeNEW268UNQ248SDCGENConstructor=
 new _F_(function($_24C__Node)
         {var $_24C__Node2=
           new _A_($Comparisons.$Sussed.$_24C__NodeNEW270UNQ249EVLSDCGENConstructor,[$_24C__Node]);
          return $_24C__Node2;});
$Comparisons.$Sussed.$_24C__NodeNEW270UNQ249EVLSDCGENConstructor=
 new _F_(function($_24C__Node)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS73__355__0,[$_24C__Node]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$Comparisons.$Sussed.$_24C__NodeDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$Comparisons.$Sussed.$_24C__NodeUNQ248SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Sussed.$_24C__NodeNEW268UNQ248SDCGENConstructor,[$Comparisons.$Sussed.$_24C__NodeUNQ248SDCGENConstructor]);}),[]);
$Comparisons.$Sussed.$_24C__NodeGENConstructor=
 new _A_(new _F_(function()
                 {return $Comparisons.$Sussed.$_24C__NodeUNQ248SDCGENConstructor;}),[]);
$Comparisons.$Sussed.$_24C__NilDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Nil"]);});
$Comparisons.$Sussed.$_24C__NilNEW276UNQ240SDCGENConstructor=
 new _F_(function($_24C__Nil)
         {var $_24C__Nil2=
           new _A_($Comparisons.$Sussed.$_24C__NilNEW278UNQ241EVLSDCGENConstructor,[$_24C__Nil]);
          return $_24C__Nil2;});
$Comparisons.$Sussed.$_24C__NilNEW278UNQ241EVLSDCGENConstructor=
 new _F_(function($_24C__Nil)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS73__355__0,[$_24C__Nil]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$Comparisons.$Sussed.$_24C__NilDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$Comparisons.$Sussed.$_24C__NilUNQ240SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($Comparisons.$Sussed.$_24C__NilNEW276UNQ240SDCGENConstructor,[$Comparisons.$Sussed.$_24C__NilUNQ240SDCGENConstructor]);}),[]);
$Comparisons.$Sussed.$_24C__NilGENConstructor=
 new _A_(new _F_(function()
                 {return $Comparisons.$Sussed.$_24C__NilUNQ240SDCGENConstructor;}),[]);
var $main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Run.$ehcRunMain,[$Comparisons.$Sussed.$main]);}),[]);
_e_(new _A_($main,[[]]));
