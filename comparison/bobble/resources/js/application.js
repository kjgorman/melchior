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
                    p.x += p.vx
                    p.vx -= dv
                } else if (e.keyCode == u) {
                    if (p.y >= 350) {
                        p.vy -= 5 * dv
                        p.y += p.vy
                    } else {
                        p.x += p.vx
                        p.y += p.vy
                    }
                } else if (e.keyCode == r) {
                    p.x += p.vx
                    p.vx += dv
                }
            }
            movePlayer(p1, 65, 87, 68)
            movePlayer(p2, 37, 38, 39)
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
        function tick(p) {
            p.x += p.vx
            p.y += p.vy
            p.vx *= 0.9
            p.vy *= 0.9
        }
        lowerBound(p1)
        lowerBound(p2)
        tick(p1)
        tick(p2)
        ball.x += ball.vx
        ball.y += ball.vy
        ball.vy += 0.25
    }

    function collide(p1, p2, ball) {
        collideWithWalls(p1, 25)
        collideWithWalls(p2, 25)
        collideWithWalls(ball, 10)
        collideWithBall(p1, ball)
        collideWithBall(p2, ball)
    }

    function collideWithWalls (x, r) {
        if(x.x < r || x.x > (700 - r) || r > 10 && Math.abs(x.x-375) < r) {
            x.vx *= -1
            x.x += x.vx
        }
    }

    function collideWithBall (p, b) {
        if( ((p.x - b.x) * (p.x - b.x)) + ((p.y - b.y) * (p.y - b.y)) < (25 * 25)) {
            var n = normalisedVectorBetween(p, b)
            var a1 = dot({x:b.vx, y:b.vy}, n)
            var a2 = dot({x:p.vx, y:p.vy}, n)
            var op = (2*(a2-a1))/4
            var v = prod(-0.99, diff({x:b.vx, y:b.vy}, prod(op, prod(2, n))))
            b.x += 2*v.x
            b.y += 2*v.y
            b.vx += v.x
            b.vy += v.y
        }
    }

    function prod(scalar, vector) {
        return {x: scalar*vector.x, y: scalar*vector.y }
    }

    function diff(a, b) {
        return {x: a.x - b.x, y: a.y - b.y}
    }

    function dot (p, n) {
        return p.x * n.x + p.y * n.y
    }

    function normalisedVectorBetween(p, b) {
        var dx = p.x - b.x, dy = p.y - b.y
        var d = Math.sqrt(dx*dx + dy*dy)
        return { x:dx/d, y: dy/d }
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