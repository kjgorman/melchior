var PostOfficeModel = function () {
    var self = this
    this.inbox = ko.observableArray([])
    this.outbox = ko.observableArray([])

    this.compose = function () {
        var nick = document.getElementById("nick").value
          , message = document.getElementById("writer").value
        if(nick == "" || message == "") return
        send({nick:nick, message:message}, self)
    }

    receive(self)
}

function send(data, office) {
    $.ajax({
        url:"/send",
        method:"POST",
        type:"JSON",
        data:data,
        success:function(result) {
            if(result.status == "ok")
                office.outbox.push({message:data.message})
        }
    })
}

function receive(office) {
    var conn = io.connect("/")
    conn.on("/receive", function(data) {
        if(data.nick  !== document.getElementById("nick").value)
            office.inbox.push({nick:data.nick, message:data.message})
    })
}

var office = new PostOfficeModel()

ko.applyBindings(office)

