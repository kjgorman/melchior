
describe("null/undefined checks on the namespace static", function () {
    var anElement = document.createElement("div")
      , signal = Signals.createEventedSignal(anElement, "click");
    it("should return undefined rather than throw", function () {
        expect(Signals.createEventedSignal()).toEqual(undefined);
        expect(Signals.createEventedSignal(null)).toEqual(undefined);
        expect(Signals.createEventedSignal(anElement, null)).toEqual(undefined);
    });

    it("should return undefined rather than throw", function () {
        expect(Signals.bindToSignal()).toEqual(undefined);
        expect(Signals.bindToSignal(signal)).toEqual(undefined);
    });
});

describe("the event parameter must be of type string", function () {
    var anElement = document.createElement("div");

    it("should return undefined when not string", function () {
        expect(Signals.createEventedSignal(anElement, {})).toEqual(undefined);
    });

    it("should return sucessfully if it is", function () {
        expect(Signals.createEventedSignal(anElement, "click")).toBeTruthy();
    });
});


describe("an evented signal should push events on an element to it's listeners", function () {
    it("should receive events", function() {
        var anElement = document.createElement("input")
        , signal = Signals.createEventedSignal(anElement, "click")
        , global = false;

        Signals.bindToSignal(signal, {
            __aN__: function() { 
                global = true;  
            },
            args:[undefined]
        });

        var event = document.createEvent("MouseEvents");
        event.initMouseEvent("click", true, true, window,
                             0, 0, 0, 0, 0, false, false, false, false, 0, null);
        anElement.dispatchEvent(event);

        expect(global).toBe(true);
    });
});