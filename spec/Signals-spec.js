
describe("null/undefined checks on the namespace static", function () {
    var anElement = document.createElement("div");

    it("should return undefined rather than throw", function () {
        expect(Signals.createEventedSignal()).toEqual(undefined);
        expect(Signals.createEventedSignal(null)).toEqual(undefined);
        expect(Signals.createEventedSignal(anElement, null)).toEqual(undefined);
    });

    it("should return undefined rather than throw", function () {
        expect(Signals.bindToSignal()).toEqual(undefined);
        expect(Signals.bindToSignal(anElement)).toEqual(undefined);
        expect(Signals.bindToSignal(anElement, {})).toEqual(undefined);
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

