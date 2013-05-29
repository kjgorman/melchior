var Sockets = {}

Sockets.Socket = function Socket (signal) {
    if(!('WebSocket' in window)) throw new Error("Websockets not supported in this browser")

    this.connection = io.connect('http://localhost:3001')
    this.signal = signal

    this.connection.onopen = function () {
        //hmmm...
    }
    
    this.connection.onclose = function () {
        //hmmm...
    }

    this.connection.onerror = function(e) {
        console.error(e)
    }

    this.send = function (value) {
        //stringify?
        this.connection.send(value)
    }

    this.connection.on('data', function(value) {
        this.signal.push(value)
    })
}

Sockets.createSocketedSignal = function() {
    var signal = new Signal(), socket = new Sockets.Socket(signal)
    return signal
}