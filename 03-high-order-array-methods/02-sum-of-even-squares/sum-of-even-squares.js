function sumOfEvenSquares(nums) {
  return nums
    .filter((num) => num % 2 === 0)
    .map((n) => n ** 2)
    .reduce((acc, cur) => acc + cur, 0);
}

module.exports = sumOfEvenSquares;
