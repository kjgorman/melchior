!function() {

    this.selectById = function(elem, pattern) {
        return elem.getElementById(pattern);
    }

    this.set = function(elem, key, value) {
        return elem[key] = value;
    }

    this.get = function(elem, key) {
        return elem[key];
    }

    this.echo = function(input, output) {
        input.addEventListener('input', function() {
            output.innerHTML = input.value;
        });
        return input;
    }

    this.id = function(arg) {
        return arg;
    }

    return {
        echo: this.echo,
        set: this.set,
        get: this.get, 
        selectById: this.select,
        id: this.id
    }
}();