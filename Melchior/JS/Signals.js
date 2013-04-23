var Signals = function () {
    Signal = function () {}

    function createEventedSignal (elem, event) {
        var s = new Signal()
        console.log(elem, event)
        elem.addEventListener(event, function () {
            s.push(elem.value)
        })
        return s
    }

    return {
        createEventedSignal: createEventedSignal
    }
}()