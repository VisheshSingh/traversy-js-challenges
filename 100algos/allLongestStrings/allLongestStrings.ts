export function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  inputArray.forEach((word) => {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  });

  console.log(longestLength);
  return inputArray.filter((word) => word.length === longestLength);
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
