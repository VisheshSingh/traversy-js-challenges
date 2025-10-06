export function arrayPreviousLess(items: number[]): number[] {
  let stack: number[] = [];
  let result = Array.from({ length: items.length }).fill(-1);
  for (let i = 0; i < items.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= items[i]) {
      stack.pop();
    }
    result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(items[i]);
  }
  return result as number[];
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
