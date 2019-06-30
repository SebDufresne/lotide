const chai = require('chai');
const assert = chai.assert;

const eqArrays = require('../eqArrays');

describe('eqArrays', function() {
  it('[1, 2, 3] eq [1, 2, 3]', function() {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    assert.isTrue(eqArrays(array1,array2));
  });
  it('["1", "2", "3"] eq ["1", "2", "3"]', function() {
    const array1 = ["1", "2", "3"];
    const array2 = ["1", "2", "3"];
    assert.isTrue(eqArrays(array1,array2));
  });
  it('["1", "2", "3"] !eq ["1", "2", 3]', function() {
    const array1 = ["1", "2", "3"];
    const array2 = ["1", "2", 3];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('[[2, 3], [4]] eq [[2, 3], [4]]', function() {
    const array1 = [[2, 3], [4]];
    const array2 = [[2, 3], [4]];
    assert.isTrue(eqArrays(array1,array2));
  });
  it('[[2, 3], [4]] !eq [[2, 3], [4, 5]]', function() {
    const array1 = [[2, 3], [4]];
    const array2 = [[2, 3], [4, 5]];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('[[2, 3], [4]] !eq [[2, 3], 4]', function() {
    const array1 = [[2, 3], [4]];
    const array2 = [[2, 3], 4];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('[[2, 3], [4],[[[1],2]]] eq [[2, 3], [4],[[[1],2]]]', function() {
    const array1 = [[2, 3], [4],[[[1],2]]];
    const array2 = [[2, 3], [4],[[[1],2]]];
    assert.isTrue(eqArrays(array1,array2));
  });
  it('["1", "2", {a: 1, b: 2}] eq ["1", "2", {a: 1, b: 2}]', function() {
    const array1 = ["1", "2", {a: 1, b: 2}];
    const array2 = ["1", "2", {a: 1, b: 2}];
    assert.isTrue(eqArrays(array1,array2));
  });

});