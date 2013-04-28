describe("uhc functions should be applicable and nullipotent", function () {
    it("should apply a function to it's args", function () {
        var func = {args:[1,2,3], __aN__:function () { return this.args.map(function(e) { return e+1})}};
        expect(UHCFunction.apply(func)).toEqual([2,3,4]);
    });

    it("should curry in given arg", function () {
        var func = {args:[1,2], __aN__: function () { return this.args.map(function(e) { return e+1})}}
        expect(UHCFunction.apply(func, 3)).toEqual([2,3,4])
    });

    it("should be nullipotent on the function object", function () {
        var func = {args:[1,2,3], __aN__ : function () { return this.args }}
        UHCFunction.apply(func, 4);
        expect(func.args).toEqual([1,2,3])
    });
});