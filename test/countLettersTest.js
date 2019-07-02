const assert = require('chai').assert;
const countLetters = require('../index').countLetters;

describe("#countLetters", () => {
  it("returns {} for '' with", () => {
    const input = '';
    const expect = {};
    assert.deepEqual(countLetters(input), expect);
  });
  it("returns {t:2, e:1, s:1} for 'test' with", () => {
    const input = 'test';
    const expect = {t:2, e:1, s:1};
    assert.deepEqual(countLetters(input), expect);
  });
});