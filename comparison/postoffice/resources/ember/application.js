App = Ember.Application.create();

App.Store = DS.Store.extend({
    revision: 12,
    adapter: DS.RESTAdapter.extend({
        url:"http://localhost:3000"
    })
});

App.Router.map(function() {
    this.resource("home");
    this.resource("about");
    this.resource("contact");
});

App.HomeRoute = Ember.Route.extend({
    model: function() {
        return App.Home.find();
    }
});

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo("home");
    }
});

App.Home = DS.Model.extend({
    author: DS.attr('string'),
    body: DS.attr('string')
});

function getNext() {
    App.Home.find();
    setTimeout(getNext, 10000);
}

setTimeout(function () { getNext(); }, 5000);