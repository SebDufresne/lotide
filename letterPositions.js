const letterPositions = function(string) {
  let letterPos = {};

  const str = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (!str[i].match(/ /)) {
      if (!letterPos[str[i]]) letterPos[str[i]] = [];
      letterPos[str[i]].push(i);
    }
  }
  return letterPos;
};

module.exports = letterPositions;