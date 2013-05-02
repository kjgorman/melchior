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

describe("siblings should return siblings", function () {
    var someElements = document.createElement("div");
    [1,2,3,4].map(function() { someElements.appendChild(document.createElement("div")) });
    
    it("should return null for null", function () {
        expect(Dom.siblings(null)).toBe(null)
    });

    it("should return undefined for undefined", function () {
        expect(Dom.siblings(undefined)).toBe(undefined)
    });

    it("should return nothing for a node with no parent", function () {
        expect(Dom.siblings(someElements)).toEqual(Lists.emptyUHCList())
    });

    it("should return it's siblings", function () {
        expect(Lists.fromUHCList(Dom.siblings(someElements.children[0])))
            .toEqual(Array.prototype.slice.call(someElements.children, 1))
    });

});