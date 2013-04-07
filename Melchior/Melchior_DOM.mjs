// Melchior.DOM
var $Melchior=
 ($Melchior ? $Melchior : {});
$Melchior.$DOM=
 ($Melchior.$DOM ? $Melchior.$DOM : {});
$Melchior.$DOM.$substr=
 new _F_(function($__,$__2,$__3)
         {var $__4=
           _e_($__);
          var $__5=
           _e_($__2);
          var $__6=
           _e_($__3);
          return $__4.substr($__5,$__6);});
$Melchior.$DOM.$consoleLog=
 new _F_(function($__,$__2)
         {var $__3=
           _e_($__);
          var $__4=
           _e_(console.log($__3));
          var $__5=
           _e_([]);
          return [$__2,$__5];});
$Melchior.$DOM.$bind=
 new _F_(function($__,$__2,$__3)
         {var $__4=
           _e_($__);
          var $__5=
           _e_($__2);
          var $__6=
           _e_($__3);
          return addListener($__4,$__5,$__6);});
$Melchior.$DOM.$getHTML=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.innerHTML;});
$Melchior.$DOM.$getValue=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return $__2.value;});
$Melchior.$DOM.$select=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return document.querySelector($__2);});
$Melchior.$DOM.$setHTML=
 new _F_(function($__,$__2)
         {var $__3=
           _e_($__);
          var $__4=
           _e_($__2);
          return set($__3,"innerHTML",$__4);});
$Melchior.$DOM.$log=
 new _F_(function($s)
         {var $__=
           new _A_($Language.$UHC.$JScript.$ECMA.$String.$stringToJSString,[$s]);
          return new _A_($UHC.$Base.$_24,[$Melchior.$DOM.$consoleLog,$__]);});
$Melchior.$DOM.$__Rep0ElementDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {return $UHC.$Base.$undefined;});
$Melchior.$DOM.$__Rep0ElementDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {return $UHC.$Base.$undefined;});
$Melchior.$DOM.$__Rep0ElementNEW26UNQ45SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($Melchior.$DOM.$__Rep0ElementNEW28UNQ46EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$Melchior.$DOM.$__Rep0ElementNEW28UNQ46EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS73__371__0,[$__]));
          var $__5=
           {_tag_:0,_1:$Melchior.$DOM.$__Rep0ElementDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$Melchior.$DOM.$__Rep0ElementDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$Melchior.$DOM.$__Rep0ElementUNQ45SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$DOM.$__Rep0ElementNEW26UNQ45SDCGENRepresentable0,[$Melchior.$DOM.$__Rep0ElementUNQ45SDCGENRepresentable0]);}),[]);
$Melchior.$DOM.$__Rep0ElementGENRepresentable0=
 new _A_(new _F_(function()
                 {return $Melchior.$DOM.$__Rep0ElementUNQ45SDCGENRepresentable0;}),[]);
$Melchior.$DOM.$Dom__=
 new _F_(function($x1)
         {return {_tag_:0,_1:$x1};});
$Melchior.$DOM.$Monad__DCT6__0__0DFLUHC_2eBase_2e_3e_3e_3d=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          return new _A_($Melchior.$DOM.$__10__91__0,[$__2._1]);});
$Melchior.$DOM.$__10__91__0=
 new _F_(function($a,$k)
         {return new _A_($k,[$a]);});
$Melchior.$DOM.$Monad__NEW37UNQ111DCT6__0__0RDC=
 new _F_(function($Monad__)
         {var $Monad__2=
           new _A_($Melchior.$DOM.$Monad__NEW39UNQ112EVLDCT6__0__0RDC,[$Monad__]);
          return $Monad__2;});
$Melchior.$DOM.$Monad__NEW39UNQ112EVLDCT6__0__0RDC=
 new _F_(function($Monad__)
         {var $Monad__2=
           _e_(new _A_($UHC.$Base.$Monad__CLS73__45__0,[$Monad__]));
          var $__7=
           {_tag_:0,_1:$Monad__2._1,_2:$Melchior.$DOM.$Monad__DCT6__0__0DFLUHC_2eBase_2e_3e_3e_3d,_3:$Monad__2._3,_4:$Melchior.$DOM.$Dom__};
          return $__7;});
$Melchior.$DOM.$Monad__UNQ111DCT6__0__0RDC=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$DOM.$Monad__NEW37UNQ111DCT6__0__0RDC,[$Melchior.$DOM.$Monad__UNQ111DCT6__0__0RDC]);}),[]);
$Melchior.$DOM.$Monad__DCT6__0__0=
 new _A_(new _F_(function()
                 {return $Melchior.$DOM.$Monad__UNQ111DCT6__0__0RDC;}),[]);
$Melchior.$DOM.$__Rep0DomDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {return new _A_($Melchior.$DOM.$Dom__,[$proj__1]);});
$Melchior.$DOM.$__Rep0DomDFLUHC_2eBase_2efrom0GENRepresentable0=
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
$Melchior.$DOM.$__Rep0DomNEW51UNQ62SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($Melchior.$DOM.$__Rep0DomNEW53UNQ63EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$Melchior.$DOM.$__Rep0DomNEW53UNQ63EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS73__371__0,[$__]));
          var $__5=
           {_tag_:0,_1:$Melchior.$DOM.$__Rep0DomDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$Melchior.$DOM.$__Rep0DomDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$Melchior.$DOM.$__Rep0DomUNQ62SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$DOM.$__Rep0DomNEW51UNQ62SDCGENRepresentable0,[$Melchior.$DOM.$__Rep0DomUNQ62SDCGENRepresentable0]);}),[]);
$Melchior.$DOM.$__Rep0DomGENRepresentable0=
 new _A_(new _F_(function()
                 {return $Melchior.$DOM.$__Rep0DomUNQ62SDCGENRepresentable0;}),[]);
$Melchior.$DOM.$__Rep1DomDFLUHC_2eBase_2eto1GENRepresentable1=
 new _F_(function($proj__1)
         {return new _A_($Melchior.$DOM.$Dom__,[$proj__1]);});
$Melchior.$DOM.$__Rep1DomDFLUHC_2eBase_2efrom1GENRepresentable1=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__4=
           new _A_($UHC.$Base.$Par1__,[$x2._1]);
          var $__5=
           new _A_($UHC.$Base.$M1__,[$__4]);
          var $__6=
           new _A_($UHC.$Base.$M1__,[$__5]);
          var $__7=
           new _A_($UHC.$Base.$M1__,[$__6]);
          return $__7;});
$Melchior.$DOM.$__Rep1DomNEW65UNQ79SDCGENRepresentable1=
 new _F_(function($__)
         {var $__2=
           new _A_($Melchior.$DOM.$__Rep1DomNEW67UNQ80EVLSDCGENRepresentable1,[$__]);
          return $__2;});
$Melchior.$DOM.$__Rep1DomNEW67UNQ80EVLSDCGENRepresentable1=
 new _F_(function($__)
         {var $Representable1__=
           _e_(new _A_($UHC.$Base.$Representable1__CLS73__372__0,[$__]));
          var $__5=
           {_tag_:0,_1:$Melchior.$DOM.$__Rep1DomDFLUHC_2eBase_2efrom1GENRepresentable1,_2:$Melchior.$DOM.$__Rep1DomDFLUHC_2eBase_2eto1GENRepresentable1};
          return $__5;});
$Melchior.$DOM.$__Rep1DomUNQ79SDCGENRepresentable1=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$DOM.$__Rep1DomNEW65UNQ79SDCGENRepresentable1,[$Melchior.$DOM.$__Rep1DomUNQ79SDCGENRepresentable1]);}),[]);
$Melchior.$DOM.$__Rep1DomGENRepresentable1=
 new _A_(new _F_(function()
                 {return $Melchior.$DOM.$__Rep1DomUNQ79SDCGENRepresentable1;}),[]);
$Melchior.$DOM.$_24D__ElementDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Melchior.DOM"]);});
$Melchior.$DOM.$_24D__ElementDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Element"]);});
$Melchior.$DOM.$_24D__ElementNEW74UNQ54SDCGENDatatype=
 new _F_(function($_24D__Element)
         {var $_24D__Element2=
           new _A_($Melchior.$DOM.$_24D__ElementNEW76UNQ55EVLSDCGENDatatype,[$_24D__Element]);
          return $_24D__Element2;});
$Melchior.$DOM.$_24D__ElementNEW76UNQ55EVLSDCGENDatatype=
 new _F_(function($_24D__Element)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS73__352__0,[$_24D__Element]));
          var $__5=
           {_tag_:0,_1:$Melchior.$DOM.$_24D__ElementDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$Melchior.$DOM.$_24D__ElementDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$Melchior.$DOM.$_24D__ElementUNQ54SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$DOM.$_24D__ElementNEW74UNQ54SDCGENDatatype,[$Melchior.$DOM.$_24D__ElementUNQ54SDCGENDatatype]);}),[]);
$Melchior.$DOM.$_24D__ElementGENDatatype=
 new _A_(new _F_(function()
                 {return $Melchior.$DOM.$_24D__ElementUNQ54SDCGENDatatype;}),[]);
$Melchior.$DOM.$_24D__DomDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Melchior.DOM"]);});
$Melchior.$DOM.$_24D__DomDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Dom"]);});
$Melchior.$DOM.$_24D__DomNEW83UNQ96SDCGENDatatype=
 new _F_(function($_24D__Dom)
         {var $_24D__Dom2=
           new _A_($Melchior.$DOM.$_24D__DomNEW85UNQ97EVLSDCGENDatatype,[$_24D__Dom]);
          return $_24D__Dom2;});
$Melchior.$DOM.$_24D__DomNEW85UNQ97EVLSDCGENDatatype=
 new _F_(function($_24D__Dom)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS73__352__0,[$_24D__Dom]));
          var $__5=
           {_tag_:0,_1:$Melchior.$DOM.$_24D__DomDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$Melchior.$DOM.$_24D__DomDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$Melchior.$DOM.$_24D__DomUNQ96SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$DOM.$_24D__DomNEW83UNQ96SDCGENDatatype,[$Melchior.$DOM.$_24D__DomUNQ96SDCGENDatatype]);}),[]);
$Melchior.$DOM.$_24D__DomGENDatatype=
 new _A_(new _F_(function()
                 {return $Melchior.$DOM.$_24D__DomUNQ96SDCGENDatatype;}),[]);
$Melchior.$DOM.$_24C__DomDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Dom"]);});
$Melchior.$DOM.$_24C__DomNEW91UNQ103SDCGENConstructor=
 new _F_(function($_24C__Dom)
         {var $_24C__Dom2=
           new _A_($Melchior.$DOM.$_24C__DomNEW93UNQ104EVLSDCGENConstructor,[$_24C__Dom]);
          return $_24C__Dom2;});
$Melchior.$DOM.$_24C__DomNEW93UNQ104EVLSDCGENConstructor=
 new _F_(function($_24C__Dom)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS73__355__0,[$_24C__Dom]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$Melchior.$DOM.$_24C__DomDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$Melchior.$DOM.$_24C__DomUNQ103SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($Melchior.$DOM.$_24C__DomNEW91UNQ103SDCGENConstructor,[$Melchior.$DOM.$_24C__DomUNQ103SDCGENConstructor]);}),[]);
$Melchior.$DOM.$_24C__DomGENConstructor=
 new _A_(new _F_(function()
                 {return $Melchior.$DOM.$_24C__DomUNQ103SDCGENConstructor;}),[]);
