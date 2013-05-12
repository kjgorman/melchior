var XHR = function () {
    "use strict";

    var XHR = function () { }
    var XMLHttpFactories = [
        function () {return new XMLHttpRequest()},
        function () {return new ActiveXObject("Msxml2.XMLHTTP")},
        function () {return new ActiveXObject("Msxml3.XMLHTTP")},
        function () {return new ActiveXObject("Microsoft.XMLHTTP")}
    ]

    function createXMLHttpRequest() {
        var xmlHttpRequest = false;
        for (var i=0;i<XMLHttpFactories.length;i++) {
            try {
                xmlHttpRequest = XMLHttpFactories[i]()
            }
            catch (e) {
                continue
            }
            break
        }
        console.log("found browser xhr:" , xmlHttpRequest)
        return xmlHttpRequest
    }


    XHR.prototype.getXHR = function (method, resource) {
        if(!method || !resource) return
        var req = createXMLHttpRequest()
        if (!req) return

        req.open(method, resource, true /*async*/)

        if(method !== "GET") req.setRequestHeader("Content-type","application/x-www-form-encoded")
        return req
    }

    XHR.prototype.createXHRSignal = function (method, resource, signal) {        
        var outSignal = new Signals.Signal(signal)
        console.log("creating an XHR signal w/", method, resource, signal)
        signal.registerListener(function(value) {
            var req = this.getXHR(method, resource)
            console.log("requesting", resource, method, req)
            req.onreadystatechange = function() {
                console.log("xhr got", req.response)
                outSignal.push(req.response)
                console.log("pushed to", outSignal)
            }
            req.send(value) //should this send now?
            console.log("xhr signal", outSignal)
        })
        
        return outSignal
    }

    return new XHR()
}()