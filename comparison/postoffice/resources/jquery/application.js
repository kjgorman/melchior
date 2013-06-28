$(document).ready(function () {

    var socket = io.connect("/")
    sendComposedMail(socket)
    receiveMail(socket)

});

function sendComposedMail(socket) {
    $("#submit").on("click", function () {
        if($("#writer").val() == "") return
        $.ajax({
            method:"POST",
            type:"JSON",
            url:"/send",
            data:{data:$("#writer").val(), socket:socket.socket.sessionid},
            success: function(r) {
                if(r.status == "ok")
                    $("#outbox").prepend($("<li>"+$("#writer").val()+"</li>"))
            }
        })
    })
}

function receiveMail(socket) {
    socket.on("/receive", function(d) {
        $("#inbox").prepend($("<li>"+d.message+"</li>"))
    })
}