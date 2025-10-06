export function areSimilar(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  let diff = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diff.push(i);
      if (diff.length > 2) return false;
    }
  }
  if (diff.length === 0) return true;
  if (diff.length === 2) {
    const [i, j] = diff;
    return a[i] === b[j] && a[j] === b[i];
  }

  return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
