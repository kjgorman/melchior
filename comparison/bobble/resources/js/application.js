!function () {

    function main () {
        var canvas = document.getElementById("canvas")
          , context = canvas.getContext("2d")

        playGame(context, new Player(50, 350), new Player(650, 350), new Ball())
    }

    function Player (x, y, vx, vy, score) {
        this.x = x || 50,
        this.y = y || 350,
        this.vx = vx || 0,
        this.vy = vy || 0,
        this.score = score || 0
    }

    function Ball (x, y, vx, vy) {
        this.x = x || 350,
        this.y = y || 50,
        this.vx = vx || 4,
        this.vy = vy || 2
    }

    function playGame(ctx, p1, p2, ball) {
        registerKeyListeners(p1, p2)
        startGameLoop(ctx, p1, p2, ball)
    }

    function registerKeyListeners(p1, p2) {
        var dv = 5.0
        document.addEventListener("keydown", function (e) {
            function movePlayer(p, l, u, r) {
                if (e.keyCode == l) {
                    p.x -= p1.vx
                    p.vx -= dv
                } else if (e.keyCode == u) {
                    if (e.y >= 350) {
                        p.y += p.vy
                        p.vy -= 5 * dv
                    } else {
                        p.x += p.vx
                        p.y += p.vy
                        p.vx *= 0.9
                        p.vy *= 0.9
                    }
                } else if (e.keyCode == r) {
                    p.x += vx
                    p.vx += dv
                } else {
                    p.x += p.vx
                    p.y += p.vy
                    p.vx *= 0.9
                    p.vy *= 0.9
                }

                movePlayer(p1, 37, 38, 39)
                movePlayer(p2, 65, 87, 68)
            }
        })
    }

    function startGameLoop (ctx, p1, p2, ball) {
        !function loop(ctx, p1, p2, ball) {
            drawBackground(ctx)
            move(p1, p2, ball)
            collide(p1, p2, ball)
            score(p1, p2, ball)
            drawGame(ctx, p1, p2, ball)
            setTimeout(function () {
                loop(ctx, p1, p2, ball)
            }, 17)
        }(ctx, p1, p2, ball)
    }

    function move (p1, p2, ball) {
        function lowerBound(p) {
            if (p.y > 350) p.y = 350
            p.vy += 0.5
        }
        lowerBound(p1)
        lowerBound(p2)
        ball.x += ball.vx
        ball.y += ball.vy
        ball.vy += 0.25
    }

    function collide(p1, p2, ball) {

    }

    function score(p1, p2, ball) {
        if(ball.y > 360) {
            if(ball.x < 375) p2.score += 1
            else p1.score += 1
            ball.x = 350
            ball.y = 50
            ball.vx = 4
            ball.vy = 2
        }
    }

    function drawGame(ctx, p1, p2, ball) {
        ctx.font = "40pt Helvetica"
        ctx.fillText(p1.score, 25, 50)
        ctx.fillText(p2.score, 650, 50)
        ctx.fillStyle = "#FF0000"
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, 25, 0, 2*Math.PI, false)
        ctx.fill()
        ctx.stroke()
        ctx.fillStyle = "#0000FF"
        ctx.beginPath()
        ctx.arc(p2.x, p2.y, 25, 0, 2*Math.PI, false)
        ctx.fill()
        ctx.stroke()
        ctx.fillStyle = "#00FF00"
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, 10, 0, 2*Math.PI, false)
        ctx.fill()
        ctx.stroke()
    }

    function drawBackground(ctx) {
        ctx.fillStyle = "#999"
        ctx.fillRect(0, 350, 750, 400)
        ctx.fillStyle = "#FFF"
        ctx.fillRect(0, 0, 750, 350)
        ctx.fillStyle = "#3F3"
        ctx.fillRect(375, 320, 1, 60)
    }

    main()
} ()