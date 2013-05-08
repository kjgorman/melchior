var Tuples = function () {
    "use strict";

    var Tuple = function () { }

    //TODO --- implement ampersand properly
    Tuple.prototype.pair = function (tpl) {
        console.log("tuple: ", tpl)
        return tpl
    }

    return new Tuple()
}()
