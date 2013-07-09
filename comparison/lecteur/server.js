var express = require('express')
  , app = express()

var count = 0

app.use("/resources", express.static(__dirname+"/resources"))
app.use(express.bodyParser())

app.get("/", function(req, res) {
    res.sendfile("index.html")
})

app.get("/ember", function(req, res) {
    res.sendfile("resources/ember/index.html")
})

app.get("/jquery", function(req, res) {
    res.sendfile("resources/jquery/index.html")
})

app.get("/flight", function(req, res) {
    res.sendfile("resources/flight/index.html")
})

app.get("/knockout", function(req, res) {
    res.sendfile("resources/knockout/index.html")
})

app.get("/melchior", function(req, res) {
    res.sendfile("resources/melchior/index.html")
})

app.post("/post", function(req, res) {
    res.send(200, posts[req.body.id])
})

var next = 0
app.get("/next", function(req, res) {
    res.send(200, posts[++next])
})

var posts = {
    1: {title:"Bottom-up Type Annotation with the Cofree Comonad"
        , body:"How do we add extra information to a tree? This has been called The AST Typing Problem. \
            After being hit with this problem in Roy's new type-inference \
            engine, I tried figuring out how to represent the algorithm. I \
            eventually realised that it looked like a comonadic operation. Turns \
            out it's been done before but I couldn't find any complete example."
        , iden:1
       },
    2: {title:"Carberp Code Leak Stokes Copycat Fears"
        , body:"The source code for 'Carberp' — a botnet creation kit coded by a team \
            of at least two dozen hackers who used it to relieve banks of an \
            estimated $250 million — has been posted online for anyone to \
            that its publication will spawn new hybrid strains of sophisticated \
            banking malware."
        , iden:2
       },
    3: { title:"Deleting files on GitHub"
         , body:"You know all those files you’ve been creating, editing, moving, and \
            renaming? Well, you’ll be glad to know that you can now remove them \
            using the web-based interface too! Simply view any file in your \
            repository, click the delete button at the top, and commit the \
            removal just like any other web-based edit."
         , iden:3
       }
}
/*            download. The code leak offers security experts a fascinating and \
            somewhat rare glimpse into the malcoding economy, but many also worry \*/
console.log("\033[036m~~server up on 3004~~\033[0m")
app.listen(3004)