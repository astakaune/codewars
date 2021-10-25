// A bugs trilogy: Episode 1
/* Our friend Pac has finally decided to pursue a career in the coding industry.
He is a newbie, he needs to learn properly.
Therefore, Pac wants to apply for the worldwide famous -and very demanding-
'C0d3r 1ns1d3' Academy for beginners.
In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
He has been sent an email from the Academy with the following instructions,

Dear Pac,  
This is the first exercise. Find out what's wrong and fix the code.  
You have 15 minutes to send a solution.  
Good Luck.
*/

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



