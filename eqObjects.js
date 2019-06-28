const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
/*
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
*/

const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

// Collaborative work with Hans
// Won't test functions properly
const eqObjects = (obj1, obj2) => {
  return obj1 &&
         obj2 &&
         typeof obj1 === 'object' &&
         typeof obj1 === typeof obj2 ? (
           Object.keys(obj1).length === Object.keys(obj2).length &&
           Object.keys(obj1).every(key => eqObjects(obj1[key], obj2[key]))
           )
         : (obj1 === obj2) || !(isNaN(obj1) ^ isNaN(obj2));
};



// Recursive:

const cdef = { c: "1", d: ["2", 3, 4], e: {f: [2, 4]}};
const cdef2 = { c: "1", e: {f: [2, 4]}, d: ["2", 3, 4]};

assertEqual(eqObjects(cdef, cdef2),true);


const ef = { e: {f: [2, 4]}, g: NaN };
const ef2 = { e: {f: [2, 4]}, g: NaN };
const ef3 = { e: {f: [2, 4]}, g: 8 };

assertEqual(eqObjects(ef, ef2),true);
assertEqual(eqObjects(ef3, ef2),false);


eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba),true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);

