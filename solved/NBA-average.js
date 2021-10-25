/* An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.
Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.
Examples:
pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0
Notes:
All inputs will be either be an integer or float.
Follow your dreams! 
function pointsPer48(ppg, mpg) {
}
describe("Solution", () => {
  it("should test for something", () => {
    Test.assertEquals(pointsPer48(12, 20), 28.8)
    Test.assertEquals(pointsPer48(10, 10), 48.0)
    Test.assertEquals(pointsPer48(5, 17), 14.1)
    Test.assertEquals(pointsPer48(0, 0), 0)
    Test.assertEquals(pointsPer48(30.8, 34.7), 42.6)  // Russell Westbrook 1/15/17
    Test.assertEquals(pointsPer48(22.9, 33.8), 32.5)  // Kemba Walker 1/15/17
  });
});
*/

function pointsPer48(ppg, mpg) {
    if (mpg > 0 || ppg > 0) {
        return parseFloat(((ppg * 48) / mpg).toFixed(1));
    } else {
    return 0;
    }
}

describe("Solution", () => {
    test("test1", () => {
      expect(pointsPer48(12, 20)).toBe(28.8);
    });
    test("test1", () => {
        expect(pointsPer48(10, 10)).toBe(48.0);
      });
      test("test1", () => {
        expect(pointsPer48(5, 17)).toBe(14.1);
      });
      test("test1", () => {
        expect(pointsPer48(0, 0)).toBe(0);
      });
      test("test1", () => {
        expect(pointsPer48(30.8, 34.7)).toBe(42.6);
      });
      test("test1", () => {
        expect(pointsPer48(22.9, 33.8)).toBe(32.5);
      });
  });


