var express = require('express')
  , app = express()
  , chalk = require('chalk')

app.use("/resources", express.static(__dirname+"/resources"))

app.get("/", function (req, res) {
    res.sendfile("index.html")
})

app.get("/js", function (req, res) {
    res.sendfile("resources/js/index.html")
})

app.get("/melchior", function (req, res) {
    res.sendfile("resources/melchior/index.html")
})

console.log(chalk.cyan("server up on 3006"))
app.listen(3006)

/*
  thunk , and time leaks?
*/