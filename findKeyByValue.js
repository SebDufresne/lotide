const findKeyByValue  = (obj,value) => {
  for (const objKey in obj) {
    if (obj[objKey] === value) {
      return objKey;
    }
  }
};

module.exports = findKeyByValue;