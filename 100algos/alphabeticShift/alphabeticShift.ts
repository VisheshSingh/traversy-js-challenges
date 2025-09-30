export function alphabeticShift(inputString: string): string {
  const chars = inputString.split('');
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === 'z') {
      chars[i] = 'a';
    } else {
      chars[i] = String.fromCharCode(chars[i].charCodeAt(0) + 1);
    }
  }
  return chars.join('');
}

console.log(alphabeticShift('crazy'));
