export function addBorder(picture: string[]): string[] {
  const wall = '*'.repeat(picture[0].length + 2);
  const items = picture.map((item) => '*' + item + '*');
  return [wall, ...items, wall];
}

console.log(addBorder(['abc', 'ded']));
console.log(addBorder(['abcdeg', 'dedef']));
