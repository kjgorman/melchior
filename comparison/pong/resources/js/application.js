!function () {

    function main () {
        var p1 = new Player(15, 200, 0)
          , p2 = new Player(675, 200, 0)
          , b  = new Ball(350, 200, 5, 5)

        var keymap = initiateKeyMap(keymap)
        runGame(p1, p2, b, keymap)
    }

    function initiateKeyMap() {
        var map = {}
        document.addEventListener("keydown", function (e) {
            switch(e.keyCode) {
            case 87:
            case 83:
            case 38:
            case 40:
                map[e.keyCode] = true
            default:
                break
            }
        })

        document.addEventListener("keyup", function (e) {
            switch(e.keyCode) {
            case 87:
            case 83:
            case 38:
            case 40:
                map[e.keyCode] = false
            default:
                break
            }
        })
        return map
    }

    function runGame(p1, p2, b, k) {
        fillBackground()
        step(p1, p2, b, k)
        drawState(p1, p2, b)
        setTimeout(function () {
            runGame(p1, p2, b, k)
        }, 16)
    }

    function fillBackground() {
        var canvas = document.getElementById("canvas")
          , context = canvas.getContext("2d")

        context.fillStyle = "#3C643C"
        context.fillRect(0, 0, 700, 400)
    }

    function step(p1, p2, b, k) {
        move(p1, k, 87, 83)
        move(p2, k, 38, 40)
        b.x += b.vx
        b.y += b.vy
        collide(p1, p2, b)
        score(p1, p2, b)
    }

    function move(p, k, u, d) {
        if(k[u])
            p.y -= 10
        if(k[d])
            p.y += 10
    }

    function collide(p1, p2, b) {
        collideWall(p1)
        collideWall(p2)
        collideBall(b)
        collidePlayers(p1, p2, b)
    }

    function collideWall(p) {
        if(p.y < 35) p.y = 35
        if(p.y > 365) p.y = 365
    }

    function collideBall(b) {
        if(b.y < 10 || b.y > 390) b.vy *= -1
    }

    function collidePlayers(p1, p2, b) {
        collidePlayer(p1, b)
        collidePlayer(p2, b)
        function collidePlayer(p, b) {
            if(Math.abs(p.x-b.x) < 10 && Math.abs(p.y - b.y) < 35) {
                b.vx *= -1
            }
        }
    }

    function score(p1, p2, b) {
        if(b.x < 0) p1.score += 1
        if(b.x > 700) p2.score += 1
        if(b.x < 0 || b.x > 700) {
            b.x = 350
            b.y = 200
            b.vx = 5
            b.vy = 5
        }
    }

    function drawState(p1, p2, b) {
        var canvas = document.getElementById("canvas")
          , context = canvas.getContext("2d")

        context.fillStyle = "#FFF"
        context.font = "20pt Helvetica"
        context.fillRect(p1.x-10, p1.y-35, 20, 70)
        context.fillRect(p2.x, p2.y-35, 20, 70)
        context.beginPath()
        context.arc(b.x, b.y, 10, 0, 2*Math.PI, false)
        context.fill()
        context.stroke()
        context.fillText(p1.score, 100, 50)
        context.fillText(p2.score, 600, 50)
    }

    function Player (x, y, s) {
        this.x = x,
        this.y = y,
        this.score = s
    }

    function Ball (x, y, vx, vy) {
        this.x = x,
        this.y = y,
        this.vx = vx,
        this.vy = vy
    }


    main()
}()