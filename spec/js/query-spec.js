describe("it should do some simple parsing", function () {
    it("should match bare words as tag names", function () {
        var sel = Query.createSelectorOf("div"), div = document.createElement("div")
        expect(sel.matches(div)).toBe(true)
    })

    it("should match class", function () {
        var sel = Query.createSelectorOf(".foo"), div = document.createElement("div")
        div.classList.add("foo")
        expect(sel.matches(div)).toBe(true)
    })

    it("should match id", function () {
        var sel = Query.createSelectorOf("#foo"), div = document.createElement("div")
        div.id = "foo"
        expect(sel.matches(div)).toBe(true)
    })

    it("should match id and class", function () {
        var sel = Query.createSelectorOf("#foo.bar"), div = document.createElement("div")
        div.id = "foo"; div.classList.add("bar")
        expect(sel.matches(div)).toEqual(true)
    })

    it("should not match incorrectly", function () {
        var sel = Query.createSelectorOf("#quux"), div = document.createElement("div")
        expect(sel.matches(div)).toBe(false)
    })

    it('should handle whitespace', function () {
        var sel = Query.createSelectorOf("  #foo.bar  "), div = document.createElement('div')
        div.id = "foo"; div.classList.add("bar")
        expect(sel.matches(div)).toBe(true)
    })

    it("should handle whitespace separated terms", function () {
        var sel = Query.createSelectorOf(".bar .quux"), div = document.createElement("div")
        div.classList.add('bar'); div.classList.add('quux')
        expect(sel.matches(div)).toBe(true)
    })
})
