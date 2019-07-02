const head      = require('./head');
const map       = require('./map');
const middle    = require('./middle');
const tail      = require('./tail');
const takeUntil = require('./takeUntil');
const without   = require('./without');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');

module.exports = {
  head: head,
  letterPositions: letterPositions,
  map: map,
  middle: middle,
  tail: tail,
  takeUntil: takeUntil,
  without: without,
  flatten: flatten,
  findKeyByValue : findKeyByValue,
};