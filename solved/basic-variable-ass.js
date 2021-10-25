// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
// let a == "code";
// let b == "wa.rs";
// let name1 == a + b;



let a = "code";
let b = "wa.rs";
let name1 = a + b;

function strictEqual() {
    return name1;
}


test("Test1", () => {
    expect(strictEqual(a, b)).toBe("codewa.rs");
});

test("Test1", () => {
    expect(strictEqual(name1)).toBe("codewa.rs");
});






