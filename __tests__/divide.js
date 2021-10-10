function divide(weight) {

}


describe("Truthy", () => {
    test("4 true", () => {
        expect(divide(4)).toBe(true);
    });
    test("88 true", () => {
        expect(divide(88)).toBe(true);
    });
    test("90 true", () => {
        expect(divide(90)).toBe(true);
    });
    test("100 true", () => {
        expect(divide(100)).toBe(true);
    });
    test("10 true", () => {
        expect(divide(10)).toBe(true);
    });
    test("32 true", () => {
        expect(divide(32)).toBe(true);
    });
});

describe("Falsy", () => {
    test("2 false", () => {
        expect(divide(2)).toBe(false);
    });
    test("5 false", () => {
        expect(divide(5)).toBe(false);
    });
    test("67 false", () => {
        expect(divide(67)).toBe(false);
    });
    test("99 false", () => {
        expect(divide(99)).toBe(false);
    });
});