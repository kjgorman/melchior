describe("it should select the textarea", function () {
    it("should return non-null", function () {
        expect(Melchior.valueOfTest("getByTagName")).toNotBe(null);
    });

    it("should be a list", function () {
        expect(Melchior.valueOfTest("getByTagName") instanceof HTMLElement).toBe(false);
    });

    it("should return the textarea", function () {
        for(var i = 0; i < Melchior.valueOfTest("getByTagName"); i++) {
            expect(Melchior.valueOfTest("getByTagName")[i].tagName).toBe("TEXTAREA")
        }
    });
});