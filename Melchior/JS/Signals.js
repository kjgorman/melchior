var Signals = function () {
    "use strict";

    var Signal = function (source) {
        if(window.debug) console.log("initialising signal with source: ", source)
        this.registeredListeners = []
        this._source = source
        this.accumulator = null
        this.__isSignal = true
    }

    Signal.prototype.registerListener = function(callback) {
        if(window.debug) console.log("registering listener", callback, this)
        this.registeredListeners.push(function (value) {
            if(!callback) return
            UHCFunction.call(callback, value)
        })
    }

    Signal.prototype.push = function(value, event) {
        if(window.debug) console.log("received", value, event)
        if(this.registeredListeners.length === 0) {
            if(window.debug) console.log("evaluating", value)
            evaluate(value)
        } else for(var i = 0, len = this.registeredListeners.length; i < len; i++) {
            this.registeredListeners[i](value, event);
        }
    }

    Signal.prototype.pipe = function(transform) {
        if(window.debug) if(window.debug) console.log("constructing with transform", transform)
        var newSignal = new Signal(this)
        this.registeredListeners.push(function (value, event) {
            var res = UHCFunction.call(transform, value, event)
            if(window.debug) console.log("pushing res", window.res = res, window.transform = transform, window.value = value)
            newSignal.push(res, event)       
        });
        return newSignal
    }


    Signal.prototype.__aN__ = function () {
        return this
    }

    Signal.prototype.source = function () {
        return this._source instanceof Signal ? this._source.source() : this._source;
    }


    function evaluate(thunk) {
        if(!thunk) return
        var curr = thunk
        do {                  //hmmmmmm
            if(window.debug) console.log("pre curr", window.curr = curr)
            if(curr._1) try {
                Lists.fromUHCList(curr).map(evaluate)
                break
            } catch(e) { curr = curr._1}
            if(curr instanceof Array && curr.length > 0) {
                curr.map(evaluate) 
                break
            } else try {
                curr = _e_(curr)
            } catch (e) {
                throw e
                return curr
            }
            if(window.debug) console.log("post curr", curr)
            if(hasPrimitiveValue(curr) || !curr) break
        } while(curr.hasOwnProperty("__eOrV__") || curr[0] || curr._1 || curr._F_)
    }

    function hasPrimitiveValue(val) {
        return !(val instanceof Object) || (val instanceof BigInteger)
    }

    function createEventedSignal (elem, event, key) {
        if(elem && elem[0] instanceof NodeList) elem = elem[0][0]
        if(elem && elem.length) elem = elem[0]
        if(!elem || !elem.addEventListener || !event || typeof event !== "string")
            return undefined
        var s = new Signal(elem)
        elem.addEventListener(event, function (e) {
            if(window.debug) console.log("detected", event, "sending to", s)
            s.push({
                __eOrV__: Dom.get(elem, key) || e,
                __aN__: function() { return this.__eOrV__ }
            }, e)
        })
        return s
    }

    function createPastDependentSignal (func, base, signal) {
        var newSignal = new Signal(signal)
        newSignal.accumulator = base
        signal.registerListener(function(value) {
            newSignal.accumulator = UHCFunction.apply(func, [value, newSignal.accumulator])
            newSignal.push(newSignal.accumulator)
        })
        return newSignal
    }

    function applicable (argument) {
        if(window.debug) console.log("wrapping in applicable node", argument)
        if(!(argument instanceof _F_)) return {
            __aN__ : function () { return argument }
        }
        else return argument
    }

    function ensureApplicable (argument) {
        if(window.debug) console.log("making an applicable", argument)
        if(argument._1) {
            return {
                __aN__: function() { return argument }
            }
        }
        if(argument instanceof Array && argument.length == 2) return argument[1]
        return argument
    }

    function terminate (signal, funct) {
        if(window.debug) console.log("terminating", signal, funct)
        signal.registerListener(function(value) {
            evaluate(UHCFunction.call(funct, value))
        })
    }

    return {
        createEventedSignal: createEventedSignal,
        createPastDependentSignal: createPastDependentSignal,
        applicable:applicable,
        ensureApplicable:ensureApplicable,
        Signal:Signal,
        evaluate: evaluate,
        terminate: terminate
    }
}()