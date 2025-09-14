function isPalindrome(str) {
  let formattedStr = removeNonAlphanumeric(str.toLowerCase());
  let revStr = reverseString(formattedStr);

  return revStr === formattedStr;
}

function reverseString(str) {
  let revString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }

  return revString;
}

function removeNonAlphanumeric(str) {
  let formattedStr = '';

  for (let i = 0; i < str.length; i++) {
    if (isAlphaNumeric(str[i])) {
      formattedStr += str[i];
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);

  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

module.exports = isPalindrome;
