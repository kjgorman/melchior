define ([
            "flight/component"
        ],
function(defineComponent) {
    return defineComponent(composition);

    function composition() {
        this.after("initialize", function() {
            this.on("click", function() {
                var data = {
                    nick: document.getElementById("nick").value,
                    message: document.getElementById("writer").value
                }
                this.trigger(document, "composition", data)
            })
        });
    }
});