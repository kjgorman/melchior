describe("simple test of uhc, should return an element", function () {
    it("should not be null", function () {
        expect(Melchior.valueOfTest("runDom")).toNotBe(null);
    });

    it("should be truthy", function () {
        expect(Melchior.valueOfTest("runDom")).toBeTruthy();
    });

    it("should be an HtmlElement", function () {
        expect(Melchior.valueOfTest("runDom") instanceof HTMLDocument).toBe(true);
    });
});