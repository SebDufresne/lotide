const assertEqual = function(actual, expected) {
  JSON.stringify(actual) === JSON.stringify(expected) ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};

const tail = function(arr) {
  return arr.length > 2 ? arr.slice(1) : [];
};

let testArray = ["Hello", "Lighthouse", "Labs"];
const result = tail(testArray);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
