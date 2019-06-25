const assertArraysEqual = function(actual, expected) {
  JSON.stringify(actual) === JSON.stringify(expected) ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};

//assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
//assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false