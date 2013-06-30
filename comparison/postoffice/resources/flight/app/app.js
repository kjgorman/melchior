define (
    [
        "./ui/inbox",
        "./ui/outbox",
        "./ui/composition"
    ],
    function (Inbox, Outbox, Composition) {
        function initialize () {
            Composition.attachTo("#submit")
            Inbox.attachTo("#inbox")
            Outbox.attachTo("#outbox")
        };
        return {initialize: initialize}
    }
);