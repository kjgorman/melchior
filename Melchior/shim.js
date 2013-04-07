!function() {

    this.addListener = function(elem, iden, callback) {
        return elem.addEventListener(iden, function() { 
            //applies the function...
            _e_(_e_(callback.__evN__())._1);
        });
    }

    this.set = function(elem, key, value) {
        return elem[key] = value;
    }

    return {
        addListener: this.addListener,
        set: this.set,
    }
}();