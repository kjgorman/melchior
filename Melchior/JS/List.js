var Lists = function(){
    "use strict";

    var List = function () { }

    function safeList (lst) {
        if(lst[0].length) lst = lst[0]
        return lst
    }

    function map(func, list) {
        console.log(window.func = func, window.list = list)
        list.map(function (l) {
            if(l.__eOrV__) l = l.__eOrV__
            var argsCopy = func.args.slice()
            func.args = func.args.concat([l])
            func.__aN__([[]])
            func.args = argsCopy
        })
        return func
    }

    return {
        safeList : safeList,
        map : map
    }
}()