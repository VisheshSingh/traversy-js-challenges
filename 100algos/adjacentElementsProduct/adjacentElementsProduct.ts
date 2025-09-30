export function adjacentElementsProduct(inputArray: number[]): number {
  let largestProd = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > largestProd) {
      largestProd = inputArray[i] * inputArray[i + 1];
    }
  }
  return largestProd;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([3, 6, -10, -5, 7, 3]));
