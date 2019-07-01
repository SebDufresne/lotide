const tail = require('../tail');
const assertEqual = require('../assertEqual');

let testArray = ["Hello", "Lighthouse", "Labs"];
const result = tail(testArray);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
