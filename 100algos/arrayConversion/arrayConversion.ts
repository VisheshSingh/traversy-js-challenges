export function arrayConversion(inputArray: number[]): number {
  let isOdd = false;
  while (inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);
    isOdd = !isOdd;
  }
  return inputArray[0];
}

function sumProduct(arr: number[], isOdd: boolean): number[] {
  let result = [];
  if (isOdd) {
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr[i] * arr[i + 1]);
    }
  } else {
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr[i] + arr[i + 1]);
    }
  }
  return result;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
