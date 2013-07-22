!function () {

    var container = document.getElementById("js")
    var inputted = container.getElementsByClassName("file")
    var output = document.getElementById("js-out")
    container.innerHTML += inputted.length

    for(var i = 0; i < inputted.length; i++) {
        inputted[i].addEventListener("input", function(e) {
            var string = Array.prototype.reduce.call(inputted, function (a, b) {
                return a += b.value
            }, "")
            output.innerHTML = string
        })
    }
} ()