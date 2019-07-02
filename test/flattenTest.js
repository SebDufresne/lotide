const assert = require('chai').assert;
const flatten = require('../index').flatten;

describe("#flatten", () => {
  it("returns [] for []", () => {
    assert.deepEqual(flatten([]), []);
  });
  it("returns [1, 2, 3] for [1, [2, 3]]", () => {
    assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3]);
  });
  it("returns [1] for [[[1]]]", () => {
    assert.deepEqual(flatten([[[1]]]), [1]);
  });
});