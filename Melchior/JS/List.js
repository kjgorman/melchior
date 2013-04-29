var Lists = function(){
    "use strict";

    var List = function () { }

    function lconcat (lst) {
        return toUHCList(lst._1)
    }

    function safeList (lst) {
        if(lst && lst[0].length) lst = lst[0]
        return lst
    }

    function map(func, list) {
        if(!func || !func.__aN__ || typeof func.__aN__ !== "function" || !list || !list.hasOwnProperty("length"))
            return undefined;
        var mapped = list.map(function (l) {
            var argsCopy = func.args.slice(), returnVal
            func.args = func.args.concat([l])
            returnVal = func.__aN__([[]])
            func.args = argsCopy
            return returnVal
        })

        return toUHCList(mapped)
    }

    function toUHCList(lst) {
        if(lst.length === 0) return {
            __eOrV__ : { _tag_: 1 }
        }
        else return {
            _tag_ : 0,
            _1 : {
                __eOrV__ : lst[0],
                __aN__ : function() { return lst[0] }
            },
            _2 : toUHCList(lst.slice(1))
        }
    }

    function fromUHCList(lst) {
        var returned = []
        do {
            returned.push(lst._1.__eOrV__)
            lst = lst._2
        } while(lst._1 && lst._tag_ !== 1)
        return returned
    }

    function length(lst) {
        if(lst && lst.length) return lst.length
        var len = 0
        do {
            lst = lst._2
            len++
        } while (lst && lst.__eOrV__ && lst.__eOrV__._tag_ !== 1)
        return len
    }

    return {
        lconcat : lconcat,
        length: length, 
        safeList : safeList,
        map : map,
        fromUHCList : fromUHCList
    }
}()