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

describe("getters and setters should perfom sanely", function () {
    var anElement = document.createElement("div"); anElement.innerHTML = test = "foo";

    it("should get foo", function () {
        expect(Dom.get(anElement, "innerHTML")).toEqual("foo")
    })

    it("should set bar", function () {
        expect(Dom.set(anElement, "innerHTML", "bar")).toEqual("bar")
    })

});

describe("append and prepend should order correctly", function () {
    var anElement = document.createElement("div")
      , aChild = document.createElement("div");
    anElement.appendChild(aChild)

    it("should append after a child", function () {
        Dom.append(anElement, "foo")
        expect(anElement.children.length).toBe(2)
        expect(anElement.children[1].tagName).toBe("SPAN")
        anElement.removeChild(anElement.children[1])
        expect(anElement.children.length).toBe(1)
    })

    it("should prepend before child", function () {
        Dom.prepend(anElement, "foo")
        expect(anElement.children.length).toBe(2)
        expect(anElement.children[0].tagName).toBe("SPAN")
        anElement.removeChild(anElement.children[0])
        expect(anElement.children.length).toBe(1)
    })
})

describe("append and prepend should parse html", function () {
    var anElement = document.createElement("div")
      , aChild = document.createElement("div");
    anElement.appendChild(aChild)

    it("should parse a tag when appending", function () {
        Dom.append(anElement, "<div>foo</div>")
        var numChildren = anElement.children.length
        expect(numChildren).toBe(2)
        expect(anElement.children[numChildren-1].tagName).toBe("div")
    })

    it("should parse a tag when prepending", function () {
        Dom.prepend(anElement, "<input type='text' />")
        var numChildren = anElement.children.length
        expect(numChildren).toBe(3)
        expect(anElement.children[0].tagName).toBe("input")
    })
})