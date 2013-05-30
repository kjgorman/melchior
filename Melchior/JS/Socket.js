var Sockets = {}

Sockets.Socket = function Socket (signal, namespace) {
    "use strict";
    //TODO -- revert to long poll on false?
    if(!('WebSocket' in window)) throw new Error("Websockets not supported in this browser")

    var thus = this
    //TODO -- this host should be configurable -- how to handle configs in haskell?
    this.connection = io ? io.connect('http://localhost:3001') : new WebSocket("ws://localhost:3001")
    this.signal = signal

    this.send = this.connection.emit ? function (value) {
        thus.connection.emit(namespace || 'data', value)
    } : function (value) {
        //stringify?
        thus.connection.send(value)
    }

    if(this.connection.on)
    this.connection.on(namespace || 'data', function(value) {
        //socket.io is too fancy for its own good and converts this
        //to json -- need to stringify for client consistency
        thus.signal.push(JSON.stringify(value))
    })
    else this.connection.onmessage = function(value) {
        thus.signal.push(value)
    }
        
}

Sockets.createSocketedSignal = function(namespace) {
    var signal = new Signals.Signal()
    var socket = new Sockets.Socket(signal, namespace)
    return signal
}
