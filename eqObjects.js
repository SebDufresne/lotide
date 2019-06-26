const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba),true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);
