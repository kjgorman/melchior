describe("getting by class should retrieve all matching", function () {
    it("should return non null", function () {
        expect(Melchior.valueOfTest("getByClass")).toNotBe(null);
    });

    it("should be a list", function () {
        expect(Melchior.valueOfTest("getByClass") instanceof HTMLElement).toBe(false);
    });

    it("should have elements with class foo", function () {
        for(var i = 0; i < Melchior.valueOfTest("getByClass").length; i++) {
            expect(Melchior.valueOfTest("getByClass")[i].classList.contains("foo")).toBe(true);
        }
    });
});