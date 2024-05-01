import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";

    const points = pointsForWord(word);

    expect(points).toBe(7);
  });

  it("calculates the total points for a word with mixed case", () => {
    const word = "TeSt";

    const points = pointsForWord(word);

    expect(points).toBe(7);
  });

  it("calculates the total points for a palindrome word", () => {
    const word = "racecar";

    const points = pointsForWord(word);

    expect(points).toBe(22);
  });

  it("throws an error if the input is not a string", () => {
    const word = 12345;

    expect(() => pointsForWord(word)).toThrow();
  });

  
});