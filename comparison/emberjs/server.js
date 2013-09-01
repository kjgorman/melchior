var express = require('express')
  , chalk = require('chalk')
  , app = express()

app.use("/resources", express.static(__dirname+"/resources"))

app.get("/", function (req, res) {
    res.sendfile("index.html")
})

console.log(chalk.cyan('server up on 3007'))
app.listen(3007)