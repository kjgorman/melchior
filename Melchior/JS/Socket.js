var Sockets = {}

Sockets.Socket = function Socket (signal) {
    if(!('WebSocket' in window)) throw new Error("Websockets not supported in this browser")
    var thus = this
    this.connection = io ? io.connect('http://localhost:3001') : new WebSocket("ws://localhost:3001")
    this.signal = signal

    this.send = this.connection.emit ? function (value) {
        thus.connection.emit('data', value)
    } : function (value) {
        //stringify?
        thus.connection.send(value)
    }

    if(this.connection.on)
    this.connection.on('data', function(value) {
        console.log("got: ", JSON.stringify(value))
        thus.signal.push(JSON.stringify(value))
    })
    else this.connection.onmessage = function(value) {
        thus.signal.push(value)
    }
        
}

Sockets.createSocketedSignal = function() {
    var signal = new Signals.Signal()
    var socket = new Sockets.Socket(signal)
    return signal
}