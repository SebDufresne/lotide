// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};

const assertArraysEqual = function(actual, expected) {
  JSON.stringify(actual) === JSON.stringify(expected) ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};


const letterPositions = function(string) {
  let letterPos = {};
  for (let i = 0; i < string.length; i++) {
    if (!string[i].match(/ /)) {
      letterPos[string[i].toLowerCase()] ? letterPos[string[i]].push(i) : letterPos[string[i].toLowerCase()] = [i];
    }
  }
  return letterPos;
};

assertArraysEqual(letterPositions("this is a test")["a"],[ 8 ]);
assertArraysEqual(letterPositions("lighthouse in the house")["i"],[ 1, 11 ]);