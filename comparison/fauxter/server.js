var express = require('express')
  , faker = require('./Faker')
  , app = express();

var count = 0;

app.use("/resources", express.static(__dirname+"/resources"));

app.get("/homes", function(req, res) {
    res.send(200, {homes: [{
      id: ++count,
      author: faker.Name.findName(),
      body: faker.Lorem.words(10)
    }]});
});

app.get("/next", function(req, res) {
    res.send(200, {author: faker.Name.findName(), body: faker.Lorem.words(10).join(" ")})
});

app.get("/", function(req, res) {
    res.sendfile("index.html");
});

app.get("/ember", function(req, res) {
    res.sendfile("resources/ember/index.html");
});

app.get("/jquery", function(req, res) {
    res.sendfile("resources/jquery/index.html");
});

app.get("/flight", function(req, res) {
    res.sendfile("resources/flight/index.html");
});

app.get("/knockout", function(req, res) {
    res.sendfile("resources/knockout/index.html");
});

app.get("/melchior", function(req, res) {
    res.sendfile("resources/melchior/index.html");
});

console.log("Server up on: "+ 3002);
app.listen(3002);