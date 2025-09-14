function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i].charCodeAt(0);
    if (curr - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = curr;
  }
  return '';
}

module.exports = findMissingLetter;
