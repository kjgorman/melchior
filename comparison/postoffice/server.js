var express      = require('express'),
    app          = express(),
    http         = require('http'),
    server       = http.createServer(app),
    socket       = require('socket.io').listen(server)

app.use("/resources", express.static(__dirname+"/resources"))
app.use(express.bodyParser())

app.get("/", function(req, res) {
    res.sendfile("index.html")
})

app.get("/melchior", function(req, res) {
    res.sendfile("resources/melchior/index.html")
})

app.get("/ember", function(req, res) {
    res.sendfile("resources/ember/index.html")
})

app.get("/flight", function(req, res) {
    res.sendfile("resources/flight/index.html")
})

app.get("/knockout", function(req, res) {
    res.sendfile("resources/knockout/index.html")
})

app.get("/jquery", function(req, res) {
    res.sendfile("resources/jquery/index.html")
})

app.post("/send", function(req, res) {
    socket.sockets.emit("/receive", {message:req.body.data, nick:req.body.nick})
    res.send(200, {status:"ok"})
})

socket.on("connection", function(socket) {
    console.log("socket connected")
})

console.log("\033[0;31m server up on 3003\033[0m")
server.listen(3003)