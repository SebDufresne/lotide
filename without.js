const without = function(arr,withoutElems) {
  return arr.filter(ele => !withoutElems.includes(ele));
};

module.exports = without;