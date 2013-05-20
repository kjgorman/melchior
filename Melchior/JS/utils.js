!function() { 

    this.id = function(arg) {
        return arg
    }

    this.count = 0;
    this.log = function(arg, message) {
        if(window.debug) console.log((message ? message : "id: "), window["arg"+this.count++] = arg, this.count)
        return arg;
    }

}();