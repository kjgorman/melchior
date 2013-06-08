// index
var $index=
 ($index ? $index : {});
$index.$primPass=
 new _F_(function($__,$__2)
         {var $__3=
           _e_($__);
          var $__4=
           _e_($__2);
          return log($__4,$__3);});
$index.$time=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2._1;});
$index.$pass=
 new _F_(function($s)
         {var $__=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$s]);
          return new _A_($index.$primPass,[$__]);});
$index.$__22__27__0=
 new _F_(function($js)
         {var $__=
           new _A_($UHC.$Base.$packedStringToString,["\"data\""]);
          var $__3=
           new _A_($Melchior.$Remote.$Json.$getJsonString,[$__,$js]);
          var $__4=
           new _A_($Control.$Applicative.$_3c_24_3e,[$Control.$Monad.$Instances.$Functor__DCT43__0__0,$Melchior.$Dom.$hack,$Language.$UHC.$JScript.$ECMA.$String.$stringToJSString]);
          return new _A_($Control.$Applicative.$_3c_24_3e,[$UHC.$Base.$Functor__DCT73__406__0,$__4,$__3]);});
$index.$__22__22__0=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__75__0,$x,$index.$__22__27__0]);});
$index.$append=
 new _A_(new _F_(function()
                 {return new _A_($Control.$Applicative.$_3c_24_3e,[$Melchior.$Control.$Functor__DCT12__0__0,$index.$__22__22__0]);}),[]);
$index.$__22__43__0=
 new _F_(function($op,$x)
         {var $__=
           new _A_($index.$__22__48__0,[$op]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$x,$__]);});
$index.$__22__48__0=
 new _F_(function($op,$idS)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__4=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$jsStringToString,[$idS]);
          var $__5=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT42__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$__5,$__4]);
          var $__7=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT42__11__0,$__6,$__]);
          var $__8=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__7,$Melchior.$Dom.$root]);
          return new _A_($Control.$Applicative.$_3c_24_3e,[$UHC.$Base.$Functor__DCT73__340__0,$op,$__8]);});
$index.$applyById=
 new _F_(function($op)
         {var $__=
           new _A_($index.$__22__43__0,[$op]);
          return new _A_($Control.$Applicative.$_3c_24_3e,[$Melchior.$Control.$Functor__DCT12__0__0,$__]);});
$index.$clickListener=
 new _F_(function($s,$e)
         {var $__=
           new _A_($Melchior.$Dom.$Events.$MouseEvt__,[$Melchior.$Dom.$Events.$ClickEvt__]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["jsstring"]);
          var $__5=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$__4]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Melchior.$Control.$Of__,$__5]);
          return new _A_($Melchior.$Control.$createEventedSignalOf,[$Melchior.$Dom.$DomNode__DCT18__5__0,$__6,$e,$__,$s]);});
$index.$__22__88__0=
 new _F_(function($__,$el,$x)
         {var $__4=
           new _A_($Melchior.$Dom.$Html.$render,[$__,$x]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToString,["innerHTML"]);
          var $__6=
           new _A_($Melchior.$Dom.$set,[$el,$__5]);
          var $__7=
           new _A_($UHC.$Base.$_24,[$__6,$__4]);
          var $__8=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__8,$__7]);});
$index.$put=
 new _F_(function($__,$el,$s)
         {var $__4=
           new _A_($index.$__22__88__0,[$__,$el]);
          return new _A_($Melchior.$Control.$terminate,[$s,$__4]);});
$index.$__22__111=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Time.$every,[$Melchior.$Time.$second]);}),[]);
$index.$__22__104__0=
 new _F_(function($t,$acc)
         {return new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT73__101__0,$acc,1]);});
$index.$countSeconds=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Control.$foldp,[$index.$__22__104__0,0,$index.$__22__111]);}),[]);
$index.$__22__114__0=
 new _F_(function($e)
         {var $__=
           new _A_($Control.$Applicative.$_3c_24_3e,[$UHC.$Base.$Functor__DCT73__406__0,$Melchior.$Dom.$siblings,$e]);
          var $__3=
           new _A_($UHC.$Base.$packedStringToString,["hidden"]);
          var $__4=
           new _A_($Melchior.$Dom.$addClass,[$__3]);
          var $__5=
           new _A_($Melchior.$Data.$List.$map,[$__4]);
          var $__6=
           new _A_($Control.$Applicative.$_3c_24_3e,[$Control.$Monad.$Instances.$Functor__DCT43__0__0,$UHC.$Base.$head,$__5]);
          return new _A_($Control.$Applicative.$_3c_24_3e,[$UHC.$Base.$Functor__DCT73__406__0,$__6,$__]);});
$index.$hideSiblings=
 new _A_(new _F_(function()
                 {return new _A_($index.$applyById,[$index.$__22__114__0]);}),[]);
$index.$__22__133=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToString,["hidden"]);}),[]);
$index.$__22__132=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Dom.$removeClass,[$index.$__22__133]);}),[]);
$index.$__22__130=
 new _A_(new _F_(function()
                 {return new _A_($Control.$Applicative.$_3c_24_3e,[$UHC.$Base.$Functor__DCT73__406__0,$index.$__22__132]);}),[]);
$index.$showCurrent=
 new _A_(new _F_(function()
                 {return new _A_($index.$applyById,[$index.$__22__130]);}),[]);
$index.$_24okUNQ70=
 new _F_(function($x,$_24x)
         {var $__=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0,$x]);
          var $__4=
           new _A_($UHC.$Base.$concatMap,[$index.$__22__155__0,$_24x]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToString,["active"]);
          var $__6=
           new _A_($Melchior.$Dom.$removeClass,[$__5]);
          var $__7=
           new _A_($Melchior.$Data.$List.$map,[$__6]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$__7,$__4]);
          var $__9=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$__9,$__8]);
          return new _A_($UHC.$Base.$_3e_3e,[$UHC.$Base.$Monad__DCT73__341__0,$__10,$__]);});
$index.$__22__155__0=
 new _F_(function($x)
         {var $__=
           new _A_($Melchior.$Dom.$parentOf,[$x]);
          return new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$siblings,$__]);});
$index.$__22__137__0=
 new _F_(function($x)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__3=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$jsStringToString,[$x]);
          var $__4=
           new _A_($Melchior.$Dom.$Selectors.$byClass,[$Melchior.$Dom.$Selectors.$Node__DCT42__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$__4,$__3]);
          var $__6=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT42__11__0,$__5,$__]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__6,$Melchior.$Dom.$root]);
          var $__8=
           new _A_($index.$_24okUNQ70,[$x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__7,$__8]);});
$index.$rmClassFromParentSiblings=
 new _A_(new _F_(function()
                 {return new _A_($Control.$Applicative.$_3c_24_3e,[$Melchior.$Control.$Functor__DCT12__0__0,$index.$__22__137__0]);}),[]);
$index.$_24okUNQ99=
 new _F_(function($_24x)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__3=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$jsStringToString,[$_24x]);
          var $__4=
           new _A_($Melchior.$Dom.$Selectors.$byClass,[$Melchior.$Dom.$Selectors.$Node__DCT42__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$__4,$__3]);
          var $__6=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT42__11__0,$__5,$__]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__6,$Melchior.$Dom.$root]);
          var $__8=
           new _A_($index.$_24okUNQ103,[$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__7,$__8]);});
$index.$_24okUNQ103=
 new _F_(function($_24x,$_24x2)
         {var $__=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0,$_24x]);
          var $__4=
           new _A_($Melchior.$Data.$List.$map,[$index.$__22__195__0,$_24x2]);
          var $__5=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          var $__6=
           new _A_($UHC.$Base.$_24_21,[$__5,$__4]);
          return new _A_($UHC.$Base.$_3e_3e,[$UHC.$Base.$Monad__DCT73__341__0,$__6,$__]);});
$index.$__22__195__0=
 new _F_(function($y)
         {var $__=
           new _A_($Melchior.$Dom.$parentOf,[$y]);
          var $__3=
           new _A_($UHC.$Base.$packedStringToString,["active"]);
          var $__4=
           new _A_($Melchior.$Dom.$addClass,[$__3]);
          return new _A_($UHC.$Base.$_24,[$__4,$__]);});
$index.$__22__179__0=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$x,$index.$_24okUNQ99]);});
$index.$addClassTo=
 new _A_(new _F_(function()
                 {return new _A_($Control.$Applicative.$_3c_24_3e,[$Melchior.$Control.$Functor__DCT12__0__0,$index.$__22__179__0]);}),[]);
$index.$Time__=
 new _F_(function($x1)
         {return {_tag_:0,_1:$x1};});
$index.$__Rep0TimeDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {return new _A_($index.$Time__,[$proj__1]);});
$index.$__Rep0TimeDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__4=
           new _A_($UHC.$Base.$K1__,[$x2._1]);
          var $__5=
           new _A_($UHC.$Base.$M1__,[$__4]);
          var $__6=
           new _A_($UHC.$Base.$M1__,[$__5]);
          var $__7=
           new _A_($UHC.$Base.$M1__,[$__6]);
          return $__7;});
$index.$__Rep0TimeNEW94UNQ109SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($index.$__Rep0TimeNEW96UNQ110EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$index.$__Rep0TimeNEW96UNQ110EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS73__371__0,[$__]));
          var $__5=
           {_tag_:0,_1:$index.$__Rep0TimeDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$index.$__Rep0TimeDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$index.$__Rep0TimeUNQ109SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($index.$__Rep0TimeNEW94UNQ109SDCGENRepresentable0,[$index.$__Rep0TimeUNQ109SDCGENRepresentable0]);}),[]);
$index.$__Rep0TimeGENRepresentable0=
 new _A_(new _F_(function()
                 {return $index.$__Rep0TimeUNQ109SDCGENRepresentable0;}),[]);
$index.$Renderable__DCT18__4__0DFLMelchior_2eDom_2eHtml_2erender=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["</div>"]);
          var $__5=
           new _A_($UHC.$Base.$_2b_2b,[$__2._1,$__4]);
          var $__6=
           new _A_($UHC.$Base.$packedStringToString,["<div class='muted'>"]);
          var $__7=
           new _A_($UHC.$Base.$_2b_2b,[$__6,$__5]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,$__7]);
          return $__8;});
$index.$Renderable__NEW108UNQ397DCT18__4__0RDC=
 new _F_(function($Renderable__)
         {var $Renderable__2=
           new _A_($index.$Renderable__NEW110UNQ398EVLDCT18__4__0RDC,[$Renderable__]);
          return $Renderable__2;});
$index.$Renderable__NEW110UNQ398EVLDCT18__4__0RDC=
 new _F_(function($Renderable__)
         {var $Renderable__2=
           _e_(new _A_($Melchior.$Dom.$Html.$Renderable__CLS18__0__0,[$Renderable__]));
          var $__4=
           {_tag_:0,_1:$index.$Renderable__DCT18__4__0DFLMelchior_2eDom_2eHtml_2erender};
          return $__4;});
$index.$Renderable__UNQ397DCT18__4__0RDC=
 new _A_(new _F_(function()
                 {return new _A_($index.$Renderable__NEW108UNQ397DCT18__4__0RDC,[$index.$Renderable__UNQ397DCT18__4__0RDC]);}),[]);
$index.$Renderable__DCT18__4__0=
 new _A_(new _F_(function()
                 {return $index.$Renderable__UNQ397DCT18__4__0RDC;}),[]);
$index.$Renderable__DCT18__2__0DFLMelchior_2eDom_2eHtml_2erender=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["</a>"]);
          var $__5=
           new _A_($UHC.$Base.$_2b_2b,[$__2._1,$__4]);
          var $__6=
           new _A_($UHC.$Base.$packedStringToString,["<a class='link'>"]);
          var $__7=
           new _A_($UHC.$Base.$_2b_2b,[$__6,$__5]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,$__7]);
          return $__8;});
$index.$Renderable__NEW122UNQ359DCT18__2__0RDC=
 new _F_(function($Renderable__)
         {var $Renderable__2=
           new _A_($index.$Renderable__NEW124UNQ360EVLDCT18__2__0RDC,[$Renderable__]);
          return $Renderable__2;});
$index.$Renderable__NEW124UNQ360EVLDCT18__2__0RDC=
 new _F_(function($Renderable__)
         {var $Renderable__2=
           _e_(new _A_($Melchior.$Dom.$Html.$Renderable__CLS18__0__0,[$Renderable__]));
          var $__4=
           {_tag_:0,_1:$index.$Renderable__DCT18__2__0DFLMelchior_2eDom_2eHtml_2erender};
          return $__4;});
$index.$Renderable__UNQ359DCT18__2__0RDC=
 new _A_(new _F_(function()
                 {return new _A_($index.$Renderable__NEW122UNQ359DCT18__2__0RDC,[$index.$Renderable__UNQ359DCT18__2__0RDC]);}),[]);
$index.$Renderable__DCT18__2__0=
 new _A_(new _F_(function()
                 {return $index.$Renderable__UNQ359DCT18__2__0RDC;}),[]);
$index.$JsonSerialisable__DCT18__1__0DFLMelchior_2eRemote_2eJson_2efromJson=
 new _F_(function($x1)
         {var $__=
           _e_($x1);
          var $__swJSW7__0;
          switch($__._tag_)
           {case 0:
             var $__4=
              new _A_($UHC.$Base.$packedStringToString,["\"time\""]);
             var $__5=
              new _A_($Melchior.$Remote.$Json.$getJsonString,[$__4,$__._1]);
             var $__6=
              new _A_($UHC.$Base.$_24,[$index.$withDefaultUNQ376,$__5]);
             $__swJSW7__0=
              new _A_($index.$Time__,[$__6]);
             break;
            case 1:
             var $__7=
              new _A_($UHC.$Base.$packedStringToString,["--:--:--"]);
             var $__8=
              new _A_($index.$Time__,[$__7]);
             $__swJSW7__0=
              $__8;
             break;}
          return $__swJSW7__0;});
$index.$withDefaultUNQ376=
 new _F_(function($x1)
         {var $__=
           _e_($x1);
          var $__swJSW8__0;
          switch($__._tag_)
           {case 0:
             $__swJSW8__0=
              $__._1;
             break;
            case 1:
             var $__4=
              new _A_($UHC.$Base.$packedStringToString,["--:--:--"]);
             $__swJSW8__0=
              $__4;
             break;}
          return $__swJSW8__0;});
$index.$JsonSerialisable__NEW139UNQ367DCT18__1__0RDC=
 new _F_(function($JsonSerialisable__)
         {var $JsonSerialisable__2=
           new _A_($index.$JsonSerialisable__NEW141UNQ368EVLDCT18__1__0RDC,[$JsonSerialisable__]);
          return $JsonSerialisable__2;});
$index.$JsonSerialisable__NEW141UNQ368EVLDCT18__1__0RDC=
 new _F_(function($JsonSerialisable__)
         {var $JsonSerialisable__2=
           _e_(new _A_($Melchior.$Remote.$Json.$JsonSerialisable__CLS24__0__0,[$JsonSerialisable__]));
          var $__4=
           {_tag_:0,_1:$index.$JsonSerialisable__DCT18__1__0DFLMelchior_2eRemote_2eJson_2efromJson};
          return $__4;});
$index.$JsonSerialisable__UNQ367DCT18__1__0RDC=
 new _A_(new _F_(function()
                 {return new _A_($index.$JsonSerialisable__NEW139UNQ367DCT18__1__0RDC,[$index.$JsonSerialisable__UNQ367DCT18__1__0RDC]);}),[]);
$index.$JsonSerialisable__DCT18__1__0=
 new _A_(new _F_(function()
                 {return $index.$JsonSerialisable__UNQ367DCT18__1__0RDC;}),[]);
$index.$Heartbeat__=
 new _F_(function($x1)
         {return {_tag_:0,_1:$x1};});
$index.$JsonSerialisable__DCT18__3__0DFLMelchior_2eRemote_2eJson_2efromJson=
 new _F_(function($x1)
         {var $__=
           _e_($x1);
          var $__swJSW10__0;
          switch($__._tag_)
           {case 0:
             var $__4=
              new _A_($UHC.$Base.$packedStringToString,["\"heart\""]);
             var $__5=
              new _A_($Melchior.$Remote.$Json.$getJsonString,[$__4,$__._1]);
             var $__6=
              new _A_($UHC.$Base.$_24,[$index.$withDefaultUNQ391,$__5]);
             $__swJSW10__0=
              new _A_($index.$Heartbeat__,[$__6]);
             break;
            case 1:
             var $__7=
              new _A_($UHC.$Base.$packedStringToString,["Server unreachable : ("]);
             var $__8=
              new _A_($index.$Heartbeat__,[$__7]);
             $__swJSW10__0=
              $__8;
             break;}
          return $__swJSW10__0;});
$index.$withDefaultUNQ391=
 new _F_(function($x1)
         {var $__=
           _e_($x1);
          var $__swJSW11__0;
          switch($__._tag_)
           {case 0:
             $__swJSW11__0=
              $__._1;
             break;
            case 1:
             var $__4=
              new _A_($UHC.$Base.$packedStringToString,["Server response unparseable : ("]);
             $__swJSW11__0=
              $__4;
             break;}
          return $__swJSW11__0;});
$index.$JsonSerialisable__NEW157UNQ382DCT18__3__0RDC=
 new _F_(function($JsonSerialisable__)
         {var $JsonSerialisable__2=
           new _A_($index.$JsonSerialisable__NEW159UNQ383EVLDCT18__3__0RDC,[$JsonSerialisable__]);
          return $JsonSerialisable__2;});
$index.$JsonSerialisable__NEW159UNQ383EVLDCT18__3__0RDC=
 new _F_(function($JsonSerialisable__)
         {var $JsonSerialisable__2=
           _e_(new _A_($Melchior.$Remote.$Json.$JsonSerialisable__CLS24__0__0,[$JsonSerialisable__]));
          var $__4=
           {_tag_:0,_1:$index.$JsonSerialisable__DCT18__3__0DFLMelchior_2eRemote_2eJson_2efromJson};
          return $__4;});
$index.$JsonSerialisable__UNQ382DCT18__3__0RDC=
 new _A_(new _F_(function()
                 {return new _A_($index.$JsonSerialisable__NEW157UNQ382DCT18__3__0RDC,[$index.$JsonSerialisable__UNQ382DCT18__3__0RDC]);}),[]);
$index.$JsonSerialisable__DCT18__3__0=
 new _A_(new _F_(function()
                 {return $index.$JsonSerialisable__UNQ382DCT18__3__0RDC;}),[]);
$index.$_24okUNQ188=
 new _F_(function($html,$_24x)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["btn-success"]);
          var $__5=
           new _A_($Melchior.$Dom.$Selectors.$byClass,[$Melchior.$Dom.$Selectors.$Node__DCT42__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0,$__4]);
          var $__6=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT42__11__0,$__5,$__]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__6,$html]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__7]);
          var $__9=
           new _A_($index.$_24okUNQ198,[$html,$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__8,$__9]);});
$index.$_24okUNQ198=
 new _F_(function($html,$_24x,$_24x3)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToString,["container-narrow"]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$byClass,[$Melchior.$Dom.$Selectors.$Node__DCT42__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0,$__5]);
          var $__7=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT42__11__0,$__6,$__]);
          var $__8=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__7,$html]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__8]);
          var $__10=
           new _A_($index.$_24okUNQ206,[$html,$_24x,$_24x3]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__9,$__10]);});
$index.$_24okUNQ206=
 new _F_(function($html,$_24x,$_24x3,$_24x4)
         {var $__=
           new _A_($UHC.$Base.$packedStringToString,["innerHTML"]);
          var $__6=
           new _A_($index.$clickListener,[$__]);
          var $__7=
           new _A_($Control.$Applicative.$_3c_24_3e,[$UHC.$Base.$Functor__DCT73__407__0,$__6,$_24x]);
          var $__8=
           new _A_($UHC.$Base.$sequence,[$Melchior.$Dom.$Monad__DCT18__1__0]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$__8,$__7]);
          var $__10=
           new _A_($index.$_24okUNQ225,[$html,$_24x3,$_24x4]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__9,$__10]);});
$index.$_24okUNQ225=
 new _F_(function($html,$_24x,$_24x3,$_24x4)
         {var $__=
           new _A_($index.$__22__399NEW168,[$html,$_24x3]);
          var $__6=
           new _A_($Control.$Applicative.$_3c_24_3e,[$UHC.$Base.$Functor__DCT73__407__0,$Melchior.$EventSources.$Mouse.$click,$_24x]);
          var $__7=
           new _A_($Control.$Applicative.$_3c_24_3e,[$UHC.$Base.$Functor__DCT73__407__0,$index.$__22__385__0,$__6]);
          var $__8=
           new _A_($UHC.$Base.$sequence,[$Melchior.$Dom.$Monad__DCT18__1__0]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$__8,$__7]);
          var $__10=
           new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT18__1__0,$__9,$__]);
          var $__11=
           new _A_($Control.$Applicative.$_3c_24_3e,[$UHC.$Base.$Functor__DCT73__407__0,$index.$__22__366__0,$_24x4]);
          var $__12=
           new _A_($UHC.$Base.$sequence,[$Melchior.$Dom.$Monad__DCT18__1__0]);
          var $__13=
           new _A_($UHC.$Base.$_24,[$__12,$__11]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT18__1__0,$__13,$__10]);});
$index.$__22__399NEW168=
 new _F_(function($html,$_24x)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["where-at"]);
          var $__5=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT42__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0,$__4]);
          var $__6=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT42__11__0,$__5,$__]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__6,$html]);
          var $__8=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__7,$index.$__22__696__0]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__8]);
          var $__10=
           new _A_($index.$_24okUNQ244,[$html,$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__9,$__10]);});
$index.$_24okUNQ244=
 new _F_(function($html,$_24x,$_24x3)
         {var $__=
           new _A_($index.$__22__416NEW172,[$html]);
          var $__5=
           new _A_($Control.$Applicative.$_3c_24_3e,[$UHC.$Base.$Functor__DCT73__407__0,$Melchior.$EventSources.$Mouse.$position,$_24x]);
          var $__6=
           new _A_($index.$put,[$Melchior.$Dom.$Html.$Renderable__DCT18__1__0,$_24x3]);
          var $__7=
           new _A_($Control.$Applicative.$_3c_24_3e,[$UHC.$Base.$Functor__DCT73__407__0,$__6,$__5]);
          var $__8=
           new _A_($UHC.$Base.$sequence,[$Melchior.$Dom.$Monad__DCT18__1__0]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$__8,$__7]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT18__1__0,$__9,$__]);});
$index.$__22__416NEW172=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__3=
           new _A_($UHC.$Base.$packedStringToString,["when-at"]);
          var $__4=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT42__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0,$__3]);
          var $__5=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT42__11__0,$__4,$__]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__5,$html]);
          var $__7=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__6,$index.$__22__672__0]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__7]);
          var $__9=
           new _A_($index.$_24okUNQ252,[$html]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__8,$__9]);});
$index.$_24okUNQ252=
 new _F_(function($html,$_24x)
         {var $__=
           new _A_($UHC.$Base.$even,[$UHC.$Base.$Integral__DCT73__110__0]);
          var $__4=
           new _A_($Melchior.$Control.$keepWhen,[$index.$countSeconds,$__]);
          var $__5=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT18__1__0]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$__5,$__4]);
          var $__7=
           new _A_($index.$_24okUNQ263,[$html,$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__6,$__7]);});
$index.$_24okUNQ263=
 new _F_(function($html,$_24x,$_24x3)
         {var $__=
           new _A_($UHC.$Base.$odd,[$UHC.$Base.$Integral__DCT73__110__0]);
          var $__5=
           new _A_($Melchior.$Control.$keepWhen,[$index.$countSeconds,$__]);
          var $__6=
           new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT73__101__0,2,$Melchior.$Time.$second]);
          var $__7=
           new _A_($Melchior.$Time.$delay,[$__6]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$__7,$__5]);
          var $__9=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT18__1__0]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$__9,$__8]);
          var $__11=
           new _A_($index.$_24okUNQ276,[$html,$_24x,$_24x3]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__10,$__11]);});
$index.$_24okUNQ276=
 new _F_(function($html,$_24x,$_24x3,$_24x4)
         {var $__=
           new _A_($index.$__22__433NEW177,[$html]);
          var $__6=
           new _A_($Melchior.$Control.$merge,[$_24x3,$_24x4]);
          var $__7=
           new _A_($index.$put,[$Melchior.$Dom.$Html.$Renderable__DCT18__2__0,$_24x,$__6]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT18__1__0,$__7,$__]);});
$index.$__22__433NEW177=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__3=
           new _A_($UHC.$Base.$packedStringToString,["clock"]);
          var $__4=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT42__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0,$__3]);
          var $__5=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT42__11__0,$__4,$__]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__5,$html]);
          var $__7=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__6,$index.$__22__624__0]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__7]);
          var $__9=
           new _A_($index.$_24okUNQ291,[$html]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__8,$__9]);});
$index.$_24okUNQ291=
 new _F_(function($html,$_24x)
         {var $__=
           new _A_($index.$__22__449NEW180,[$html]);
          var $__4=
           new _A_($Melchior.$Time.$every,[$Melchior.$Time.$second]);
          var $__5=
           new _A_($UHC.$Base.$packedStringToString,["/the_time"]);
          var $__6=
           new _A_($Melchior.$Remote.$XHR.$request,[$index.$JsonSerialisable__DCT18__1__0,$Melchior.$Remote.$XHR.$GET__,$__5]);
          var $__7=
           new _A_($UHC.$Base.$_24,[$__6,$__4]);
          var $__8=
           new _A_($index.$put,[$index.$Renderable__DCT18__2__0,$_24x,$__7]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT18__1__0,$__8,$__]);});
$index.$__22__449NEW180=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__3=
           new _A_($UHC.$Base.$packedStringToString,["heartbeat"]);
          var $__4=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT42__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0,$__3]);
          var $__5=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT42__11__0,$__4,$__]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__5,$html]);
          var $__7=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__6,$index.$__22__600__0]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__7]);
          var $__9=
           new _A_($index.$_24okUNQ302,[$html]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__8,$__9]);});
$index.$_24okUNQ302=
 new _F_(function($html,$_24x)
         {var $__=
           new _A_($index.$__22__464NEW183,[$html]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["heartbeat"]);
          var $__5=
           new _A_($Melchior.$Control.$constant,[$__4]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$Melchior.$Control.$sample,$__5]);
          var $__7=
           new _A_($Melchior.$Remote.$XHR.$server,[$index.$JsonSerialisable__DCT18__3__0,$__6]);
          var $__8=
           new _A_($index.$put,[$index.$Renderable__DCT18__4__0,$_24x,$__7]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT18__1__0,$__8,$__]);});
$index.$__22__464NEW183=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$toElement,[$Melchior.$Dom.$DomNode__DCT18__7__0,$Melchior.$Dom.$document]);
          var $__3=
           new _A_($Melchior.$Dom.$Events.$MouseEvt__,[$Melchior.$Dom.$Events.$ClickEvt__]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["button"]);
          var $__5=
           new _A_($Melchior.$Control.$Of__,[$Melchior.$Dom.$Events.$ClickEvt__]);
          var $__6=
           new _A_($Melchior.$Control.$delegate,[$__5,$__4,$__3,$__]);
          var $__7=
           new _A_($index.$_24okUNQ314,[$html]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__6,$__7]);});
$index.$_24okUNQ314=
 new _F_(function($html,$_24x)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["any-click"]);
          var $__5=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT42__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0,$__4]);
          var $__6=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT42__11__0,$__5,$__]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__6,$html]);
          var $__8=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__7,$index.$__22__564__0]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__8]);
          var $__10=
           new _A_($index.$_24okUNQ327,[$html,$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__9,$__10]);});
$index.$_24okUNQ327=
 new _F_(function($html,$_24x,$_24x3)
         {var $__=
           new _A_($index.$__22__476NEW187,[$html]);
          var $__5=
           new _A_($index.$put,[$Melchior.$Dom.$Events.$Renderable__DCT18__3__0,$_24x3,$_24x]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT18__1__0,$__5,$__]);});
$index.$__22__476NEW187=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__3=
           new _A_($UHC.$Base.$packedStringToString,["type"]);
          var $__4=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT42__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0,$__3]);
          var $__5=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT42__11__0,$__4,$__]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__5,$html]);
          var $__7=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__6,$index.$__22__540__0]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__7]);
          var $__9=
           new _A_($index.$_24okUNQ339,[$html]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__8,$__9]);});
$index.$_24okUNQ339=
 new _F_(function($html,$_24x)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__4=
           new _A_($UHC.$Base.$packedStringToString,["echo-char"]);
          var $__5=
           new _A_($Melchior.$Dom.$Selectors.$byId,[$Melchior.$Dom.$Selectors.$Node__DCT42__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0,$__4]);
          var $__6=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT42__11__0,$__5,$__]);
          var $__7=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__6,$html]);
          var $__8=
           new _A_($UHC.$Base.$_3e_3e_3d,[$UHC.$Base.$Monad__DCT73__341__0,$__7,$index.$__22__516__0]);
          var $__9=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__8]);
          var $__10=
           new _A_($index.$_24okUNQ348,[$html,$_24x]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__9,$__10]);});
$index.$_24okUNQ348=
 new _F_(function($html,$_24x,$_24x3)
         {var $__=
           new _A_($UHC.$Base.$head,[$html]);
          var $__5=
           new _A_($UHC.$Base.$return,[$Melchior.$Dom.$Monad__DCT18__1__0]);
          var $__6=
           new _A_($UHC.$Base.$_24,[$__5,$__]);
          var $__7=
           new _A_($Melchior.$EventSources.$Keyboard.$keyDownSignal,[$_24x]);
          var $__8=
           new _A_($UHC.$Base.$_24,[$Melchior.$EventSources.$Keyboard.$keyCode,$__7]);
          var $__9=
           new _A_($Melchior.$Control.$dropRepeats,[$UHC.$Base.$Eq__DCT73__88__0]);
          var $__10=
           new _A_($UHC.$Base.$_24,[$__9,$__8]);
          var $__11=
           new _A_($index.$put,[$Melchior.$Dom.$Html.$Renderable__DCT18__2__0,$_24x3,$__10]);
          return new _A_($UHC.$Base.$_3e_3e,[$Melchior.$Dom.$Monad__DCT18__1__0,$__11,$__6]);});
$index.$__22__516__0=
 new _F_(function($m)
         {var $__=
           new _A_($Data.$Maybe.$fromJust,[$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$index.$__22__540__0=
 new _F_(function($m)
         {var $__=
           new _A_($Data.$Maybe.$fromJust,[$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$index.$__22__564__0=
 new _F_(function($m)
         {var $__=
           new _A_($Data.$Maybe.$fromJust,[$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$index.$__22__600__0=
 new _F_(function($m)
         {var $__=
           new _A_($Data.$Maybe.$fromJust,[$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$index.$__22__624__0=
 new _F_(function($m)
         {var $__=
           new _A_($Data.$Maybe.$fromJust,[$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$index.$__22__672__0=
 new _F_(function($m)
         {var $__=
           new _A_($Data.$Maybe.$fromJust,[$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$index.$__22__696__0=
 new _F_(function($m)
         {var $__=
           new _A_($Data.$Maybe.$fromJust,[$m]);
          var $__3=
           new _A_($UHC.$Base.$return,[$UHC.$Base.$Monad__DCT73__341__0]);
          return new _A_($UHC.$Base.$_24,[$__3,$__]);});
$index.$__22__385__0=
 new _F_(function($click)
         {var $__=
           new _A_($UHC.$Base.$packedStringToString,["/data"]);
          var $__3=
           new _A_($Melchior.$Remote.$XHR.$remote,[$Melchior.$Remote.$XHR.$GET__,$__]);
          var $__4=
           new _A_($Melchior.$Control.$_3e_3e_3e,[$__3,$Melchior.$Remote.$Json.$toJson]);
          var $__5=
           new _A_($Melchior.$Control.$_3e_3e_3e,[$__4,$index.$append]);
          return new _A_($Melchior.$Control.$_7e_3e,[$click,$__5]);});
$index.$__22__366__0=
 new _F_(function($click)
         {var $__=
           new _A_($Melchior.$Control.$_26_26_26,[$index.$hideSiblings,$index.$showCurrent]);
          var $__3=
           new _A_($Melchior.$Control.$_3e_3e_3e,[$index.$rmClassFromParentSiblings,$index.$addClassTo]);
          var $__4=
           new _A_($Melchior.$Control.$_3e_3e_3e,[$__3,$__]);
          return new _A_($Melchior.$Control.$_7e_3e,[$click,$__4]);});
$index.$setupNavLinks=
 new _F_(function($html)
         {var $__=
           new _A_($Melchior.$Dom.$Selectors.$from,[$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0]);
          var $__3=
           new _A_($UHC.$Base.$packedStringToString,["link"]);
          var $__4=
           new _A_($Melchior.$Dom.$Selectors.$byClass,[$Melchior.$Dom.$Selectors.$Node__DCT42__1__0,$Melchior.$Dom.$Selectors.$Nodes__DCT42__7__0,$__3]);
          var $__5=
           new _A_($Control.$Category.$_2e,[$Melchior.$Dom.$Selectors.$Category__DCT42__11__0,$__4,$__]);
          var $__6=
           new _A_($Melchior.$Dom.$Selectors.$select,[$__5,$html]);
          var $__7=
           new _A_($UHC.$Base.$_24,[$Melchior.$Dom.$Dom__,$__6]);
          var $__8=
           new _A_($index.$_24okUNQ188,[$html]);
          return new _A_($UHC.$Base.$_3e_3e_3d,[$Melchior.$Dom.$Monad__DCT18__1__0,$__7,$__8]);});
$index.$main=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$Control.$runDom,[$index.$setupNavLinks]);}),[]);
$index.$__Rep0HeartbeatDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {return new _A_($index.$Heartbeat__,[$proj__1]);});
$index.$__Rep0HeartbeatDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__4=
           new _A_($UHC.$Base.$K1__,[$x2._1]);
          var $__5=
           new _A_($UHC.$Base.$M1__,[$__4]);
          var $__6=
           new _A_($UHC.$Base.$M1__,[$__5]);
          var $__7=
           new _A_($UHC.$Base.$M1__,[$__6]);
          return $__7;});
$index.$__Rep0HeartbeatNEW352UNQ146SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($index.$__Rep0HeartbeatNEW354UNQ147EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$index.$__Rep0HeartbeatNEW354UNQ147EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS73__371__0,[$__]));
          var $__5=
           {_tag_:0,_1:$index.$__Rep0HeartbeatDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$index.$__Rep0HeartbeatDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$index.$__Rep0HeartbeatUNQ146SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($index.$__Rep0HeartbeatNEW352UNQ146SDCGENRepresentable0,[$index.$__Rep0HeartbeatUNQ146SDCGENRepresentable0]);}),[]);
$index.$__Rep0HeartbeatGENRepresentable0=
 new _A_(new _F_(function()
                 {return $index.$__Rep0HeartbeatUNQ146SDCGENRepresentable0;}),[]);
$index.$_24D__TimeDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["index"]);});
$index.$_24D__TimeDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Time"]);});
$index.$_24D__TimeNEW361UNQ126SDCGENDatatype=
 new _F_(function($_24D__Time)
         {var $_24D__Time2=
           new _A_($index.$_24D__TimeNEW363UNQ127EVLSDCGENDatatype,[$_24D__Time]);
          return $_24D__Time2;});
$index.$_24D__TimeNEW363UNQ127EVLSDCGENDatatype=
 new _F_(function($_24D__Time)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS73__352__0,[$_24D__Time]));
          var $__5=
           {_tag_:0,_1:$index.$_24D__TimeDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$index.$_24D__TimeDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$index.$_24D__TimeUNQ126SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($index.$_24D__TimeNEW361UNQ126SDCGENDatatype,[$index.$_24D__TimeUNQ126SDCGENDatatype]);}),[]);
$index.$_24D__TimeGENDatatype=
 new _A_(new _F_(function()
                 {return $index.$_24D__TimeUNQ126SDCGENDatatype;}),[]);
$index.$_24D__HeartbeatDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["index"]);});
$index.$_24D__HeartbeatDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Heartbeat"]);});
$index.$_24D__HeartbeatNEW370UNQ163SDCGENDatatype=
 new _F_(function($_24D__Heartbeat)
         {var $_24D__Heartbeat2=
           new _A_($index.$_24D__HeartbeatNEW372UNQ164EVLSDCGENDatatype,[$_24D__Heartbeat]);
          return $_24D__Heartbeat2;});
$index.$_24D__HeartbeatNEW372UNQ164EVLSDCGENDatatype=
 new _F_(function($_24D__Heartbeat)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS73__352__0,[$_24D__Heartbeat]));
          var $__5=
           {_tag_:0,_1:$index.$_24D__HeartbeatDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$index.$_24D__HeartbeatDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$index.$_24D__HeartbeatUNQ163SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($index.$_24D__HeartbeatNEW370UNQ163SDCGENDatatype,[$index.$_24D__HeartbeatUNQ163SDCGENDatatype]);}),[]);
$index.$_24D__HeartbeatGENDatatype=
 new _A_(new _F_(function()
                 {return $index.$_24D__HeartbeatUNQ163SDCGENDatatype;}),[]);
$index.$_24C__TimeDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Time"]);});
$index.$_24C__TimeNEW378UNQ133SDCGENConstructor=
 new _F_(function($_24C__Time)
         {var $_24C__Time2=
           new _A_($index.$_24C__TimeNEW380UNQ134EVLSDCGENConstructor,[$_24C__Time]);
          return $_24C__Time2;});
$index.$_24C__TimeNEW380UNQ134EVLSDCGENConstructor=
 new _F_(function($_24C__Time)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS73__355__0,[$_24C__Time]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$index.$_24C__TimeDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$index.$_24C__TimeUNQ133SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($index.$_24C__TimeNEW378UNQ133SDCGENConstructor,[$index.$_24C__TimeUNQ133SDCGENConstructor]);}),[]);
$index.$_24C__TimeGENConstructor=
 new _A_(new _F_(function()
                 {return $index.$_24C__TimeUNQ133SDCGENConstructor;}),[]);
$index.$_24C__HeartbeatDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Heartbeat"]);});
$index.$_24C__HeartbeatNEW386UNQ170SDCGENConstructor=
 new _F_(function($_24C__Heartbeat)
         {var $_24C__Heartbeat2=
           new _A_($index.$_24C__HeartbeatNEW388UNQ171EVLSDCGENConstructor,[$_24C__Heartbeat]);
          return $_24C__Heartbeat2;});
$index.$_24C__HeartbeatNEW388UNQ171EVLSDCGENConstructor=
 new _F_(function($_24C__Heartbeat)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS73__355__0,[$_24C__Heartbeat]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$index.$_24C__HeartbeatDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$index.$_24C__HeartbeatUNQ170SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($index.$_24C__HeartbeatNEW386UNQ170SDCGENConstructor,[$index.$_24C__HeartbeatUNQ170SDCGENConstructor]);}),[]);
$index.$_24C__HeartbeatGENConstructor=
 new _A_(new _F_(function()
                 {return $index.$_24C__HeartbeatUNQ170SDCGENConstructor;}),[]);
var $main=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Run.$ehcRunMain,[$index.$main]);}),[]);
_e_(new _A_($main,[[]]));
