// Write your tests here!
const caesarModule = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("Should return the encoded message for thinkful", () =>{
    const input = "thinkful";
    const expected = "wklqnixo";
    const shift = 3;
    const actual = caesarModule.caesar(input,shift);
    expect(actual).to.equal(expected);
  });
  it("Should return the encoded message using a negative shift", () =>{
    const input = "thinkful";
    const expected = "qefkhcri";
    const shift = -3;
    const actual = caesarModule.caesar(input,shift);
    expect(actual).to.equal(expected);
  });
  it("Should return a decoded message for wklqnixo", () => {
    const input = "wklqnixo";
    const expected = "thinkful";
    const shift = 3;
    const encoded = false;
    const actual = caesarModule.caesar(input,shift,encoded);
    expect(actual).to.equal(expected);
  });
    it("Should return an encoded message and preserve spaces and characters", () =>{
      const input = "This is a secret message!";
      const expected = "bpqa qa i amkzmb umaaiom!";
      const shift = 8;
      const actual = caesarModule.caesar(input, shift);
      expect(actual).to.equal(expected);
    });
  it("Should return a decoded message with while preserving spaces, characters, and returning lowercase instead of uppercase", () =>{
    const input = "BPQA qa I amkzmb umaaiom!";
    const expected = "this is a secret message!";
    const shift = 8;
    const encoded = false;
    const actual = caesarModule.caesar(input,shift,encoded);
    expect(actual).to.equal(expected);
  });
  it("Should return false if no shift is given", () => {
    const input = "thinkful";
    const shift = 0;
    const expected = false;
    const actual = caesarModule.caesar(input);
    expect(actual).to.equal(expected);
  });
  it("Should return false if a shift greater than 25 is given", () => {
    const input = "thinkful";
    const shift = 99;
    const expected = false;
    const actual = caesarModule.caesar(input,shift);
    expect(actual).to.equal(expected);
  });
  it("Should return false if a shift lower than -25 is given", () => {
    const input = "thinkful";
    const shift = -26;
    const expected = false;
    const actual = caesarModule.caesar(input,shift);
    expect(actual).to.equal(expected);
  });
  
});