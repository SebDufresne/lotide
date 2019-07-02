const flatten = function(array) {
  let flatArr = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      flatArr = flatArr.concat(flatten(element));
    } else {
      flatArr.push(element);
    }
  }
  return flatArr;
};

module.exports = flatten;