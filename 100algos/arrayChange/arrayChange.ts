export function arrayChange(inputArray: number[]): number {
  let moves = 0;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      let needed = inputArray[i - 1] - inputArray[i] + 1;
      inputArray[i] += needed;
      moves += needed;
    }
  }
  return moves;
}

console.log(arrayChange([1, 1, 1]));
