export function arrayMaximalAdjacentDifference(arr: number[]): number {
  let max = Math.abs(arr[0] - arr[1]);
  for (let i = 2; i < arr.length; i++) {
    let absval = Math.abs(arr[i - 1] - arr[i]);
    max = absval > max ? absval : max;
  }
  return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
