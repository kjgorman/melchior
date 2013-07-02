var Canvas = function () {
    "use strict";

    function circle(ctx, x, y, r) {
        ctx.beginPath()
        ctx.arc(x, y, r, 0, 2*Math.PI, false)
        ctx.fill()
        ctx.stroke()
    }

    function rectangle(ctx, x, y, w, h) {
        ctx.fillRect(x, y, w, h)
        ctx.strokeRect(x, y, w, h)
    }

    function canvasToContext(canvas) {
        if(canvas && canvas instanceof HTMLCanvasElement) return canvas.getContext("2d")
    }

    function setFillStyle(context, setting) {
        context.fillStyle = setting
        return context
    }

    function setStrokeStyle(context, setting) {
        context.strokeStyle = setting
        return context
    }

    return {
        circle: circle,
        rectangle:rectangle,
        canvasToContext:canvasToContext,
        setFillStyle:setFillStyle,
        setStrokeStyle:setStrokeStyle
    }
}()