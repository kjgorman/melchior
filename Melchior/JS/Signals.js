var Signals = function () {
    "use strict";

    var Signal = function () {

        this.registeredListeners = []
        this.accumulator = null
        this.previous = null

        this.__isSignal = true
    }

    Signal.prototype.currently = function () {
        return this.accumulator
    }

    Signal.prototype.was = function () {
        return this.previous
    }

    Signal.prototype.registerListener = function(callback) {
        window.debug && console.log("registering listener", callback, this)
        this.registeredListeners.push(function (value) {
            if(!callback) return
            UHCFunction.call(callback, value)
        })
    }

    Signal.prototype.push = function(value, event) {
        window.debug && console.log("received", value, event)
        if(this.registeredListeners.length === 0) {
            window.debug && console.log("evaluating", value)
            evaluate(value)
        } else for(var i = 0, len = this.registeredListeners.length; i < len; i++) {
            this.registeredListeners[i](value, event);
        }
    }

    Signal.prototype.pipe = function(transform, base) {
        window.debug && console.log("constructing with transform", transform)

        var newSignal = new Signal(), shouldAccumulate = base !== undefined
        newSignal.accumulator = base

        this.registeredListeners.push(function (value, event) {

            if(_e_(value)._tag_ && _e_(value)._tag_ === -1) return //empty signal

            var res = UHCFunction.call(transform, value, event)
            newSignal.previous = newSignal.accumulator
            if(shouldAccumulate) {
                window.debug && console.log("Accumulating", value, newSignal.accumulator)
                newSignal.accumulator = UHCFunction.apply(transform, [value, newSignal.accumulator])
                newSignal.push(newSignal.accumulator)
            } else {
                window.debug && console.log("pushing res", window.res = res, window.transform = transform, window.value = value)
                newSignal.accumulator = res
                newSignal.push(res, event)
            }
        });
        return newSignal
    }

    Signal.prototype.__aN__ = function () { return this }

    Signal.prototype.sample = function () {
        window.debug && console.log("sampling ", this.currently())
        var sample = null
        if((sample = this.currently()) === undefined) {
            return emptySignal()
        } else if(sample.hasOwnProperty("_tag_") || typeof sample === "string") {
            return sample
        } else {
            return { __aN__: function () { return sample }}
        }
    }

    function previous (signal) {
        return signal.was()
    }

    function constant(value) {
        var s = new Signal()
        s.currently = function () { return value }
        return s
    }

    function evaluate(thunk) {
        if(!thunk) return
        var curr = thunk
        do {
            window.debug && console.log("pre curr", window.curr = curr)
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
            }
            if(curr instanceof _A_undersat_) { //what if its not io?
                UHCFunction.call(curr, [])
            }
            window.debug && console.log("post curr", curr)
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
        var s = new Signal()
        elem.addEventListener(event, function (e) {
            Events.applyNativeMapping(e)
            window.debug && console.log("detected", event, "sending to", s)
            s.push({
                __eOrV__: Dom.get(elem, key) || e,
                __aN__: function() { return this.__eOrV__ }
            }, e)
        })
        return s
    }

    function createPastDependentSignal (func, base, signal) { return signal.pipe(func, base) }

    function applicable (argument) {
        window.debug && console.log("wrapping in applicable node", argument)
        if(!(argument instanceof _F_)) return {
            __aN__ : function () { return argument }
        }
        else return argument
    }

    function createDelegate (event, query, key, element) {
        var selector = Query.createSelectorOf(query), signal = new Signal()
        Query.hub.addPatternForEvent(selector, event)
            .mediate(event, signal, key, element)
        return signal
    }

    function terminate (signal, funct) {
        window.debug && console.log("terminating", signal, funct)
        signal.registerListener(function(value) {
            if(_e_(value)._tag_ && _e_(value)._tag_ === -1) return //empty
            evaluate(UHCFunction.call(funct, value))
        })
    }

    function emptySignal () {
        return {
            __aN__: function() { return {_tag_: -1 } }
        }
    }

    function merge(s, t) {
        var u = new Signal()
        s.registerListener(function(value) {
            u.push(value)
        })
        t.registerListener(function(value) {
            u.push(value)
        })
        return u
    }

    return {
        createEventedSignal: createEventedSignal,
        createPastDependentSignal: createPastDependentSignal,
        applicable:applicable,
        Signal:Signal,
        evaluate: evaluate,
        terminate: terminate,
        createDelegate: createDelegate,
        constant: constant,
        emptySignal: emptySignal,
        previous: previous,
        merge: merge
    }
}()