!function () {

    function makePost(data) {
        return $("<div><div class='article title' data-reactive='"+data.iden+"'>"+data.title+"</div>"
                 +"<div class='separator'>&nbsp;</div><div class='body'>"+data.body+"</div></div>")
    }

    !function pollForNewLinks () {
        $.ajax({
            url:"/next",
            method:"GET",
            type:"JSON",
            success: function (data) {
                if(!data.title || data.title === "") return
                $(".items").append(makePost(data))
            }
        })

        setTimeout(pollForNewLinks, 1000)
    } ()

    !function focusDelegate () {
        $(document).on("click", ".article", function (e) {
            var data = { id: $(e.target).attr("data-reactive") }
            $.ajax({
                url:"/post",
                method:"POST",
                type:"JSON",
                data:data,
                success: function (data) {
                    $(".main-content").html(makePost(data))
                }
            })
        })
    } ()

} ()