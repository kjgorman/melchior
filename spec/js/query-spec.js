describe("it should do some simple parsing", function () {
    it("should match bare words as tag names", function () {
        var sel = Query.createSelectorOf("div"), match = false, div = document.createElement("div")
        sel.map(function(sel) { if(sel.matches(div)) match = true })
        expect(match).toBe(true)
    })

    it("should match class", function () {
        var sel = Query.createSelectorOf(".foo"), match = false, div = document.createElement("div")
        div.classList.add("foo")
        sel.map(function(sel) { if(sel.matches(div)) match = true })
        expect(match).toBe(true)
    })

    it("should match id", function () {
        var sel = Query.createSelectorOf("#foo"), match = false, div = document.createElement("div")
        div.id = "foo"
        sel.map(function(sel) { if(sel.matches(div)) match = true })
        expect(match).toBe(true)
    })

    it("should match id and class", function () {
        var sel = Query.createSelectorOf("#foo.bar"), match = true, div = document.createElement("div")
        div.id = "foo"; div.classList.add("bar")
        sel.map(function(sel) { match &= sel.matches(div) })
        expect(match).toEqual(1)
    })

    it("should not match incorrectly", function () {
        var sel = Query.createSelectorOf("#quux"), match = true, div = document.createElement("div")
        sel.map(function(sel) { match = sel.matches(div) })
        expect(match).toBe(false)
    })

    it('should handle whitespace', function () {
        var sel = Query.createSelectorOf("  #foo.bar  "), match = true, div = document.createElement('div')
        div.id = "foo"; div.classList.add("bar")
        sel.map(function(sel) { match &= sel.matches(div) })
        expect(match).toBe(1)
    })

    it("should handle whitespace separated terms", function () {
        var sel = Query.createSelectorOf(".bar .quux"), match = true, div = document.createElement("div")
        div.classList.add('bar'); div.classList.add('quux')
        sel.map(function(sel) { match &= sel.matches(div) })
        expect(match).toBe(1)
    })
})
