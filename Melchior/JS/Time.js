var Time = function () {
    "use strict";

    var Time = function () {
        this.current = new Signals.Signal()
        //override sampling function to return time string
        this.current.currently = function () {
            return (new Date()).toISOString()
        }
    }

    Time.prototype.currentI = function () {
        var s = new Signals.Signal()
        s.currently = function () {
            var d = new Date()
            return d.getTime()
        }
        return s
    }

    Time.prototype.every = function(period) {
        var initial = 0, signal = new Signals.Signal()

        function push(t) {
            signal.push(t)
            setTimeout(push, period, t+period)
        }
        setTimeout(push, period, initial)
        return signal
    }

    Time.prototype.after = function(timeout) {
        var signal = new Signals.Signal()
        function push(t) {
            signal.push(t)
        }
        setTimeout(push, timeout)
        return signal
    }

    Time.prototype.delay = function(period, signal) {
        var s = new Signals.Signal()
        signal.registerListener(function(value) {
            setTimeout(function() { s.push(value) }, period)
        })
        return s
    }

    Time.prototype.actual = function (thunk) {
        return thunk
    }

    Time.prototype.delta = function (signal) {
        return new Delta(signal).output
    }

    var Delta = function (signal) {
        this.output = new Signals.Signal()
        var prev = new Date().getTime(), thus = this
        signal.registerListener(function () {
            var curr = new Date().getTime()
            thus.output.push(curr - prev)
            prev = curr
        })
    }

    return new Time()

}()