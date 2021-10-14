
function ifChuckSaysSo(number) {
    return (number % 2 === 0);
}

describe("If Chuck says so..", () => {
    test("chuck says", () => {
        expect(ifChuckSaysSo(3)).toBe(false);
    })
});