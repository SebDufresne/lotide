const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  JSON.stringify(actual) === JSON.stringify(expected) ?
    console.log(`\u2705 Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
};

const findKey = (obj, cb) => Object.keys(obj).find(key => cb(obj[key]));


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"