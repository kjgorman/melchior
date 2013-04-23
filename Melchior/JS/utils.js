!function() { 

    this.set = function(elem, key, value) {
        if(elem) elem[key] = value
        return elem[key]
    }

    this.get = function(elem, key) {
        return elem[key]
    }

    this.echo = function(input, output) {
        input.addEventListener('input', function() {
            output.innerHTML = input.value
        })
        return {_1:{__aN__ : function() { return input; }}}
    }

    this.id = function(arg) {
        return arg
    }

    this.count = 0;
    this.log = function(arg, message) {
        console.log((message ? message : "id: "), window["arg"+this.count++] = arg, this.count)
        return arg;
    }

    return {
        echo: this.echo,
        set: this.set,
        get: this.get, 
        selectById: this.select,
        id: this.id,
        log: this.log
    }

}();