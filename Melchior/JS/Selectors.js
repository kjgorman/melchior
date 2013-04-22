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
    
    this.toInput = function(elem) {
        return elem && elem.tagName === "INPUT" ? elem : null;
    }

    this.toDiv = function(elem) {
        return elem && elem.tagName === "DIV" ? elem : null;
    }

    this.toDocument = function(elem) {
        //the assumption here being that only the document has
        //this defined... #TODO - probably an actual value to check
        return elem && elem.doctype !== undefined ? elem : null;
    }

}

var Selectors = new Selector();
