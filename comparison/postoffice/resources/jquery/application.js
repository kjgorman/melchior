$(document).ready(function () {

    var socket = io.connect("/")
    sendComposedMail()
    receiveMail(socket)

});

function sendComposedMail() {
    $("#submit").on("click", function () {
        if($("#writer").val() == "") return
        $.ajax({
            method:"POST",
            type:"JSON",
            url:"/send",
            data:{data:$("#writer").val(), nick: $("#nick").val()},
            success: function(r) {
                if(r.status == "ok")
                    $("#outbox").prepend($("<li>"+$("#writer").val()+"</li>"))
            }
        })
    })
}

function receiveMail(socket) {
    socket.on("/receive", function(d) {
        if(d.nick == $("#nick").val()) return
        $("#inbox").prepend($("<li>"+d.nick+":"+d.message+"</li>"))
    })
}