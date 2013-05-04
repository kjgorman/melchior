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

}();