$(document).ready(function () {

    $("#submit").on("click", function () {
        if($("#writer").val() == "") return
        $.ajax({
            method:"POST",
            type:"JSON",
            url:"/send",
            data:{data:$("#writer").val()},
            success: function(r) {
                if(r.status == "ok")
                    $("#outbox").prepend($("<li>"+$("#writer").val()+"</li>"))
            }
        })
    })

});