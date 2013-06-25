define (
    [
        "./ui/switcher",
        "./ui/tweeter"
    ],
    function (Switcher, Tweeter) {

        var initialize = function () {
            Switcher.attachTo(".link");
            Tweeter.attachTo(document);
        };
        return { initialize: initialize }
    }
);