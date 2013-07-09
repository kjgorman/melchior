define (
    [
        "./ui/sidebar",
        "./ui/reader"
    ],
    function (Sidebar, Reader) {

        var initialize = function () {
            Sidebar.attachTo(".items");
            Reader.attachTo(".main-content");
        };
        return { initialize: initialize }
    }
);