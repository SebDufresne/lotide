const countLetters = function(string) {
  const noSpace = string.split(' ').join('');
  const letterList = {};

  for (const letter of noSpace) {
    if (!letterList[letter]) letterList[letter] = 0;
    letterList[letter] += 1;
  }
  return letterList;
};

module.exports = countLetters;