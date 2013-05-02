var Dom = function() {
    "use strict";

    var DomOperations = function () { }

    DomOperations.prototype.addClass = function(element, classString) {
        console.log("adding", element, classString)
        element.classList.add(classString)
        
        return {
            __aN__: function() { return classString }
        }
    }

    DomOperations.prototype.removeClass = function(element, classString) {
        console.log("removing", element, classString)
        element.classList.remove(classString)

        return {
            __aN__: function() { return classString }
        }
    }

    DomOperations.prototype.toggle = function(element, classString) {
        console.log("toggling", element, classString)
        if(element.classList.contains(classString))
            element.classList.remove(classString)
        else
            element.classList.add(classString)
        return {
            __aN__ : function () { return classString }
        }
    }

    DomOperations.prototype.siblings = function(element) {
        return Lists.toUHCList(Array.prototype.slice.call(element.parentNode.children).filter(function(e) {
            return e !== element
        }))
    }

    return new DomOperations()
}()