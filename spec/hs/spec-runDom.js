describe("simple test of uhc, should return an element", function () {
    it("should not be undefined", function () {
        expect(Melchior.valueOfTest()).toNotBe(null);
    });

    it("should be an element", function () {
        expect(Melchior.valueOfTest().tagName).toBeTruthy();
    });
});