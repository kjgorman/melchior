App = Ember.Application.create();

App.Store = DS.Store.extend({revision:12})

App.Router.map(function() {
    this.resource("message")
});

App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo("message")
    }
})

App.InboxView = Ember.View.extend({})

App.Message = DS.Model.extend({
    nick: DS.attr("string"),
    message:DS.attr("string"),
})

App.MessageRoute = Ember.Route.extend({
    activate:function() {
        App.Message.setupSockets =  function (id) {
                console.log("finding things, etc")
                var s = io.connect("/")
                s.on("/receive", function(d) {
                    console.log("hmmm...", d)
                    if(d.nick !== document.getElementById("nick").value)
                        $("#inbox").prepend($("<li>"+d.nick+":"+d.message))
                    Ember.Handlebars.template("inbox")
                })
        }
        App.Message.setupSockets()
    }
})