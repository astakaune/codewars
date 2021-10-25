// Given an array of integers, return a new array with each value doubled.
// For example: [1, 2, 3] --> [2, 4, 6]
// function maps(x){
// }



let x = [];
let x1 = [];

function maps(x) {
    for (let i=0; i < x.length; i++) {
        x1[i].push(x[i] * 2);
    } return x1;
} 



test("test1", () => {
    expect(maps([1, 2, 3])).toBe([2, 4, 6]);
});

test("test2", () => {
    expect(maps([4, 1, 1, 1, 4])).toBe([8, 2, 2, 2, 8]);
});

test("test3", () => {
    expect(maps([2, 2, 2, 2, 2, 2])).toBe([4, 4, 4, 4, 4, 4]);
});



