// --->>>
// Will be removed once circular dependancy issue is resolved.
const eqObjects = (obj1, obj2) => {
  const ok1 =  Object.keys(obj1);
  const ok2 =  Object.keys(obj2);

  if (ok1.length !== ok2.length) return false;
  for (const keys in obj1) {
    const otk1 = typeof obj1[keys];
    const otk2 = typeof obj2[keys];
    if (otk1 !== otk2) return false;
    switch (otk1) {
    case ("string"):
      if (obj1[keys] !== obj2[keys]) return false;
      break;
    case ("number"):
      if (isNaN(obj1[keys]) ^ isNaN(obj2[keys])) return false;
      if (!isNaN(obj1[keys])) {
        if (obj1[keys] !== obj2[keys]) return false;
      }
      break;
    case ("function"):
      if (JSON.stringify(obj1[keys]) !== JSON.stringify(obj2[keys])) return false;
      break;
    case ("boolean"):
      if (obj1[keys] !== obj2[keys]) return false;
      break;
    case ("undefined"):
      if (obj1[keys] !== obj2[keys]) return false;
      break;
    case ("object"):
      if (obj1[keys] === null) {
        if (obj1[keys] !== obj2[keys]) return false;
      } else if (Array.isArray(obj1[keys])) {
        if (!eqArrays(obj1[keys],obj2[keys])) return false;
      } else {
        if (obj1[keys] !== obj2[keys]) {
          if (!eqObjects(obj1[keys],obj2[keys])) return false;
        }
      }
      break;
    }
  }
  return true;
};
// <<<---

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