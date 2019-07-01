const takeUntil = function(array, callback) {
  const returnArr = [];
  for (const ele of array) {
    if (!callback(ele)) {
      returnArr.push(ele);
    } else {
      return returnArr;
    }
  }
  return returnArr;
};

module.exports = takeUntil;