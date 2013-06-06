var Time = function () {
    "use strict";

    var Time = function () {
        this.current = new Signals.Signal(this)
        //override sampling function to return time string
        this.current.currently = function () {
            return (new Date()).toISOString()
        }
    }

    Time.prototype.currentI = function () {
        var s = new Signal(this)
        s.currently = function () {
            return (new Date()).getTime()
        }
        return s
    }

    Time.prototype.every = function(period) {
        var initial = 0, signal = new Signals.Signal(this)

        function push(t) {
            signal.push(t)
            setTimeout(push, period, t+period)
        }
        setTimeout(push, period, initial)
        return signal
    }

    Time.prototype.after = function(timeout) {
        var signal = new Signals.Signal(this)
        function push(t) {
            signal.push(t)
        }
        setTimeout(push, timeout)
        return signal
    }

    Time.prototype.delay = function(period, signal) {
        var s = new Signals.Signal(signal)
        signal.registerListener(function(value) {
            setTimeout(function() { s.push(value) }, period)
        })
        return s
    }

    return new Time()

}()