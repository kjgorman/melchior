var ArticleModel = function () {
    var self = this
    this.sidebar = ko.observableArray()

    this.poll = function () {
        $.ajax({
            url:"/next",
            method:"GET",
            type:"JSON",
            success: function (data) {
                self.sidebar.push(data)
            }
        })
        setTimeout(this.poll, 1000)
    }

    $(document).on("click", ".article", function (e) {
        var iden = $(e.target).prev().html()
        $.ajax({
            url:"/post",
            method:"POST",
            type:"JSON",
            data: { id: iden },
            success: function (data) {
                var $node = $("<div><div class='article title'>"+data.title+"</div><div class='separator'>&nbsp;</div><div class='body'>"+data.body+"</div></div>")
                $("#main-container").html($node)
            }
        })
    })
}

var articles = new ArticleModel()
ko.applyBindings(articles)

articles.poll()