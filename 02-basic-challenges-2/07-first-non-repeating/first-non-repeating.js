function findFirstNonRepeatingCharacter(str) {
  let charMap = {};
  for (let i = 0; i < str.length; i++) {
    charMap[str[i]] = (charMap[str[i]] || 0) + 1;
  }
  console.log(charMap);
  for (let char in charMap) {
    if (charMap[char] === 1) {
      return char;
    }
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
