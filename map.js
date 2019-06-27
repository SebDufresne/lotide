const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  JSON.stringify(actual) === JSON.stringify(expected) ?
    console.log(`\u2705 Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word.length), [ 6, 7, 2, 5, 3 ]);
assertArraysEqual(map(words, word => word[1].toUpperCase()), [ 'R', 'O', 'O', 'A', 'O' ]);


