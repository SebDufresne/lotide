const assertArraysEqual = function(actual, expected) {
  JSON.stringify(actual) === JSON.stringify(expected) ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};

const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};


const flatten = function(array) {
  let flatArr = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      flatArr = flatArr.concat(flatten(element));
    } else {
      flatArr.push(element);
    }
  }
  return flatArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6,[7,8]]]),[1, 2, 3, 4, 5, 6, 7, 8]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [5, 4], 5, [6]]),[1, 2, 5, 4, 5, 6]);