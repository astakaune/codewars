/*
Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.
To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().
function add(a, b){
    // code here
}
describe("Tests", () => {
  it("test", () => {
 Test.assertEquals(add('1', 1), true);
 Test.assertEquals(add(1, '1'), true);
 Test.assertEquals(add(1, '0'), false);
 Test.assertEquals(add('11', 11), true);
 Test.assertEquals(add(12, 12), true);
 Test.assertEquals(add(120, '021'), false);
  });
});
*/

function add(a, b) {
    return a == b;
}
describe("Simple function", () => {
    test("test1", () => {
        expect(add('1', 1)).toBe(true);
    });
    test("test2", () => {
        expect(add(1, '0')).toBe(false);
    });
    test("test3", () => {
        expect(add('11', 11)).toBe(true);
    });
    test("test4", () => {
        expect(add(12, 12)).toBe(true);
    });
    test("test5", () => {
        expect(add(120, '021')).toBe(false);
    });
});
