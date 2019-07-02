const assert = require('chai').assert;
const findKey = require('../index').findKey;

describe("#findKey", () => {
  it("returns 'b' for { 'a': { c: 1 }, 'b': { c: 3 }} with callback: x => x.c === 3", () => {
    const testObj = { 'a': { c: 1 }, 'b': { c: 3 }};
    const callback = x => x.c === 3;
    const expect = 'b';
    assert.strictEqual(findKey(testObj, callback), expect);
  });
  it("returns undefined for { 'a': { c: 1 }, 'b': { c: 3 }} with callback: x => x.c === 2", () => {
    const testObj = { 'a': { c: 1 }, 'b': { c: 3 }};
    const callback = x => x.c === 2;
    const expect = undefined;
    assert.strictEqual(findKey(testObj, callback), expect);
  });
});