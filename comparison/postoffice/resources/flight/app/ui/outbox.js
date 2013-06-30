define ([
            "flight/component"
        ],
function(defineComponent) {
    return defineComponent(outbox);

    function sendMessage(data, callback) {
        var self = this
        $.ajax({
            url:"/send",
            method:"POST",
            type:"JSON",
            data:data,
            success:function() {
                callback.call(self, data)
            }
        })
    }

    function appendMessageToOutbox(data) {
        this.$node.prepend($("<li>"+data.message+"</li>"))
    }

    function outbox() {
        this.after("initialize", function() {
            this.on(document, "composition", function(event, data) {
                sendMessage.call(this, data, appendMessageToOutbox)
            })
        });
    }
});