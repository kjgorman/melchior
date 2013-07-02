App = Ember.Application.create();

App.Store = DS.Store.extend({
    revision:12
})

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
    activate: function () {
        var s = io.connect("/"), _this = this
        s.on("/receive", function(data) {
            if(data.nick == document.getElementById("nick").value) return
            var message = App.Message.createRecord({message:data.message, nick:data.nick})
            _this.controllerFor("Message").inbox.addObject(message)
        })
    },
})

App.MessageController = Ember.Controller.extend({
    inbox:[],
    outbox:[],
    click: function () {
        var data = {
            message: document.getElementById("writer").value,
            nick: document.getElementById("nick").value
        },  message = App.Message.createRecord(data)
         , _this = this
        $.ajax({
            url:"/send",
            method:"POST",
            type:"JSON",
            data:data,
            success:function(d) {
                if(d.status == "ok")
                    _this.outbox.addObject(message)
            }
        })
    }
})

