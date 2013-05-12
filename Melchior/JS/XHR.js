var XHR = function () {
    "use strict";

    var XHR = function () { }
    var XMLHttpFactories = [
        function () {return new XMLHttpRequest()},
        function () {return new ActiveXObject("Msxml2.XMLHTTP")},
        function () {return new ActiveXObject("Msxml3.XMLHTTP")},
        function () {return new ActiveXObject("Microsoft.XMLHTTP")}
    ]

    function createXMLHTTPRequest() {
        var xmlHttpRequest = false;
        for (var i=0;i<XMLHttpFactories.length;i++) {
            try {
                xmlhttp = XMLHttpFactories[i]()
            }
            catch (e) {
                continue
            }
            break
        }
        return xmlHttpRequest
    }


    XHR.prototype.getXHR = function (method, resource) {
        if(!method || !resource) return
        var xhr = createXMLHttpRequest()
        if (!req) return

        req.open(method, resource, true /*async*/)
        req.setRequestHeader("User-agent","Melchior/Signals-0.0.1")
        if(method !== "GET") req.setRequestHeader("Content-type","application/x-www-form-encoded")
        
    }

    XHR.prototype.createXHRSignal = function (signal, method, resource) {
        var outSignal = new Signal(this)
        signal.registerListener(function(value) {
            var req = getXHR()
            req.onreadystatechange = function() {
                if(req.readyState === 4) outSignal.push(req.response)
                else return
            }
            req.send(value)
        })
        return outSignal
    }

    return new XHR()
}()