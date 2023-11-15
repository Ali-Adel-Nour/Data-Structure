var isValidBST = function(root) {
  // Use variables to track the minimum and maximum values
  let min = Number.NEGATIVE_INFINITY;
  let max = Number.POSITIVE_INFINITY;

  // Recursive function to check validity
  function isValid(node, min, max) {
      if (!node) {
          return true;
      }

      // Check if the current node's value is within the valid range
      if (node.val <= min || node.val >= max) {
          return false;
      }

      // Recursively check the left and right subtrees with updated ranges
      return isValid(node.left, min, node.val) && isValid(node.right, node.val, max);
  }

  // Start the recursion with the root node
  return isValid(root, min, max);
};