var getMinimumDifference = function (root) {
  let minDiff = Infinity;
  let prevVal = -Infinity;
  function inorderTraversal(node) {
    if (node === null) return;
    inorderTraversal(node.left);
    minDiff = Math.min(minDiff, node.val - prevVal);
    prevVal = node.val;
    inorderTraversal(node.right);
  }
  inorderTraversal(root);
  return minDiff;
};