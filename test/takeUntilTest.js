const assert = require('chai').assert;
const takeUntil = require('../index').takeUntil;

describe('#takeUntil', () =>{
  it("returns [1, 2] for [1, 2, -1, 4] with callback x => x < 0", () =>{
    const input = [1, 2, -1, 4];
    const expected = [1, 2];
    const callbackFct = x => x < 0;
    assert.deepEqual(takeUntil(input, callbackFct),expected);
  });
  it("returns [ 'Hey' ] for ['Hey', '!','How','are','you','?'] with callback x => x === '!'", () => {
    const input = ['Hey', '!','How','are','you','?'];
    const expected = [ 'Hey' ];
    const callbackFct = x => x === '!';
    assert.deepEqual(takeUntil(input,callbackFct),expected);
  });
});