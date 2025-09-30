export function addTwoDigits(n: any): number {
  const [n1, n2] = n.toString().split('');
  return +n1 + +n2;
}

export function addTwoDigits2(n: any): number {
  const rem = n % 10;
  const quotient = Math.floor(n / 10);
  console.log(rem);
  console.log(quotient);
  return rem + quotient;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits2(29));
console.log(addTwoDigits2(35));
console.log(addTwoDigits2(78));
