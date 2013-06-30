define ([
            "flight/component"
        ],
function(defineComponent) {
    return defineComponent(inbox);

    function inbox() {
        this.after("initialize", function() {
            var s = io.connect("/"), _this = this
            s.on("/receive", function(data) {
                if(data.nick == document.getElementById("nick").value) return
                _this.$node.prepend($("<li>"+data.nick+":"+data.message+"</li>"))
            })
        });
    }
});