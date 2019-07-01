const middle = function(array) {
  if (array.length < 3) return [];

  const midPoint = Math.ceil(array.length / 2);
  const middleArr = [];
  middleArr.push(array[Math.ceil(midPoint) - 1]);
  if (!(array.length % 2)) {
    middleArr.push(array[Math.ceil(midPoint)]);
  }
  return middleArr;
};

module.exports = middle;