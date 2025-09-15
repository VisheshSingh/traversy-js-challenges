function validatePassword(str) {
  const isAtleast8Chars = str.length >= 0;
  const hasUppercase = str
    .split('')
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());
  const hasLowercase = str
    .split('')
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());
  const hasDigit = str.split('').some((char) => !isNaN(parseInt(char, 10)));
  return isAtleast8Chars && hasUppercase && hasLowercase && hasDigit;
}

module.exports = validatePassword;
