// Write your tests here!
const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("Should encode messages with the given alphabet", () => {
    const input = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "jrufscpw";
    const actual = substitutionModule.substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("Should encode messages with spaces and preserve the spaces", () => {
    const input = "You are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitutionModule.substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("Should decode a message using the given alphabet", () => {
    const input = "jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encoded = false;
    const expected = "thinkful";
    const actual = substitutionModule.substitution(input, alphabet, encoded);
    expect(actual).to.equal(expected);
  });
  it("Should encode a message into symbols if the alphabet has symbols in it", () => {
    const input = "message";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "y&ii$r&";
    const actual = substitutionModule.substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("Should decode a message that contains symbols", () => {
    const input = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const encoded = false;
    const expected = "message";
    const actual = substitutionModule.substitution(input, alphabet, encoded);
    expect(actual).to.equal(expected);
  });
  it("Should return false if the alphabet is shorter than 26 characters", () => {
    const input = "thinkful";
    const alphabet = "short";
    const expected = false;
    const actual = substitutionModule.substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("Should return false if the alphabet does not contain only unique characters", () => {
    const input = "thinkful";
    const alphabet = "abcabcabcabcabcabcabcabcyz";
    const expected = false;
    const actual = substitutionModule.substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
});