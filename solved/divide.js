/*
It's too hot, and they can't even…
One hot summer day Pete and his friend Billy decided to buy watermelons. They chose the biggest crate. They rushed home, dying of thirst, and decided to divide their loot, however they faced a hard problem.

Pete and Billy are great fans of even numbers, that's why they want to divide the number of watermelons in such a way that each of the two parts consists of an even number of watermelons. However, it is not obligatory that the parts are equal.

Example: the boys can divide a stack of 8 watermelons into 2+6 melons, or 4+4 melons.

The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, whether they can divide the fruits in the way they want. For sure, each of them should get a part of positive weight.

Task
Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.

Examples
divide(2) === false // 2 = 1 + 1
divide(3) === false // 3 = 1 + 2
divide(4) === true  // 4 = 2 + 2
divide(5) === false // 5 = 2 + 3
divide(6) === true  // 6 = 2 + 4
*/


function divide(weight) {
return (weight % 2 === 0) && (weight > 2)
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