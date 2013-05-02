var UHCFunction = function () {
    "use strict";

    function applyNode(func, value) {
        console.log("applying", func, value)
        var argCopy, result
        argCopy = func.args.slice()
        if(value || value === "") func.args = func.args.concat([value])
        result = func.__aN__([[]])
        func.args = argCopy
        return result
    }

    function apply(func, value) {
        if(func instanceof _F_)
            return func.__evN__(value)
        else
            return applyNode(func, value)        
    }

    return {
        apply: apply
    }
}()