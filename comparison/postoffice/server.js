var express = require('express')
  , app = express()

app.use("/resources", express.static(__dirname+"/resources"))

app.get("/", function(req, res) {
    res.sendfile("index.html")
})

app.get("/melchior", function(res, res) {
    res.sendfile("resources/melchior/index.html")
})

app.get("/ember", function(res, res) {
    res.sendfile("resources/ember/index.html")
})

app.get("/flight", function(res, res) {
    res.sendfile("resources/flight/index.html")
})

app.get("/knockout", function(res, res) {
    res.sendfile("resources/knockout/index.html")
})

app.get("/jquery", function(res, res) {
    res.sendfile("resources/jquery/index.html")
})


console.log("\033[0;31m server up on 3003\033[0m")
app.listen(3003)