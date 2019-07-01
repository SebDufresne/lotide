// middle.js

const middle = function(array) {
  if (array.length < 3) {
    return [];
  }
  let middleArr = [];
  middleArr.push(array[Math.ceil(array.length / 2) - 1]);
  if (!(array.length % 2)) {
    middleArr.push(array[Math.ceil(array.length / 2)]);
  }
  return middleArr;
};

module.exports = middle;