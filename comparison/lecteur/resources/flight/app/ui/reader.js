define ([
            "flight/component"
        ],
function(defineComponent) {
    return defineComponent(reader);

    function reader () {
        this.after("initialize", function() {
            var self = this
            this.on(document, "reading", function (event, data) {
                $.ajax({
                    method:"POST",
                    type:"JSON",
                    data:data,
                    url:"/post",
                    success: function (data) {
                        self.$node.html($("<div><div class='article title' data-reactive='"+data.iden+"'>"+data.title+"</div>"
                                          +"<div class='separator'>&nbsp;</div><div class='body'>"+data.body+"</div></div>"))
                    }
                })
            })
        });
    }
});