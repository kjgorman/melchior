var express = require('express')
  , app = express()

app.use("/bootstrap", express.static(__dirname+"/bootstrap"))

app.get("/melchior/melchior.js", function (req, res) {
    res.sendfile("melchior/melchior.js")
})

app.get(/\/(\w+)$/, function (req, res) {
    res.sendfile(req.params[0]+".html")
})

app.get(/\/(\w+)\/\1\.js$/, function (req, res) {
    res.sendfile(req.params[0]+"/"+req.params[0]+".js")
})

app.get(/\/(\w+)\/\1hs\.js$/, function (req, res) {
    res.sendfile(req.params[0]+"/"+req.params[0]+"hs.js")
})

console.log("\033[036m~~server up on 3005~~\033[0m")
app.listen(3005)