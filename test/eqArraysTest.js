const chai = require('chai');
const assert = chai.assert;

const eqArrays = require('../eqArrays');

describe('eqArrays', function() {
  it('Base: [1, 2, 3] eq [1, 2, 3]', function() {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    assert.isTrue(eqArrays(array1,array2));
  });
  it('Length: [1, 2] eq [1, 2, 3]', function() {
    const array1 = [1, 2];
    const array2 = [1, 2, 3];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('Type: [1, 2, 3] !eq [1, 2, "3"]', function() {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, "3"];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('Type: [2, 3, 4] !eq [2, 3, [4]]', function() {
    const array1 = [2, 3, 4];
    const array2 = [2, 3, [4]];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('Nested: [[2, 3], [4]] eq [[2, 3], [4]]', function() {
    const array1 = [[2, 3], [4]];
    const array2 = [[2, 3], [4]];
    assert.isTrue(eqArrays(array1,array2));
  });
  it('Nested: [[2, 3], [4]] !eq [[2, 3], [4, 5]]', function() {
    const array1 = [[2, 3], [4]];
    const array2 = [[2, 3], [4, 5]];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('Netsed: [[2, 3], [4],[[[1],2]]] eq [[2, 3], [4],[[[1],2]]]', function() {
    const array1 = [[2, 3], [4],[[[1],2]]];
    const array2 = [[2, 3], [4],[[[1],2]]];
    assert.isTrue(eqArrays(array1,array2));
  });
  it('Objects: ["1", "2", {a: 1, b: 2}] eq ["1", "2", {a: 1, b: 2}]', function() {
    const array1 = ["1", "2", {a: 1, b: 2}];
    const array2 = ["1", "2", {a: 1, b: 2}];
    assert.isTrue(eqArrays(array1,array2));
  });
  it('NaN: [1, 2, 3] !eq [1, 2, NaN]', function() {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, NaN];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('NaN: [1, 2, NaN] !eq [1, 2, "NaN"]', function() {
    const array1 = [1, 2, NaN];
    const array2 = [1, 2, "NaN"];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('NaN: [1, 2, NaN] eq [1, 2, NaN]', function() {
    const array1 = [1, 2, NaN];
    const array2 = [1, 2, NaN];
    assert.isTrue(eqArrays(array1,array2));
  });
  it('null: [1, 2, 3] !eq [1, 2, null]', function() {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, null];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('null: [1, 2, null] !eq [1, 2, "null"]', function() {
    const array1 = [1, 2, null];
    const array2 = [1, 2, "null"];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('null: [1, 2, null] eq [1, 2, null]', function() {
    const array1 = [1, 2, null];
    const array2 = [1, 2, null];
    assert.isTrue(eqArrays(array1,array2));
  });
  it('undefined: [1, 2, null] !eq [1, 2, undefined]', function() {
    const array1 = [1, 2, null];
    const array2 = [1, 2, undefined];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('undefined: [1, 2, 3] !eq [1, 2, undefined]', function() {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, undefined];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('undefined: [1, 2, undefined] !eq [1, 2, "undefined"]', function() {
    const array1 = [1, 2, undefined];
    const array2 = [1, 2, "undefined"];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('undefined: [1, 2, undefined] eq [1, 2, undefined]', function() {
    const array1 = [1, 2, undefined];
    const array2 = [1, 2, undefined];
    assert.isTrue(eqArrays(array1,array2));
  });
  it('boolean: [1, 2, 0] !eq [1, 2, false]', function() {
    const array1 = [1, 2, 0];
    const array2 = [1, 2, false];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('boolean: [1, 2, true] !eq [1, 2, "true"]', function() {
    const array1 = [1, 2, true];
    const array2 = [1, 2, "true"];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('boolean: [1, 2, false] eq [1, 2, false]', function() {
    const array1 = [1, 2, false];
    const array2 = [1, 2, false];
    assert.isTrue(eqArrays(array1,array2));
  });
  it('functions: [1, 2, 3] !eq [1, 2, (x) => x + 1]', function() {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, (x) => x + 1];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('functions: [1, 2, (x) => x + 1] !eq [1, 2, "(x) => x + 1"]', function() {
    const array1 = [1, 2, (x) => x + 1];
    const array2 = [1, 2, "(x) => x + 1"];
    assert.isFalse(eqArrays(array1,array2));
  });
  it('functions: [1, 2, (x) => x + 1] eq [1, 2, (x) => x + 1]', function() {
    const array1 = [1, 2, (x) => x + 1];
    const array2 = [1, 2, (x) => x + 1];
    assert.isTrue(eqArrays(array1,array2));
  });
});