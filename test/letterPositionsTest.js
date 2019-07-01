const assert = require('chai').assert;
const letterPositions = require('../index').letterPositions;

describe("#letterPositions", () => {
  it("returns { t: [ 0, 3 ], e: [ 1 ], s: [ 2 ] } for 'test'", () => {
    const input = 'test';
    const expect = { t: [ 0, 3 ], e: [ 1 ], s: [ 2 ] };
    assert.deepEqual(letterPositions(input),expect);
  });
  it("returns { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for 'hello'", () => {
    const input = 'hello';
    const expect = { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] };
    assert.deepEqual(letterPositions(input),expect);
  });
});