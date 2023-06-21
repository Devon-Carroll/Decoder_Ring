// Write your tests here!
const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("Should encode strings into pairs of numbers to represent each letter", () => {
    const input = "thinkful";
    const expected = "4432423352125413";
    const actual = polybiusModule.polybius(input);
    expect(actual).to.equal(expected);
  });
  it("Should encode messages with multiple words and preserve the spaces", () => {
    const input = "Hello world";
    const expected = "3251131343 2543241341";
    const actual = polybiusModule.polybius(input);
    expect(actual).to.equal(expected);
  });
  it("Should decode sets of numbers separated by a space and preserve the spaces", () => {
    const input = "3251131343 2543241341";
    const expected = "hello world";
    const encoded = false;
    const actual = polybiusModule.polybius(input, encoded);
    expect(actual).to.equal(expected);
  });
  it("Should decode a set of numbers and use i/j for 42", () => {
    const input = "4432423352125413";
    const expected = "th(i/j)nkful";
    const encoded = false;
    const actual = polybiusModule.polybius(input, encoded);
    expect(actual).to.equal(expected);
  });
  it("Should return false if you decode with an odd number of numbers", () => {
    const input = "44324233521254134";
    const expected = false;
    const encoded = false;
    const actual = polybiusModule.polybius(input, encoded);
    expect(actual).to.equal(expected);
  });
});