!function() {

    this.addListener = function(elem, iden, callback) {
        return elem.addEventListener(iden, function() { 
            _e_(_e_(callback.__evN__())._1);
        });
    }
    
    this.selectById = function(elem, pattern) {
        console.log(window.dbg = elem);;
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