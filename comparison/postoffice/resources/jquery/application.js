$(document).ready(function () {

    function getNext () {
        console.log("trying to retrieve new data");
        $.get("/homes", function(data) {
            if(!data) throw new Error("no data recived from server");
            data = data['homes'];
            console.log(data);
            for(var i = 0, len = data.length; i < len; i++) {
                var renderedData = render(data[i]);
                appendToList(renderedData);
            }
        });
    }

    function render (data) {
        return "<div class='row-fluid marketing'><h4>"+data.author+"</h4><p>"+data.body+"</p></div>"
    }

    function appendToList (html) {
        $("#tweet-container").prepend(html);
    }

    function startFindLoop () {
        !function loopNext () {
            getNext();
            setTimeout(startFindLoop, 10000);
        }();
    }

    $(".nav").children().each(function (e, el) {
        var contents = {
            Home : $("#main-container").html(),
            About : "When in doubt rip off twitter!",
            Contact : "kieran.gorman@ecs.vuw.ac.nz"
        }
        $(el).click(function () {
            $("li.active").removeClass("active");
            $(this).addClass("active")
            var container = $("#main-container");
            container.html(contents[$(this).find("a").html()]);

            if($(this).find("a").html() == 'Home') {
                startFindLoop();
            }
        });
    });

    startFindLoop();

});