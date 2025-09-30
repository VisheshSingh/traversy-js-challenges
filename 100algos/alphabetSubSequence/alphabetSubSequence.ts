export function alphabetSubsequence(s: string): boolean {
  const chars = s.split('');
  const charValues = [];
  if (new Set(chars).size !== chars.length) {
    return false;
  }
  for (let char of chars) {
    charValues.push(char.charCodeAt(0));
  }
  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i] > charValues[i + 1]) return false;
  }
  return true;
}

console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
