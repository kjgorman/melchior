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
        console.log("messaging, etc.")
    }
})

App.MessageController = Ember.Controller.extend({
    inbox:[],
    outbox:[]
})

