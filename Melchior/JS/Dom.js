var Dom = function() {
    "use strict";

    var DomOperations = function () { }

    DomOperations.prototype.addClass = function(element, classString) {
        console.log("adding", element, classString)
        if(element === null) return null
        if(!element || !classString) return undefined

        element.classList.add(classString)

        return {
            __aN__: function() { return classString }
        }
    }

    DomOperations.prototype.removeClass = function(element, classString) {
        console.log("removing", element, classString)
        if(element === null) return null
        if(!element || !classString) return undefined

        element.classList.remove(classString)

        return {
            __aN__: function() { return classString }
        }
    }

    DomOperations.prototype.toggle = function(element, classString) {
        if(element === null) return null
        if(!element || !classString) return undefined

        element.classList.toggle(classString)

        return {
            __aN__ : function () { return classString }
        }
    }

    DomOperations.prototype.siblings = function(element) {
        if(element === null) return null
        if(!element) return undefined
        if(!element.parentNode) return Lists.emptyUHCList()
        console.log("finding siblings of", element)
        console.log("returning approx.: ", element.parentNode.children)
        return Lists.toUHCList(Array.prototype.slice.call(element.parentNode.children).filter(function(e) {
            return e !== element
        }))
    }

    DomOperations.prototype.set = function(elem, key, value) {
        if(elem.length) elem = elem[0]
        if(elem) elem[key] = value
        return elem[key]
    }

    DomOperations.prototype.get = function(elem, key) {
        if (elem._1) elem = elem._1
        var ret = elem[key]

        if(ret) return ret
        if(elem.attributes && elem.attributes.getNamedItem(key)) {
            return elem.attributes.getNamedItem(key).value            
        }
        return elem
    }
    
    return new DomOperations()
}()