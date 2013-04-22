var Selector = function () {

    this.selectById = function(elem, pattern) {
        return elem.getElementById(pattern);
    }
  
    this.selectByClass = function(elems, pattern) {
        var returned = [], i = 0, j = 0, nodelist = [];
        if(elems.length) {
            for(; i < elems.length; i++) {
                nodelist = elems[i];
                for(; j < nodelist.length; j++) {
                    returned.push.apply(returned, nodelist.item(j).getElementsByClassName(pattern));
                }
            }
        } else {
            returned.push(elems.getElementsByClassName(pattern));
        }
        return returned;
    }    
    
}

var Selectors = new Selector();
