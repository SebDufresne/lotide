const assertArraysEqual = function(actual, expected) {
  JSON.stringify(actual) === JSON.stringify(expected) ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};

const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

const without = function(arr,withoutElems) {
  return arr.filter(ele => !withoutElems.includes(ele));
};

assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
