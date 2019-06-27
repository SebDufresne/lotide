const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  JSON.stringify(actual) === JSON.stringify(expected) ?
    console.log(`\u2705 Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
};

//assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
//assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false