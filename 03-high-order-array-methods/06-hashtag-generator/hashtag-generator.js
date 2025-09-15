function generateHashtag(str) {
  const wrods = str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .reduce((acc, cur) => (acc += cur), '#');
  console.log(wrods);
  return wrods.length > 140 || str.length === 0 ? false : wrods;
}

module.exports = generateHashtag;
