function highestScoringWord(str) {
  const words = str.split(' ');
  const scores = words.map((word) =>
    [...word].reduce((acc, char) => (acc += char.charCodeAt(0)) - 96, 0)
  );

  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);
  return words[highestIndex];
}

module.exports = highestScoringWord;
