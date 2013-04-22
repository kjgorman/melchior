var Selector = function () {

    this.selectById = function(elem, pattern) {
        return elem.getElementById(pattern);
    }
  
    this.selectByClass = function(elem, pattern) {
        return elem.getElementsByClassName(pattern);
    }    
    
}

var Selectors = new Selector();
