!function() { 

    this.set = function(elem, key, value) {
        if(elem.length) elem = elem[0]
        if(elem) elem[key] = value
        return elem[key]
    }

    this.get = function(elem, key) {
        if (elem._1) elem = elem._1
        return elem[key]
    }

    this.id = function(arg) {
        return arg
    }

    this.count = 0;
    this.log = function(arg, message) {
        console.log((message ? message : "id: "), window["arg"+this.count++] = arg, this.count)
        return arg;
    }

    this.reversal = function (str) {
        var ret = "", i=str.length
        for(;i > 0; i--) ret += str[i] || ""
        return ret
    }

    this.addClass = function(element, classString) {
        console.log("adding", element, classString)
        element.classList.add(classString)
        
        return {
            __aN__: function() { return classString }
        }
    }

    this.removeClass = function(element, classString) {
        console.log("removing", element, classString)
        element.classList.remove(classString)

        return {
            __aN__: function() { return classString }
        }
    }

    this.siblings = function(element) {
        return Lists.toUHCList(Array.prototype.slice.call(element.parentNode.children))
    }

    return {
        set: this.set,
        get: this.get, 
        addClass: this.addClass,
        removeClass: this.removeClass,
        siblings: this.siblings,
        id: this.id,
        log: this.log
    }

}();