// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

var stringToNumber = function (str) {
    return parseInt(str);
    // return Number(str);
}

describe("stringToNumber", () => {
    test("should work for the examples", () => {
        expect(stringToNumber("1234")).toBe(1234);
        expect(stringToNumber("605")).toBe(605);
        expect(stringToNumber("1405")).toBe(1405);
        expect(stringToNumber("-7")).toBe(-7);
    });
});

