var Canvas = function () {
    "use strict";

    function circle(ctx, x, y, r, fill, stroke) {
        ctx.beginPath()
        ctx.arc(x, y, r, 0, 2*Math.PI, false)
        if(fill) {
            ctx.fillStyle = "#"+fill
            ctx.fill()
        }
        if(stroke) {
            ctx.strokeStyle = "#"+stroke
            ctx.stroke()
        }
    }

    function rectangle(ctx, x, y, w, h, fill, stroke) {
        if(fill) ctx.fillRect(x, y, w, h)
        if(stroke) ctx.strokeRect(x, y, w, h)
    }

    function canvasToContext(canvas) {
        if(canvas && canvas instanceof HTMLCanvasElement) return canvas.getContext("2d")
    }

    return {
        circle: circle,
        rectangle:rectangle,
        canvasToContext:canvasToContext
    }
}()