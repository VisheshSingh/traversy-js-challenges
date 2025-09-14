function areAllCharactersUnique(str) {
  let charMap = {};
  for (let i = 0; i < str.length; i++) {
    charMap[str[i]] = (charMap[str[i]] || 0) + 1;
  }
  console.log(charMap);
  for (let key in charMap) {
    if (charMap[key] > 1) {
      return false;
    }
  }
  return true;
}

module.exports = areAllCharactersUnique;
