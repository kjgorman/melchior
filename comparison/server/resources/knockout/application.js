var FakeTweetModel = function() {
    var currentTab = ko.observable("Home")
    , contents = {
        Home: $("#main-container").html(),
        About: "When in doubt, rip off twitter!", 
        Contact: "kieran.gorman@ecs.vuw.ac.nz"
    };

    this.currentEntries = ko.observableArray([])

    this.tabSwitcher = function(tab, event) {
        $(".active").removeClass("active");
        $(event.target).parent().addClass("active");
        
        $("#main-container").html(contents[$(event.target).html()]);
    }

    !function getNext() {
        $.get("/homes", function(data) {
            data = data["homes"][0];
            thus.currentEntries.push(data);
        });
        setTimeout(getNext, 5000);
    }();

    var thus = this;
}

ko.applyBindings(new FakeTweetModel());