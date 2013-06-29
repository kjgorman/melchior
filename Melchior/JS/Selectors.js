var Selectors = function () {
    "use strict";

    var Selector = function () { }

    function flatten (lst) {
        var i = 0, j, returned = []
        for(; i < lst.length; i++) {
            if(lst[i] instanceof NodeList) {
                for(j = 0; j < lst[i].length; j++) {
                    returned.push(lst[i][j])
                }
            } else returned.push.apply(lst[i])
        }
        return returned
    }

    Selector.prototype.selectById = function(elem, pattern) {
        window.debug && console.log(elem, pattern)
        return [elem.getElementById(pattern)]
    }

    Selector.prototype.selectByClass = function(elems, pattern) {
        var returned = [], i = 0, j = 0, nodelist = []
        if(elems.length) {
            for(; i < elems.length; i++) {
                nodelist = elems[i];
                if(elems[i].classList && elems[i].classList.contains(pattern)) returned.push(elems[i])
                for(; j < nodelist.length; j++) {
                    returned.push.apply(returned, nodelist.item(j).getElementsByClassName(pattern))
                }
            }
        } else {
            if(elems && elems.classList &&elems.classList.contains(pattern)) returned.push(elems)
            returned.push(elems.getElementsByClassName(pattern))
        }
        window.debug && console.log("flattening", returned, flatten(returned))
        return flatten(returned)
    }

    Selector.prototype.selectByTag = function(elems, pattern) {
        var returned = [], i = 0, j = 0, nodeList = []
        if(elems.length) {
            for(; i < elems.length; i++) {
                nodeList = elems[i]
                if(elems[i].tagName && elems[i].tagName === pattern) returned.push(elems[i])
                for(; j < nodeList.length; j++) {
                    returned.push.apply(returned, nodeList.item(j).getElementsByTagName(pattern))
                }
            }
        } else {
            if(elems && elems.tagName && elems.tagName === pattern) returned.push(elems)
            returned.push(elems.getElementsByTagName(pattern))
        }

        return returned
    }

    Selector.prototype.toInput = function(elem) {
        if(elem && elem.length) {
            return elem.map(oneToOneToInput).filter(function(e) { return e !== null; })
        } else {
            return oneToOneToInput(elem)
        }
    }

    var oneToOneToInput = function (elem) {
        return elem && elem.tagName === "INPUT" ? elem : null
    }

    Selector.prototype.toDiv = function(elem) {
        if(elem && elem.length) {
            return elem.map(oneToOneToDiv).filter(function (e) { return e !== null })
        } else {
            return oneToOneToDiv(elem)
        }
    }

    var oneToOneToDiv = function (elem) {
        return elem && elem.tagName === "DIV" ? elem : null
    }

    Selector.prototype.toSpan = function(elem) {
        if(elem && elem.length) {
            return elem.map(oneToOneToSpan).filter(function (e) { return e !== null })
        } else {
            return oneToOneToSpan(elem)
        }
    }

    var oneToOneToSpan = function (elem) {
        return elem && elem.tagName === "SPAN" ? elem : null
    }


    Selector.prototype.toDocument = function(elem) {
        return elem ? elem instanceof HTMLDocument ? elem : null : null
    }


    /***
     * 
     */
    
    Selector.prototype.idEq = function(el_a, idS) {
        return el_a.id === idS ? $UHC.$Base.$True__ : $UHC.$Base.$False__
    }

    Selector.prototype.clEq = function(el_a, clsName) {
        if(el_a instanceof HTMLElement && el_a.classList.contains(clsName)) {
            return $UHC.$Base.$True__
        } else {
            return $UHC.$Base.$False__
        }
    }

    Selector.prototype.tag = function(node, tagName) {
        if(node.tagName === tagName.toUpperCase())
            return $UHC.$Base.$True__
        else
            return $UHC.$Base.$False__
    }

    Selector.prototype.children = function(el) {

        var ret = [], fringe = Array.prototype.slice.call(el.childNodes)
        while(fringe.length > 0) {
            if(fringe[0] instanceof HTMLElement) ret.push(fringe[0])
            fringe.push.apply(fringe, fringe[0].childNodes)
            fringe = fringe.slice(1)
        }

        return Lists.toUHCList(ret)
    }

    Selector.prototype.runSelector = function(sel) {
        window.debug && console.log("how exactly do I run ", sel)
        return Lists.emptyUHCList();
    }

    return new Selector()
}()
