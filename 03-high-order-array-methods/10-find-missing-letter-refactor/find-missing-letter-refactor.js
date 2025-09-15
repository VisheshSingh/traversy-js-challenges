function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);
  const missingCharCode = arr
    .map((char) => char.charCodeAt(0))
    .find((cur) => {
      if (cur - start > 1) {
        return true;
      }
      start = cur;
      return false;
    });
  return missingCharCode ? String.fromCharCode(missingCharCode - 1) : '';
}

module.exports = findMissingLetter;
