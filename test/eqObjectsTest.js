const assert = require('chai').assert;

const eqObjects = require('../eqObjects');

describe('eqObjects', function() {
  it('Base: {a: 1, b: 2} eq {a: 1, b: 2}', function() {
    const object1 = {a: 1, b: 2};
    const object2 = {a: 1, b: 2};
    assert.isTrue(eqObjects(object1,object2));
  });
  it('Length: {a: 1, b: 2} eq {a: 1, b: 2, c: 3}', function() {
    const object1 = {a: 1, b: 2};
    const object2 = {a: 1, b: 2, c: 3};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('Type: {a: 1, b: 2} !eq {a: 1, b: "2"}', function() {
    const object1 = {a: 1, b: 2};
    const object2 = {a: 1, b: "2"};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('Nested: {a: 1, b: 2} !eq {a: 1, b: {c: 3, d: 4}}', function() {
    const object1 = {a: 1, b: 2};
    const object2 = {a: 1, b: {c: 3, d: 4}};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('Nested: {a: 1, b: {c: 3, d: 4}} eq {a: 1, b: {c: 3, d: 4}}', function() {
    const object1 = {a: 1, b: {c: 3, d: 4}};
    const object2 = {a: 1, b: {c: 3, d: 4}};
    assert.isTrue(eqObjects(object1,object2));
  });
  it('Nested: {a: {c: 1}, b: {e: 3, f: 4}} !eq {a: {c: 1, d: 2}, b: {e: 3, f: 4}}', function() {
    const object1 = {a: {c: 1}, b: {e: 3, f: 4}};
    const object2 = {a: {c: 1, d: 2}, b: {e: 3, f: 4}};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('Netsed: {a: 1, b: {c: { d: 2}}} eq {a: 1, b: {c: { d: 2}}}', function() {
    const object1 = {a: 1, b: {c: { d: 2}}};
    const object2 = {a: 1, b: {c: { d: 2}}};
    assert.isTrue(eqObjects(object1,object2));
  });
  it('Arrays: {a: 1, b:[2]} !eq {a: 1, b:[2, 3]}', function() {
    const object1 = {a: 1, b:[2]};
    const object2 = {a: 1, b:[2, 3]};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('Arrays: {a: 1, b:[2, 3]} eq {a: 1, b:[2, 3]}', function() {
    const object1 = {a: 1, b:[2, 3]};
    const object2 = {a: 1, b:[2, 3]};
    assert.isTrue(eqObjects(object1,object2));
  });
  it('NaN: {a: 1, b: 2} !eq {a: 1, b: NaN}', function() {
    const object1 = {a: 1, b: 2};
    const object2 = {a: 1, b: NaN};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('NaN: {a: 1, b: NaN} !eq {a: 1, b: "NaN"}', function() {
    const object1 = {a: 1, b: NaN};
    const object2 = {a: 1, b: "NaN"};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('NaN: {a: 1, b: NaN} eq {a: 1, b: NaN}', function() {
    const object1 = {a: 1, b: NaN};
    const object2 = {a: 1, b: NaN};
    assert.isTrue(eqObjects(object1,object2));
  });
  it('null: {a: 1, b: 2} !eq {a: 1, b: null}', function() {
    const object1 = {a: 1, b: 2};
    const object2 = {a: 1, b: null};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('null: {a: 1, b: null} !eq {a: 1, b: "null"}', function() {
    const object1 = {a: 1, b: null};
    const object2 = {a: 1, b: "null"};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('null: {a: 1, b: null} eq {a: 1, b: null}', function() {
    const object1 = {a: 1, b: null};
    const object2 = {a: 1, b: null};
    assert.isTrue(eqObjects(object1,object2));
  });
  it('undefined: {a: 1, b: null} !eq {a: 1, b: undefined}', function() {
    const object1 = {a: 1, b: null};
    const object2 = {a: 1, b: undefined};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('undefined: {a: 1, b: 2} !eq {a: 1, b: undefined}', function() {
    const object1 = {a: 1, b: 2};
    const object2 = {a: 1, b: undefined};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('undefined: {a: 1, b: undefined} !eq {a: 1, b: "undefined"}', function() {
    const object1 = {a: 1, b: undefined};
    const object2 = {a: 1, b: "undefined"};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('undefined: {a: 1, b: undefined} eq {a: 1, b: undefined}', function() {
    const object1 = {a: 1, b: undefined};
    const object2 = {a: 1, b: undefined};
    assert.isTrue(eqObjects(object1,object2));
  });
  it('boolean: {a: 1, b: 0} !eq {a: 1, b: false}', function() {
    const object1 = {a: 1, b: 0};
    const object2 = {a: 1, b: false};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('boolean: {a: 1, b: true} !eq {a: 1, b: "true"}', function() {
    const object1 = {a: 1, b: true};
    const object2 = {a: 1, b: "true"};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('boolean: {a: 1, b: true} eq {a: 1, b: true}', function() {
    const object1 = {a: 1, b: true};
    const object2 = {a: 1, b: true};
    assert.isTrue(eqObjects(object1,object2));
  });
  it('functions: {a: 1, b: 2} !eq {a: 1, b: (x) => x + 1}', function() {
    const object1 = {a: 1, b: 2};
    const object2 = {a: 1, b: (x) => x + 1};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('functions: {a: 1, b: (x) => x + 1} !eq {a: 1, b: "(x) => x + 1"}', function() {
    const object1 = {a: 1, b: (x) => x + 1};
    const object2 = {a: 1, b: "(x) => x + 1"};
    assert.isFalse(eqObjects(object1,object2));
  });
  it('functions: {a: 1, b: (x) => x + 1} eq {a: 1, b: (x) => x + 1}', function() {
    const object1 = {a: 1, b: (x) => x + 1};
    const object2 = {a: 1, b: (x) => x + 1};
    assert.isTrue(eqObjects(object1,object2));
  });
});