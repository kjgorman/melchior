var UHCFunction = function () {
    function apply(func, value) {
        var argCopy = func.args.slice(), result 
        func.args = func.args.concat([value])
        result = func.__aN__([[]])
        func.args = argCopy
        return result
    }

    return {
        apply: apply
    }
}()