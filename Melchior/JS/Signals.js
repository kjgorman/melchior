var Signals = function () {
    Signal = function () {
        this.registeredListeners = []
    }

    Signal.prototype.registerListener = function(listener, callback) {
        this.registeredListeners.push(function (value) {
            //curry the extra argument
            var argCopy = callback.args.slice() //shallow copy!
            callback.args = callback.args.concat([value]);
            callback.__aN__([[]])
            //then uncurry it because it's actually the same object (?!)
            callback.args = argCopy;
        })
    }

    Signal.prototype.push = function(value) {
        for(var i = 0, len = this.registeredListeners.length; i < len; i++) {
            this.registeredListeners[i](value);
        }
    }

    function createEventedSignal (elem, event) {
        var s = new Signal()
        elem.addEventListener(event, function () {
            s.push(elem.value)
        })
        return s
    }

    function bindToSignal (elem, signal, callback) {
        signal.registerListener(elem, callback);
        return {_1:{__aN__ : function() { return elem }}}
    }

    return {
        createEventedSignal: createEventedSignal,
        bindToSignal: bindToSignal
    }
}()