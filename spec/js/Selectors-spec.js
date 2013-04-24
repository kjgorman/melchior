this.createListOf = function(type, size) {
    var length = size || 5, i = 0, ret = [];
    for(; i < length; i++) {
        ret.push(document.createElement(type));
    }
    return ret;
}

describe("converting single input to input should remain unchanged", function (){
    var anInput = document.createElement("input")
      , aDiv    = document.createElement("div"); 

    it("should return the input", function () {
        expect(Selectors.toInput(anInput)).toEqual(anInput);
    });

    it("should return null for an undefined", function () {
        expect(Selectors.toInput(undefined)).toEqual(null);
    });

    it("should return null for a non-input element", function () {
        expect(Selectors.toInput(aDiv)).toEqual(null);
    });
});


describe("converting single div to div should remain unchanged", function (){
    var anInput = document.createElement("input")
      , aDiv    = document.createElement("div"); 
    it("should return the div", function () {
        expect(Selectors.toDiv(aDiv)).toEqual(aDiv);
    });

    it("should return null for an undefined", function () {
        expect(Selectors.toDiv(undefined)).toEqual(null);
    });

    it("should return null for a non-div element", function () {
        expect(Selectors.toDiv(anInput)).toEqual(null);
    });
});

describe("converting single span to span should remain unchanged", function (){
    var aSpan = document.createElement("span")
      , aDiv    = document.createElement("div"); 
    it("should return the span", function () {
        expect(Selectors.toSpan(aSpan)).toEqual(aSpan);
    });

    it("should return null for an undefined", function () {
        expect(Selectors.toSpan(undefined)).toEqual(null);
    });

    it("should return null for a non-div element", function () {
        expect(Selectors.toSpan(aDiv)).toEqual(null);
    });
});


describe("converting list of input to input", function () {
    var listOfInput = createListOf("input", 5)
      , listOfDiv = createListOf("div", 5);
    it("should return a list only of inputs unchanged", function () {
        var returned = Selectors.toInput(listOfInput);
        expect(returned.length).toBe(listOfInput.length);
        for(var i in returned) {
            expect(returned[i]).toEqual(listOfInput[i]);
        }
    });

    it("should return only the inputs when mixed types", function () {
        var returned = Selectors.toInput(listOfInput.concat(listOfDiv));
        expect(returned.length).toBe(listOfInput.length);
        for(var i in returned) {
            expect(returned[i]).toEqual(listOfInput[i]);
        }
    });

    it("should return only the inputs when undefined or null present", function () {
        var returned = Selectors.toInput(listOfInput.concat([null, undefined, null]));
        expect(returned.length).toBe(listOfInput.length);
        for(var i in returned) {
            expect(returned[i]).toEqual(listOfInput[i]);
        }                                         
    });

    it("should return null for null", function () {
        expect(Selectors.toInput(null)).toBe(null);
    });
})

describe("converting list of div to div", function () {
    var listOfInput = createListOf("input", 5)
      , listOfDiv = createListOf("div", 5);
    it("should return a list only of divs unchanged", function () {
        var returned = Selectors.toDiv(listOfDiv);
        expect(returned.length).toBe(listOfDiv.length);
        for(var i in returned) {
            expect(returned[i]).toEqual(listOfDiv[i]);
        }
    });

    it("should return only the divs when mixed types", function () {
        var returned = Selectors.toDiv(listOfInput.concat(listOfDiv));
        expect(returned.length).toBe(listOfDiv.length);
        for(var i in returned) {
            expect(returned[i]).toEqual(listOfDiv[i]);
        }
    });

    it("should return only the divs when undefined or null present", function () {
        var returned = Selectors.toDiv(listOfDiv.concat([null, undefined, null]));
        expect(returned.length).toBe(listOfDiv.length);
        for(var i in returned) {
            expect(returned[i]).toEqual(listOfDiv[i]);
        }                                         
    });

    it("should return null for null", function () {
        expect(Selectors.toDiv(null)).toBe(null);
    });
});

describe("converting list of span to span", function () {
    var listOfSpan = createListOf("span", 5)
      , listOfDiv = createListOf("div", 5);
    it("should return a list only of span unchanged", function () {
        var returned = Selectors.toSpan(listOfSpan);
        expect(returned.length).toBe(listOfSpan.length);
        for(var i in returned) {
            expect(returned[i]).toEqual(listOfSpan[i]);
        }
    });

    it("should return only the spans when mixed types", function () {
        var returned = Selectors.toSpan(listOfDiv.concat(listOfSpan));
        expect(returned.length).toBe(listOfSpan.length);
        for(var i in returned) {
            expect(returned[i]).toEqual(listOfSpan[i]);
        }
    });

    it("should return only the spans when undefined or null present", function () {
        var returned = Selectors.toSpan(listOfSpan.concat([null, undefined, null]));
        expect(returned.length).toBe(listOfSpan.length);
        for(var i in returned) {
            expect(returned[i]).toEqual(listOfSpan[i]);
        }                                         
    });

    it("should return null for null", function () {
        expect(Selectors.toSpan(null)).toBe(null);
    });
});