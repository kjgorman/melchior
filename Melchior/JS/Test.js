var Melchior = function () {
    "use strict";

    var currentValue = null

    function expects (elem) {
        console.log(elem)
        currentValue = elem
    }

    function valueOfTest () {
        console.log("current value: ", currentValue)
        return currentValue
    }

    return {
        expects: expects,
        valueOfTest: valueOfTest
    }
}();