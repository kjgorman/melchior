var Melchior = function () {
    "use strict";

    var currentValue = {}

    function expects (namespace, elem) {
        currentValue[namespace] = elem
    }

    function valueOfTest (namespace) {
        return currentValue[namespace] || null;
    }

    return {
        expects: expects,
        valueOfTest: valueOfTest
    }
}();