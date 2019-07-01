const assert = require('chai').assert;
const without = require('../index').without;

describe("#without", () => {
  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse'] without ['lighthouse']", () => {
    assert.deepEqual(without(['hello', 'world', 'lighthouse'], ['lighthouse']), ['hello', 'world']);
  });
  it("returns ['1','2'] for ['1','2','3'] withouth [1,2,'3']", () => {
    assert.deepEqual(without(['1','2','3'],[1,2,'3']),['1','2']);
  });
});