var Signals = function () {
    "use strict";

    var Signal = function (source) {
        console.log("initialising signal with source: ", source)
        this.registeredListeners = []
        this.source = source
        this.__isSignal = true
    }

    Signal.prototype.registerListener = function(callback) {
        this.registeredListeners.push(function (value) {
            if(!callback || !callback.args) return
            UHCFunction.apply(callback, value)
        })
    }

    Signal.prototype.push = function(value, event) {
        for(var i = 0, len = this.registeredListeners.length; i < len; i++) {
            this.registeredListeners[i](value, event);
        }
    }

    Signal.prototype.pipe = function(transform) {
        var newSignal = new Signal(this)
        this.registeredListeners.push(function (value, event) {
            var res = UHCFunction.apply(transform, value, event)
            console.log("pushing res", res, transform, value)
            newSignal.push(res, event)
        });
        return newSignal
    }

    Signal.prototype.__aN__ = function () {
        return this
    }

    Signal.prototype.source = function () {
        return this.source instanceof Signal ? this.source.source : this.source;
    }

    function createEventedSignal (elem, event, key) {
        if(elem && elem[0] instanceof NodeList) elem = elem[0][0]
        if(elem && elem.length) elem = elem[0]
        if(!elem || !elem.addEventListener || !event || typeof event !== "string")
            return undefined
        var s = new Signal(elem)
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

    function source (signal) {
        if(signal === null) return null
        if(!signal) return signal

        return Signal.prototype.source.call(signal)
    }

    return {
        createEventedSignal: createEventedSignal,
        bindToSignal: bindToSignal,
        source:source
    }
}()