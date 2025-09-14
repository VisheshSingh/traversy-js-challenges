function findMissingNumber(nums) {
  let actualTotal = nums.reduce((acc, cur) => acc + cur, 0);
  let n = nums.length + 1;
  let estimatedTotal = (n * (n + 1)) / 2;
  return estimatedTotal - actualTotal;
}

module.exports = findMissingNumber;
