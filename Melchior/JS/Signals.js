var Signals = function () {
    "use strict";

    var Signal = function () {
        this.registeredListeners = []
    }

    Signal.prototype.registerListener = function(callback) {
        this.registeredListeners.push(function (value) {
            if(!callback || !callback.args) return;
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

    function createEventedSignal (elem, event, key) {
        if(elem && elem[0] instanceof NodeList) elem = elem[0][0]
        if(elem && elem.length) elem = elem[0]
        if(!elem || !elem.addEventListener || !event || typeof event !== "string")
            return undefined
        var s = new Signal()
        elem.addEventListener(event, function (e) {
            s.push(elem[key || 'value'], e)
        })
        return s
    }

    function bindToSignal (signal, callback) {
        if(!signal || !callback || !callback.args) return undefined
        
        signal.registerListener(callback)
        return {_1:{__aN__ : function() { return signal }}}
    }

    function ampersand(pair) {
        console.log(pair);
    }

    return {
        createEventedSignal: createEventedSignal,
        bindToSignal: bindToSignal,
        ampersand: ampersand
    }
}()