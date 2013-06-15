var express      = require('express'),
    app          = express(),
    http         = require('http'),
    server       = http.createServer(app),
    socket       = require('socket.io').listen(server)

app.use('/assets', express.static(__dirname+"/assets"))

app.get('/', function(req, res) {
    res.sendfile('index.html')
})

app.get('/todo', function(req, res) {
    res.sendfile('todo.html')
})

app.get('/sorting', function(req, res) {
    res.sendfile('sorting.html')
})

app.get('/data', function(req, res) {
    var d = {data: "hello from node"}
    res.send(200, d)
})

app.get("/the_time", function(req, res) {
    res.send(200, {time: new Date().toTimeString()})
})

socket.on('connection', function(socket) {
    console.log("connection!")

    function sendHeartbeat() {
        socket.emit('heartbeat', {heart:"heartbeat"})
        setTimeout(sendHeartbeat, 10000)
    }
    sendHeartbeat()
})

console.log("~-~-~ server listening on 3001 ~-~-~")
server.listen(3001)