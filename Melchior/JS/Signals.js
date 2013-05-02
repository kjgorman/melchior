var Signals = function () {
    "use strict";

    var Signal = function () {
        this.registeredListeners = []
        this.__isSignal = true
    }

    Signal.prototype.registerListener = function(callback) {
        this.registeredListeners.push(function (value) {
            if(!callback || !callback.args) return
            UHCFunction.apply(callback, value)
        })
    }

    Signal.prototype.push = function(value) {
        for(var i = 0, len = this.registeredListeners.length; i < len; i++) {
            this.registeredListeners[i](value);
        }
    }

    Signal.prototype.pipe = function(transform) {
        var newSignal = new Signal()
        this.registeredListeners.push(function (value) {
            var res = UHCFunction.apply(transform, value)
            newSignal.push(res)
        });
        return newSignal
    }

    Signal.prototype.__aN__ = function () {
        return this
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
        console.log(signal, window.callback = callback)
        if(!signal || !callback || !callback.args) return undefined

        signal.registerListener(callback)
        return {
            _1: {
                __aN__ : signal.__aN__
            },
            __aN__: signal.__aN__
        }
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