const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  JSON.stringify(actual) === JSON.stringify(expected) ?
    console.log(`\u2705 Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
};

const takeUntil = function(array, callback) {
  const returnArr = [];
  for (const ele of array) {
    if (!callback(ele)) {
      returnArr.push(ele);
    } else {
      return returnArr;
    }
  }
  return returnArr;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);

/*
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/
