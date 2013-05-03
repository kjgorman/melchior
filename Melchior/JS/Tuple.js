var Tuples = function () {
    "use strict";

    var Tuple = function () { }

    Tuple.prototype.pair = function (tpl) {
        console.log("tuple: ", tpl)
        return tpl
    }

    return new Tuple()
}()