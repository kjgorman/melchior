var express = require('express'), 
    app = express()

app.use('/assets', express.static(__dirname+"/assets"))

app.get('/', function(req, res) {
    res.sendfile('index.html')
})

app.get('/data', function(req, res) {
    var d = {data: "hello from node"}
    res.send(200, d)
})

app.get("/the_time", function(req, res) {
    res.send(200, {time: new Date().toTimeString()})
})

console.log("~-~-~ server listening on 3001 ~-~-~")
app.listen(3001)