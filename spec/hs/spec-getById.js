describe("it should return an element", function () {
    it("should return non-null", function () {
        expect(Melchior.valueOfTest("getById")).toNotBe(null);
    });

    it("should be an element", function () {
        expect(Melchior.valueOfTest("getById") instanceof HTMLElement).toBe(true);
    });
    
    it("should be a list of only the  element", function () {
        expect(Melchior.valueOfTest("getById").id).toBe("anElement");
    });
});