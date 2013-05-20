var Signals = function () {
    "use strict";

    var Signal = function (source) {
        console.log("initialising signal with source: ", source)
        this.registeredListeners = []
        this._source = source
        this.__isSignal = true
    }

    Signal.prototype.registerListener = function(callback) {
        console.log("registering listener", callback, this)
        this.registeredListeners.push(function (value) {
            if(!callback) return
            UHCFunction.apply(callback, value)
        })
    }

    Signal.prototype.push = function(value, event) {
        console.log("received", value, event)
        if(this.registeredListeners.length === 0) {
            console.log("evaluating", value)
            evaluate(value)
        } else for(var i = 0, len = this.registeredListeners.length; i < len; i++) {
            this.registeredListeners[i](value, event);
        }
    }

    Signal.prototype.pipe = function(transform) {
        console.log("constructing with transform", transform)
        var newSignal = new Signal(this)
        this.registeredListeners.push(function (value, event) {
            var res = UHCFunction.apply(transform, value, event)
            console.log("pushing res", window.res = res, window.transform = transform, window.value = value)
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
            console.log("pre curr", window.curr = curr)
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
                return curr
            }
            console.log("post curr", curr)
            if(hasPrimitiveValue(curr) || !curr) break
        } while(curr.hasOwnProperty("__eOrV__") || curr[0] || curr._1 || curr._F_)
    }

    function hasPrimitiveValue(val) {
        return !(val instanceof Object)
    }

    function createEventedSignal (elem, event, key) {
        if(elem && elem[0] instanceof NodeList) elem = elem[0][0]
        if(elem && elem.length) elem = elem[0]
        if(!elem || !elem.addEventListener || !event || typeof event !== "string")
            return undefined
        var s = new Signal(elem)
        elem.addEventListener(event, function (e) {
            console.log("detected", event, "sending to", s)
            s.push({
                __eOrV__: Dom.get(elem, key) || e,
                __aN__: function() { return this.__eOrV__ }
            }, e)
        })
        return s
    }

    function applicable (argument) {
        console.log("wrapping in applicable node", argument)
        if(!(argument instanceof _F_)) return {
            __aN__ : function () { return argument }
        }
        else return argument
    }

    function signalIO(signalVal) {
        console.log("signal io", signalVal)
        var res = _e_(signalVal._1)
        if(res) UHCFunction.apply(res, [])
        console.log("doing some manual signal io", signalVal, window.sigval = res)
        return res
    }

    return {
        createEventedSignal: createEventedSignal,
        applicable:applicable,
        signalIO:signalIO,
        Signal:Signal,
        evaluate: evaluate
    }
}()