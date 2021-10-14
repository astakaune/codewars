// A bugs trilogy: Episode 1

let career = Math.random();
function yourFutureCareer(career) {
    if (career <= 0.32) {
        return "Front-End Developer";
    } else if ((career > 0.32) && (career <= 0.65)) {
        return "Back-End Developer";
    } else {
        return "Full-Stack Developer";
    }
}

yourFutureCareer();


test("test1", () => {
    expect(yourFutureCareer(0.3)).toBe("Front-End Developer");
});
test("test2", () => {
    expect(yourFutureCareer(0.6)).toBe("Back-End Developer");
});
test("test3", () => {
    expect(yourFutureCareer(0.9)).toBe("Full-Stack Developer");
});


// TEST FOR Codewars:
// describe("yourFutureCareer", function(){
//     it("it should work for all cases", function(){
//       Test.assertEquals(yourFutureCareer(0.3), "Front-End Developer");
//       Test.assertEquals(yourFutureCareer(0.6), "Back-End Developer");
//       Test.assertEquals(yourFutureCareer(0.9), "Full-Stack Developer");
//           });
//   });



