describe("adding class should add, and be idempotent", function () {

    it("should return null for null", function () {
        expect(Dom.addClass(null)).toBe(null)
    })

    it("should return undefined for undefined", function () {
        expect(Dom.addClass(undefined)).toBe(undefined)
    })

    it("should ignore empty string", function () {
        var element = document.createElement("div"), clsString = element.classString
        Dom.addClass(element, "")
        expect(clsString).toEqual(element.classString)
    })

    it("should add a class to an element", function () {
        var element = document.createElement("div");
        Dom.addClass(element, "foo");
        expect(element.classList.contains("foo")).toBe(true)
    });

    it("should be idempotent", function () {
        var element = document.createElement("div");
        Dom.addClass(element, "foo")
        expect(element.classList.contains("foo")).toBe(true)
        Dom.addClass(element, "foo")
        expect(element.classList.contains("foo")).toBe(true)
    });
});

describe("removing a class should remove, and be idempotent", function () {
    it("should return null for null", function () {
        expect(Dom.removeClass(null)).toBe(null)
    })

    it("should return undefined for undefined", function () {
        expect(Dom.removeClass(undefined)).toBe(undefined)
    })

    it("should ignore empty string", function () {
        var element = document.createElement("div"), clsString = element.classString
        Dom.removeClass(element, "")
        expect(clsString).toEqual(element.classString)
    })

    it("should remove a class from an element", function () {
        var element = document.createElement("div");
        Dom.addClass(element, "foo")
        expect(element.classList.contains("foo")).toBe(true)
        Dom.removeClass(element, "foo");
        expect(element.classList.contains("foo")).toBe(false)
    });

    it("should be idempotent", function () {
        var element = document.createElement("div");
        Dom.addClass(element, "foo")
        expect(element.classList.contains("foo")).toBe(true)
        Dom.removeClass(element, "foo")
        expect(element.classList.contains("foo")).toBe(false)
        Dom.removeClass(element, "foo")
        expect(element.classList.contains("foo")).toBe(false)
    });

});