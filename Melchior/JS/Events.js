var Events = function() {
    "use strict";

    var Event = function () { }

    Event.prototype.targetOf = function(evt) {
        return evt ? evt.target || evt.source : evt
    }

    return new Event()
}()