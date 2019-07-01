const assert = require('chai').assert;
const tail = require('../index').tail;

describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']),['Lighthouse', 'Labs']);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]),[]);
  });
});