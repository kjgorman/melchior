var Tuples = function () {
    "use strict";

    var Tuple = function () { }

    //TODO --- implement ampersand properly
    // inpSignal --> signal a
    // s -> \signal a -> \signal b
    // t -> \signal a -> \signal c
    Tuple.prototype.pair = function (s, t, inpSignal) {
        console.log("tuple: ", s, t, inpSignal)
        var newSignal = new Signals.Signal(inpSignal),
            withS = _e_(UHCFunction.apply(s, inpSignal)),
            withT = _e_(UHCFunction.apply(t, inpSignal))
        console.log("&&&: ", withS, withT)
        withS.registerListener(function(value) {
            newSignal.push(value)
        })
        withT.registerListener(function(value) {
            newSignal.push(value)
        })
        return newSignal
    }

    return new Tuple()
}()
