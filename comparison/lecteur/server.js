var express = require('express')
  , app = express()

var count = 0

app.use("/resources", express.static(__dirname+"/resources"))

app.get("/", function(req, res) {
    res.sendfile("index.html")
})

app.get("/ember", function(req, res) {
    res.sendfile("resources/ember/index.html")
})

app.get("/jquery", function(req, res) {
    res.sendfile("resources/jquery/index.html")
})

app.get("/flight", function(req, res) {
    res.sendfile("resources/flight/index.html")
})

app.get("/knockout", function(req, res) {
    res.sendfile("resources/knockout/index.html")
})

app.get("/melchior", function(req, res) {
    res.sendfile("resources/melchior/index.html")
})

console.log("\033[036m~~server up on 3004~~\033[0m")
app.listen(3004)