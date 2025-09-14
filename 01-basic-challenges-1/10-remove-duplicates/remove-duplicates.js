function removeDuplicates(arr) {
  let uniqueVals = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueVals.includes(arr[i])) {
      uniqueVals.push(arr[i]);
    }
  }
  return uniqueVals;
}

module.exports = removeDuplicates;
