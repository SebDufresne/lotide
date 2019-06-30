const chai = require('chai');
const assert = chai.assert;

const eqObjects = require('../eqObjects');

describe('eqObjects', function() {
  it('{ a: "1", b: "2" } eq { b: "2", a: "1" }', function() {
    const object1 = { a: "1", b: "2" };
    const object2 = { b: "2", a: "1" };
    assert.isTrue(eqObjects(object1,object2));
  });
  it('{ a: "1", b: "2" } !eq { a: "1", b: "2", c: "3" }', function() {
    const object1 = { a: "1", b: "2" };
    const object2 = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(object1,object2));
  });
  it('{ c: "1", d: ["2", 3] } eq { d: ["2", 3], c: "1" }', function() {
    const object1 = { c: "1", d: ["2", 3] };
    const object2 = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(object1,object2));
  });
  it('{ c: "1", d: ["2", 3] } !eq { c: "1", d: ["2", 3, 4] }', function() {
    const object1 = { c: "1", d: ["2", 3] };
    const object2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(object1,object2));
  });
  it('{ c: "1", d: ["2", 3, 4], e: {f: [2, 4]}} eq { c: "1", e: {f: [2, 4]}, d: ["2", 3, 4]}', function() {
    const object1 = { c: "1", d: ["2", 3, 4], e: {f: [2, 4]}};
    const object2 = { c: "1", e: {f: [2, 4]}, d: ["2", 3, 4]};
    assert.isTrue(eqObjects(object1,object2));
  });
  it('{ e: {f: [2, 4]}, g: NaN } eq { e: {f: [2, 4]}, g: NaN }', function() {
    const object1 = { e: {f: [2, 4]}, g: NaN };
    const object2 = { e: {f: [2, 4]}, g: NaN };
    assert.isTrue(eqObjects(object1,object2));
  });
  it('{ e: {f: [2, 4]}, g: NaN } !eq { e: {f: [2, 4]}, g: 8 }', function() {
    const object1 = { e: {f: [2, 4]}, g: NaN };
    const object2 = { e: {f: [2, 4]}, g: 8 };
    assert.isFalse(eqObjects(object1,object2));
  });
});