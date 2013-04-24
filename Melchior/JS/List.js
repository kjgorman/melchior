var Lists = function(){
    "use strict";

    var List = function () { }

    function safeList (lst) {
        if(lst[0].length) lst = lst[0]
        return lst
    }

    function map(func, list) {
        if(!func || !func.__aN__ || typeof func.__aN__ !== "function" || !list || !list.hasOwnProperty("length"))
            return undefined;

        return list.map(function (l) {
            if(l.__eOrV__) l = l.__eOrV__
            var argsCopy = func.args.slice(), returnVal
            func.args = func.args.concat([l])
            returnVal = func.__aN__([[]])
            func.args = argsCopy
            return returnVal
        })
    }

    return {
        safeList : safeList,
        map : map
    }
}()