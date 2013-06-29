var UHCFunction = function () {
    "use strict";

    Object.prototype.__aN__ = function () { return this }

    function applyNode(func, value) {
        window.debug && console.log("applying node", window.func = func, window.val = value)
        var argCopy, result
        argCopy = func.args ? func.args.slice() : func.args = []
        if(value || value === "" || value === 0) func.args = func.args.concat([value])
        result = func.__aN__([[]])
        func.args = argCopy
        return result
    }

    function call(func, value) {
        window.debug && console.log("calling", func, value)
        if(func instanceof _F_) {
            return func.__evN__(value)
        } else if(func instanceof Function)
            return func(value)
        else
            return applyNode(func, value)
    }

    function apply(func, value) {
        window.debug && console.log("applying", func, value)
        if(func instanceof _F_) {
            return func.__evN__.apply(func, value)
        } else if(func instanceof Function)
            return func.apply(func, value)
        else
            return applyNode(func, value)
    }

    return {
        call : call,
        apply: apply
    }
}()