const assertEqual = function(actual, expected) {
  JSON.stringify(actual) === JSON.stringify(expected) ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};

const eqArrays = function(arr1, arr2) {
  return arr1.length === arr2.length &&
         arr1.reduce((acc,ele,i) => Array.isArray(ele) ? eqArrays(ele,arr2[i]) : ele === arr2[i],true);
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true


console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false



console.log(eqArrays([[2, 3], [4],[[[1],2]]],[[2, 3], [4],[[[1],2]]])); // => true