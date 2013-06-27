define ([
            "flight/component"
        ],
function(defineComponent) {
    return defineComponent(tweeter);

    function tweeter() {
        this.after("initialize", function() {

            function render(data) {
                return "<div><h4>"+data.author+"</h4><p>"+data.body+"</p></div>";
            }

            !function getNext() {
                $.get("/homes", function(data) {
                    data = data["homes"]
                    for(var i = 0, len = data.length; i < len; i++) {
                        $("#tweet-container").prepend(render(data[i]));
                    }
                });

                setTimeout(getNext, 10000);
            }();
        });
    }
});