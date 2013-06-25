var express = require('express')
  , app     = express()


app.use("/resources", express.static(__dirname+"/resources"))

app.get("/", function (req, res) {
    res.sendfile("index.html")
})

console.log("\033[0;31m~~~~~~(3000)~~~~~\033[0m")
app.listen(3000)