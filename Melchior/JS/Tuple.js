var Tuples = function () {
    "use strict";

    var Tuple = function () { }

    //TODO --- implement ampersand properly
    Tuple.prototype.pair = function (s, t, x) {
        console.log("tuple: ", s, t, x)
        var newSignal = new Signals.Signal([s, t])
        x.registerListener(function(value) {
            var sRes = UHCFunction.apply(s, x), tRes = UHCFunction.apply(t, x)
            newSignal.push(new _A_(new _F_( function() { return [sRes, tRes] }, [] )))
        })
        return newSignal
    }

    return new Tuple()
}()
