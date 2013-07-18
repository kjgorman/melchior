var Selectors = function () {
    "use strict";

    var Selector = function () { }

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
