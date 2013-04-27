
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

    it("should not receive events from a different namespace", function () {
        var anElement = document.createElement("input")
        , signal = Signals.createEventedSignal(anElement, "click")
        , global = false;
        Signals.bindToSignal(signal, {
            args: [],
            __aN__: function () { global = true }
        });
        var event = document.createEvent("MouseEvents");
        event.initMouseEvent("mousedown", true, true, window,
                             0, 0, 0, 0, 0, false, false, false, false, 0, null);
        anElement.dispatchEvent(event);
        expect(global).toBe(false);
    });
});

describe("an evented signal with invalid inputs should return undefined", function () {
    it("should return undefined rather than throw on undefined inputs", function () {
        expect(Signals.createEventedSignal()).toBe(undefined);
        expect(Signals.createEventedSignal({})).toBe(undefined);
        expect(Signals.createEventedSignal({}, "click")).toBe(undefined);
        expect(Signals.createEventedSignal(document.createElement("div"))).toBe(undefined);
        expect(Signals.createEventedSignal(document.createElement("div"), {})).toBe(undefined);
    });
});

describe("listening for an evented signal with poorly defined callback should return undefined", function() {
    var signal = Signals.createEventedSignal(document.createElement("div"), "click");

    it("should return nulls for bad inputs", function () {
        expect(Signals.bindToSignal()).toBe(undefined);
        expect(Signals.bindToSignal(signal)).toBe(undefined);
        expect(Signals.bindToSignal(signal, {})).toBe(undefined);
    });
});

describe("piping a signal should produce a new signal that will react to the old one", function () {
    var element = document.createElement("div")
    , originalSignal = Signals.createEventedSignal(element, "click");
    
    it("should produce a new signal", function () {
        expect(originalSignal.pipe({args:[], __aN__:function() {}}).__isSignal).toBe(true);
    });

    it("should produce a value when the original signal receives a value", function () {
        var global = false
        ,   newSignal = originalSignal.pipe({args: [], __aN__: function () { global = true; return this.args }})
        ,   event = document.createEvent("MouseEvents");
        event.initMouseEvent("click", true, true, window,
                             0, 0, 0, 0, 0, false, false, false, false, 0, null);
        element.dispatchEvent(event);
        expect(global).toBe(true);
    });
});