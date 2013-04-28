describe("it should select the textarea", function () {
    it("should return non-null", function () {
        expect(Melchior.valueOfTest("getByTagName")).toNotBe(null);
    });

    it("should return an element", function () {
        expect(Melchior.valueOfTest("getByTagName") instanceof HTMLElement).toBe(true);
    });

    it("should return the textarea", function () {
        expect(Melchior.valueOfTest("getByTagName").tagName).toBe("TEXTAREA");
    });
});