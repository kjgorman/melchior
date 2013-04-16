!function() {

    this.addListener = function(elem, iden, callback) {
        return elem.addEventListener(iden, function() { 
            _e_(_e_(callback.__evN__())._1);
        });
    }
    
    this.id = function(a) {
        return a;
    }

    this.select = function(elem, pattern) {         
        return _e_(elem._1).getElementById(pattern);
    }

    this.set = function(elem, key, value) {
        return elem[key] = value;
    }

    this.get = function(elem, key) {
        return elem[key];
    }

    return {
        addListener: this.addListener,
        set: this.set,
        get: this.get, 
        select: this.select,
        id: this.id
    }
}();