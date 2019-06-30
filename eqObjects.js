const eqArrays = function(arr1, arr2) {
  return arr1.length === arr2.length &&
         arr1.reduce((acc,ele,i) => Array.isArray(ele) ?
           eqArrays(ele,arr2[i]) :
           (ele === arr2[i] || (isNaN(ele) && isNaN(arr2[i]))),true);
};

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
        if (!eqObjects(obj1[keys],obj2[keys])) return false;
      }
      break;
    }
  }
  return true;
};

module.exports = eqObjects;