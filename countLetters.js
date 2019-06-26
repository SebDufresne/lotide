// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};


const countLetters = function(string) {
  const noSpace = string.split(' ').join('');
  const letterList = {};
  for (const letter of noSpace) {
    letterList[letter] ? letterList[letter] += 1 : letterList[letter] = 1;
  }
  return letterList;
};


assertEqual(countLetters("this is a test")["a"],1);
assertEqual(countLetters("lighthouse in the house")["a"],undefined);