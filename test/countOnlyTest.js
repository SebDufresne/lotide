const assert = require('chai').assert;
const countOnly = require('../index').countOnly;

describe("#countOnly", () => {
  it("returns { 'hola' : 2 } for ['hola', 'hello', 'hola'] with { 'hola' : true }", () => {
    const testObj = ['hola', 'hello', 'hola'];
    const value =  { 'hola' : true };
    const expect = { 'hola' : 2 };
    assert.deepEqual(countOnly(testObj, value), expect);
  });
  it("returns { } for ['hola', 'hello', 'hola'] with { 'hola' : false }", () => {
    const testObj = ['hola', 'hello', 'hola'];
    const value =  { 'hola' : false };
    const expect = { };
    assert.deepEqual(countOnly(testObj, value), expect);
  });
});