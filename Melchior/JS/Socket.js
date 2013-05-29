var Sockets = {}

Sockets.Socket = function Socket (signal) {
    if(!('WebSocket' in window)) throw new Error("Websockets not supported in this browser")

    this.connection = io ? io.connect('http://localhost:3001') : new WebSocket("ws://localhost:3001")
    this.signal = signal

    this.send = this.connection.emit ? function (value) {
        this.connection.emit('data', value)
    } : function (value) {
        //stringify?
        this.connection.send(value)
    }

    if(this.connection.on)
    this.connection.on('data', function(value) {
        this.signal.push(value)
    })
    else this.connection.onmessage = function(value) {
        this.signal.push(value)
    }
        
}

Sockets.createSocketedSignal = function() {
    var signal = new Signal(), socket = new Sockets.Socket(signal)
    return signal
}