var Sockets = {}

Sockets._current = null

Sockets.Socket = function Socket (signal, namespace) {
    "use strict";

    if(!('WebSocket' in window)) throw new Error("Websockets not supported in this browser")

    var thus = this
    this.connection = io ? io.connect('/') : new WebSocket("ws://localhost")
    this.signal = signal

    this.send = this.connection.emit ? function (value) {
        thus.connection.emit(namespace || 'data', value)
    } : function (value) {
        thus.connection.send(value)
    }

    if(this.connection.on)
    this.connection.on(namespace || 'data', function(value) {
        thus.signal.push(JSON.stringify(value))
    })
    else this.connection.onmessage = function(value) {
        thus.signal.push(value)
    }
}

Sockets.Socket.prototype.Signal = function () {
    return this.signal
}

Sockets.createSocketedSignal = function(namespace) {
    var signal = new Signals.Signal()
    var socket = new Sockets.Socket(signal, namespace)
    return signal
}
