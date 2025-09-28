class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  if (!root) return [];
  console.log('Current node:', root);
  console.log('what is root.left', root.left);
  console.log('what is root.right', root.right);
  const nodeLeft = maxDepth(root.left);
  const nodeRight = maxDepth(root.right);
  console.log('what is nodeLeft:', nodeLeft);
  console.log('what is nodeRight:', nodeRight);
  const res = Math.max(nodeLeft, nodeRight) + 1;
  console.log({ res });
  return res;
}

module.exports = {
  maxDepth,
  Node,
};
