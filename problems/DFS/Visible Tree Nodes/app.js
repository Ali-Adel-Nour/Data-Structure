class Node {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function dfs(root, maxSoFar) {
  if (!root) return 0;
  let total = 0;
  if (root.val >= maxSoFar) total++;


  total += dfs(root.left, Math.max(maxSoFar, root.val));
  total += dfs(root.right, Math.max(maxSoFar, root.val));

  return total;
}