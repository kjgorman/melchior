var Melchior = function () {
    "use strict";

    var currentValue = null

    function expects (elem) {
        currentValue = elem
    }

    function valueOfTest () {
        return currentValue
    }

    return {
        expects: expects,
        valueOfTest: valueOfTest
    }
}();