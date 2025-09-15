function validAnagrams(str1, str2) {
  const fq1 = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  const fq2 = str2.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(fq1).every((char) => fq1[char] === fq2[char]);
}

module.exports = validAnagrams;
