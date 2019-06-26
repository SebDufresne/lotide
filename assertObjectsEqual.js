const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  eqObjects(actual, expected) ?
    console.log(`\u2705 Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
};


const eqObjects = function(object1, object2) {
  if (JSON.stringify(Object.keys(object1).sort()) !== JSON.stringify(Object.keys(object2).sort())) {
    return false;
  }
  for (const objKeys in object1) {
    if (Array.isArray(object1[objKeys]) && Array.isArray(object2[objKeys])) {
      if (JSON.stringify(object1[objKeys]) !== JSON.stringify(object2[objKeys])) {
        return false;
      }
    } else {
      if (object1[objKeys] !== object2[objKeys]) {
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(ab,ba);
assertObjectsEqual(cd,dc);