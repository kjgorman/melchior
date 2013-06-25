
define(["flight/component"], function(defineComponent) {
    return defineComponent(switcher);
   
    function switcher () {

        this.after("initialize", function () {
            
            var contents = {
                Home: $("#main-container").html(),
                About: "When in doubt, rip off twitter!",
                Contact: "kieran.gorman@ecs.vuw.ac.nz"
            };

            this.on("click", function () { 
                var thus = this.node, link = $(thus).html();

                $(".active").removeClass("active");
                $(thus).parent().addClass("active");

                $("#main-container").html(contents[link]);
            });

        });
    }
});