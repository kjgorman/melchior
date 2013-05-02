describe("safeList should return a list from native and weird uhc objects", function () {
    it("should return a list from a list", function () {
        expect(Lists.safeList([1,2])).toEqual([1,2]);
    });

    it("should return a list from a uhc list", function () {
        expect(Lists.safeList([[1,2]])).toEqual([1,2]);
    });
});

describe("mapping should apply the signal but not modify it", function () {
    it("should favour undefined to throwing", function () {
        expect(Lists.map()).toBe(undefined);
        expect(Lists.map({__aN__:function(){}, args:[]})).toBe(undefined);
    });

    it("should return undefined if the list isn't a list, or the function isn't a function", function () {
        expect(Lists.map({__aN__:function(){}, args:[]}, {})).toBe(undefined);
        expect(Lists.map([], [])).toBe(undefined);
    });

    it("should return with the same args as given", function () {
        var aSignal = {
            __aN__ : function () { },
            args : [1,2,3]
        };
        Lists.map(aSignal, [1,2,3,4,5])
        expect(aSignal.args).toEqual([1,2,3]);
    });

    it("should apply a function onto all the args", function () {
        var aSignal = {
            __aN__ : function () { return this.args[0]+1 },
            args   : []
        };
        expect(Lists.fromUHCList(Lists.map(aSignal, [1,2,3]))).toEqual([2,3,4]);
    });
});

describe("round tripping uhc list", function () {
    it("should return empty list from uhc empty list", function () {
        expect(Lists.fromUHCList(Lists.emptyUHCList())).toEqual([])
    })

    it("should return empty uhc list from empty list", function () {
        expect(Lists.toUHCList([])).toEqual(Lists.emptyUHCList())
    })

    it("should roundtrip", function () {
        expect(Lists.fromUHCList(Lists.toUHCList([1,2,3]))).toEqual([1,2,3])
    })

    it("should have the correct length once converted", function () {
        expect(Lists.length(Lists.toUHCList([1,2,3,4,5]))).toBe(5)
    })
});