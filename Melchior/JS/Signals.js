var Signals = function () {
    Signal = function () {}

    function createEventedSignal (elem, event) {
        var s = new Signal()
        console.log("elem:", elem, "event:", event)
        elem.addEventListener(event, function () {
            s.push(elem.value)
        })
        return elem
    }

    return {
        createEventedSignal: createEventedSignal
    }
}()