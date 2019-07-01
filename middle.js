const middle = function(arr) {
  if (arr.length < 3) return [];

  const mid = Math.floor(arr.length / 2);

  return arr.length % 2 ?
    arr.slice(mid, mid + 1) : // Odd
    arr.slice(mid - 1, mid + 1); // Even

};

module.exports = middle;