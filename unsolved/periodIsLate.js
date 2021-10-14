function periodIsLate(last, today, cycleLength) {
    cycleLength = today - last;
    if ((today.valueOf() - last.valueOf()) < cycleLength) {
        return false;
    // } else if ((today - last) > cycleLength)  {
    //     return true;
    }
}


describe("Is period late?", () => {
    test("evaluation1", () => {
        expect(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)).toBe(false);
    })
    test("evaluation2", () => {
        expect(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)).toBe(true);
    })
});

