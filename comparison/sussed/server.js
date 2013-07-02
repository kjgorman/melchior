var express = require('express')
  , app     = express()


app.use("/resources", express.static(__dirname+"/resources"))

app.get("/", function (req, res) {
    res.sendfile("index.html")
})

app.get("/numbers", function (req, res) {
    res.send(200, generateNumbers().join(","))
})

function generateNumbers () {
    var result = [], i = 0
    for(;i<500;i++) {
        result.push(Math.floor(Math.random()*1000))
    }
    return result
}

console.log("\033[0;31m~~~~~~(3000)~~~~~\033[0m")
app.listen(3000)