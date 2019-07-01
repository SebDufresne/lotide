const assertEqual = function(actual, expected) {
  JSON.stringify(actual) === JSON.stringify(expected) ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};

const tail = function(arr) {
  return arr.length > 2 ? arr.slice(1) : [];
};

module.exports = tail;