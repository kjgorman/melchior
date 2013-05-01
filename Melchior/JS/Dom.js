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

    DomOperations.prototype.siblings = function(element) {
        return Lists.toUHCList(Array.prototype.slice.call(element.parentNode.children))
    }

    return new DomOperations()
}()