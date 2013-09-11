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
        if(window.debug) console.log("found browser xhr:" , xmlHttpRequest)
        return xmlHttpRequest
    }


    XHR.prototype.getXHR = function (method, resource) {
        if(!method || !resource) return
        var req = createXMLHttpRequest()
        if (!req) return

        req.open(method, resource, true /*async*/)

        return req
    }

    XHR.prototype.pipeXHRSignal = function (method, resource, signal) {
        var outSignal = new Signals.Signal(), thus = this
        if(window.debug) console.log("creating an XHR signal w/", method, resource, window.signal = signal)
        signal.registerListener(function(value) {
            var req = XHR.prototype.getXHR.call(this, method, resource)
            if(window.debug) console.log("requesting", resource, method, req)
            req.onreadystatechange = function() {
                if(window.debug) console.log("xhr got", req.response)
                if(window.debug) console.log("req.readystate", req.readystate)
                if(req.readyState === 4)
                    outSignal.push(req.response)
            }

            var payload = _e_(value)
            if(method === "POST") {
                req.setRequestHeader("content-type", "application/x-www-form-urlencoded")
                payload = tryEncodeValue(_e_(value))
            } else {
                req.setRequestHeader("content-type", "application/json; charset=utf-8")
            }
            req.send(payload)
        })

        return outSignal
    }

    function tryEncodeValue(value) {
        var res = value, json, key

        function parse(obj) {
            if(typeof obj !== "object") return obj
            var res = "{"
            for(var key in obj) {
                if(key === "__aN__") continue
                res+=('"'+key+'"'+':"'+parse(obj[key])+'",')
            }
            res = res.substring(0, res.length-1)
            res += "}"
            return res
        }

        try {
            json = JSON.parse(value)
            res = ""
            for(key in json) {
                if(key === "__aN__") continue
                res += key+"="+parse(json[key])+"&"
            }
        } catch (_) { }
        return encodeURI(res)
    }

    XHR.prototype.createXHRSignal = function (method, resource) {
        var outSignal = new Signal(this), req = this.getXHR(method, resource)
        req.onreadystatechange = function() {
            outSignal.push(req.readyState) //TODO -- what should this be? response...?
        }
        req.send()
        return outSignal
    }

    XHR.prototype.getRemote = function(method, url, signal) {
        if(method) return new this.pipeXHRSignal(method, url, signal)
        else try {
            return new Sockets.Socket(signal, url).Signal()
        } catch (e) {
            //revert to a xhr call?
            return new this.pipeXHRSignal("GET", url, signal)
        }
    }

    return new XHR()
}()