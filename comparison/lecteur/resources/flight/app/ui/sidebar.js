define ([
            "flight/component"
        ],
function(defineComponent) {
    return defineComponent(sidebar);

    function sidebar() {
        this.after("initialize", function() {
            var self = this
            !function pollForNewLinks (self) {
                $.ajax({
                    method:"GET",
                    type:"JSON",
                    url:"/next",
                    success: function (data) {
                        if(!data || data === "") return
                        self.$node.append($("<div><div class='article title' data-reactive='"+data.iden+"'>"+data.title+"</div>"
                                            +"<div class='separator'>&nbsp;</div><div class='body'>"+data.body+"</div></div>"))
                    }
                })
                setTimeout(function () { pollForNewLinks(self) }, 1000)
            } (this)

            this.$node.on("click", ".title", function (e) {
                self.trigger(document, "reading", {id: $(e.target).attr("data-reactive")})
            })
        });
    }
});