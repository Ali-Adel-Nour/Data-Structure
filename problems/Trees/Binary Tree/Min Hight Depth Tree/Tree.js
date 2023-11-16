var minDepth = function(root) {
  // Base case: empty subtree, return 0
  if (root == null) {
      return 0;
  }

  // Recursive cases
  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);

  // If one of the subtrees is empty, return the depth of the non-empty subtree
  if (leftDepth === 0 || rightDepth === 0) {
      return 1 + leftDepth + rightDepth;
  }

  // If both subtrees are non-empty, return the minimum depth
  return 1 + Math.min(leftDepth, rightDepth);
};