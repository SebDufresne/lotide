const assert = require('chai').assert;
const map = require('../index').map;

describe("#map", () => {
  it("returns ['g', 'c', 't'] for ['lonely', 'rabbit', 'blue', 'moon'] with callback: word => word[0]", () => {
    const input = ['lonely', 'rabbit', 'blue', 'moon'];
    const expect = ['l', 'r', 'b', 'm'];
    const callback = word => word[0];
    assert.deepEqual(map(input,callback),expect);
  });
  it("return [6, 7, 2] for ['lonely', 'rabbit', 'blue', 'moon'] with callback: word => word.length", () => {
    const input = ['lonely', 'rabbit', 'blue', 'moon'];
    const expect = [6, 6, 4, 4];
    const callback = word => word.length;
    assert.deepEqual(map(input,callback),expect);
  });
  it("return ['L', 'R', 'B', 'M'] for ['lonely', 'rabbit', 'blue', 'moon'] with callback: word => word[1].toUpperCase()", () => {
    const input = ['lonely', 'rabbit', 'blue', 'moon'];
    const expect = ['O', 'A', 'L', 'O'];
    const callback = word => word[1].toUpperCase();
    assert.deepEqual(map(input,callback),expect);
  });
});