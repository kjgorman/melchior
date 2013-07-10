App = Ember.Application.create();

App.Store = DS.Store.extend({
    revision:12
})

App.Router.map(function() {

});

App.Link = DS.Model.extend({
    title:DS.attr("string"),
    body:DS.attr("string"),
    iden:DS.attr("number")
})

App.IndexRoute = Ember.Route.extend({
    activate: function () {
        var sidebarController = this.controllerFor("Sidebar")
          , mainController = this.controllerFor("Focus")
        this.updateSidebar(sidebarController)
        this.render("sidebar", {
            outlet:"sidebar",
            controller:sidebarController
        })
        this.clickDelegate(mainController, sidebarController)
    },
    clickDelegate: function (mainController, sidebarController) {
        var _this = this
        $(document).on("click", ".article", function (e) {
            var iden = /script>(\d+)<script/.exec($(e.target).attr("data-reactive"))[1]
            console.log(iden)
            mainController.set("currentItems", [])
            mainController.currentItems.addObject(sidebarController.items[iden-1])
            _this.render("main", {
                outlet:"main",
                controller:mainController
            })
        })
    },
    updateSidebar: function(controller) {
        var _this = this
        $.ajax({
            url:"/next",
            method:"GET",
            type:"JSON",
            success: function (data) {
                if(!data || data.title === "") return
                var link = App.Link.createRecord({
                    title: data.title,
                    body: data.body,
                    iden:data.iden
                })
                controller.items.addObject(link)
            }
        })
        setTimeout(function () { _this.updateSidebar(controller) }, 1000)
    }
})

App.SidebarController = Ember.Controller.extend({
    items: []
})

App.FocusController = Ember.Controller.extend({
    currentItems:[]
})