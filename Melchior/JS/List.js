var Lists = function(){
    "use strict";

    var List = function () { }

    function lconcat (lst) {
        if(lst === null) return null
        if(!lst) return undefined
        return toUHCList(fromUHCList(lst).reduce(function(a, b) { return a.concat(b) }))
    }

    function safeList (lst) {
        window.debug && console.log("lst", lst)
        if(lst && lst[0].length) lst = lst[0]
        return lst
    }

    function map(func, list) {
        window.debug && console.log("window.func", window.func = func, list)
        if(!func || !func.__aN__ || typeof func.__aN__ !== "function" || func instanceof Array)
            return undefined
        if(!(list instanceof Array))
            return undefined
        var mapped = list.map(function (l) {
            var argsCopy = func.args.slice(), returnVal
            func.args = func.args.concat([l])
            returnVal = func.__aN__([[]])
            func.args = argsCopy
            return returnVal
        })

        return {
            __eOrV__ : toUHCList(mapped),
            __aN__ : function () { return this.__eOrV__ }
        }
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
            _2 : toUHCList(Array.prototype.slice.call(lst, 1))
        }
    }

    function fromUHCList(lst) {
        if(lst.__eOrV__) lst = lst.__eOrV__
        if(lst._tag_ === 1) return []
        var returned = []
        do {
            returned.push(lst._1.__eOrV__ || lst._1)
            lst = lst._2
        } while(lst._1 && lst._tag_ !== 1)
        return returned
    }

    function length(lst) {
        if(lst && lst.length) return lst.length
        var len = 0, cont = false
        do {
            cont = false
            lst = evaluatable(lst._2) ? _e_(lst._2) : lst._2
            len++
        } while (lst && (cont || lst._tag_ === 0))

        return len
    }

    function head(lst) {
        if(lst === null) return null
        if(!lst) return lst
        window.debug && console.log("trying to take head of the list", lst)
        if(!lst._1) return undefined
        window.debug && console.log("returning", lst._1)
        return lst._1
    }

    function emptyUHCList() {
        return toUHCList([])
    }

    return {
        lconcat : lconcat,
        length: length,
        safeList : safeList,
        map : map,
        fromUHCList : fromUHCList,
        toUHCList : toUHCList,
        emptyUHCList : emptyUHCList,
        head : head
    }
}()
