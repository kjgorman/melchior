var express      = require('express'),
    app          = express(),
    http         = require('http'),
    server       = http.createServer(app),
    socket       = require('socket.io').listen(server)

app.use("/resources", express.static(__dirname+"/resources"))

app.get("/melchior", function(req, res) {
    res.sendfile("resources/melchior/index.html")
})

app.get("/js", function (req, res) {
    res.sendfile("resources/js/index.html")
})

app.get("/elm", function (req, res) {
    res.sendfile("resources/elm/bobble.html")
})

app.get("/elm-mini.js", function (req, res) {
    res.sendfile("resources/elm/elm-mini.js")
})

app.get("/", function (req, res) {
    res.sendfile("index.html")
})

console.log("\033[0;36m~~server up on 3004~~\033[0m")
server.listen(3004)