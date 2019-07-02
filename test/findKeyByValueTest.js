const assert = require('chai').assert;
const findKeyByValue = require('../index').findKeyByValue;

describe("#findKeyByValue", () => {
  it("returns 'a' for {a: 'hola', b:'hello'} with 'hola'", () => {
    const testObj = {a: 'hola', b:'hello'};
    const value = 'hola';
    const expect = 'a';
    assert.strictEqual(findKeyByValue(testObj, value), expect);
  });
  it("returns undefined for {a: 'hello', b:'all'} with 'world'", () => {
    const testObj = {a: 'hello', b:'all'};
    const value = 'world';
    const expect = undefined;
    assert.strictEqual(findKeyByValue(testObj, value), expect);
  });
});