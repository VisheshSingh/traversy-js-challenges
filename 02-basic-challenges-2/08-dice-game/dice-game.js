function diceGameSimulation(numSims) {
  let res = [];
  for (let i = 0; i < numSims; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;
    let result = '';
    if (sum === 7 || sum === 11) {
      result = 'win';
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = 'lose';
    } else {
      result = 'roll again';
    }
    res.push({ dice1, dice2, sum, result });
  }
  return res;
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

module.exports = diceGameSimulation;
