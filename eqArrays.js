const eqObjects = require('./eqObjects');

const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const arrTi1 = typeof arr1[i];
    const arrTi2 = typeof arr2[i];
    if (arrTi1 !== arrTi2) return false;
    switch (arrTi1) {
    case ("string"):
      if (arr1[i] !== arr2[i]) return false;
      break;
    case ("number"):
      if (isNaN(arr1[i]) ^ isNaN(arr2[i])) return false;
      if (!isNaN(arr1[i])) {
        if (arr1[i] !== arr2[i]) return false;
      }
      break;
    case ("function"):
      if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) return false;
      break;
    case ("boolean"):
      if (arr1[i] !== arr2[i]) return false;
      break;
    case ("undefined"):
      if (arr1[i] !== arr2[i]) return false;
      break;
    case ("object"):
      if (arr1[i] === null) {
        if (arr1[i] !== arr2[i]) return false;
      } else if (Array.isArray(arr1[i])) {
        if (!eqArrays(arr1[i],arr2[i])) return false;
      } else {
        if (arr1[i] !== arr2[i]) {
          if (!eqObjects(arr1[i],arr2[i])) return false;
        }
      }
      break;
    }
  }
  return true;
};

module.exports = eqArrays;