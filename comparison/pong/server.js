var express      = require('express'),
    app          = express()

app.use("/resources", express.static(__dirname+"/resources"))

app.get("/melchior", function(req, res) {
    res.sendfile("resources/melchior/index.html")
})

app.get("/js", function (req, res) {
    res.sendfile("resources/js/index.html")
})

app.get("/elm", function (req, res) {
    res.sendfile("resources/elm/application.html")
})

app.get("/elm-mini.js", function (req, res) {
    res.sendfile("resources/elm/elm-mini.js")
})

app.get("/", function (req, res) {
    res.sendfile("index.html")
})

console.log("\033[0;36m~~server up on 3004~~\033[0m")
app.listen(3004)