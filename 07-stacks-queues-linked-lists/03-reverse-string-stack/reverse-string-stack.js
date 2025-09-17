const Stack = require('./stack');

function reverseStringStack(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  console.log(stack);
  let revString = '';
  while (!stack.isEmpty()) {
    revString += stack.pop();
  }
  return revString;
}

module.exports = reverseStringStack;
