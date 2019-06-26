const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy  : "Brooklyn Nine-Nine",
  drama   :  "The Wire"
};

const findKeyByValue  = (obj,value) => {
  for (const objKey in obj) {
    if (obj[objKey] === value) {
      return objKey;
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
