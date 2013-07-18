!function () {

    function Datum (from) {

        if(from && from.header)
            this.header = from.header
        else this.header = "header missing"

        if(from && from.body)
            this.body = from.body
        else this.body = "body missing"

        if(from && from.footer)
            this.footer = from.footer
        else this.footer = "footer missing"
    }

    Datum.prototype.toHtml = function () {
        var value = "<div>"
        value += "<div class='header'>"+this.header+"</div>"
        value += "<div class='body'>"+this.body+"</div>"
        value += "<div class='footer'>"+this.footer+"</div>"
        value += "</div>"
        return value
    }

    function run () {
        var output = document.getElementById("js-output")
        document.addEventListener("click", function () {
            appendDatum(output)
        })
    }

    function appendDatum (element) {
        getNewDatum(function (datum) {
            var fragment = document.createElement("div")
            fragment.innerHTML = datum.toHtml()
            element.appendChild(fragment.firstChild)
        })
    }

    function getNewDatum (callback) {
        var request = getXHR()
        request.open("GET", "/data", true)
        request.onreadystatechange = function () {
            var json
            if(request.readyState == 4) {
                try { json = JSON.parse(request.response) }
                catch (e) { return }
                callback(new Datum(json))
            }

        }
        request.send()
    }

    function getXHR() {
        var factories = [
            function () { return new XMLHttpRequest() },
            function () { return new ActiveXObject("Msxml2.XMLHTTP") },
            function () { return new ActiveXObject("Msxml3.XMLHTTP") },
            function () { return new ActiveXObject("Microsoft.XMLHTTP") }
        ], i = 0, request

        for(; i < factories.length; i++) {
            try { request = factories[i].call() } catch (e) { continue }
        }
        if(!request)
            throw new Error("Could not find an XHR factory")

        return request
    }


    run()
} ()