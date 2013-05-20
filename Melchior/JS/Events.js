var Events = function() {
    "use strict";

    var Event = function () { }

    Event.prototype.targetOf = function(evt) {
        return evt ? evt.target || evt.source : evt
    }

    Event.prototype.coordinates = function(evt) {
        if(window.debug) console.log("EVENTING ::: ", evt)
        return [evt.pageX, evt.pageY]
    }

    return new Event()
}()