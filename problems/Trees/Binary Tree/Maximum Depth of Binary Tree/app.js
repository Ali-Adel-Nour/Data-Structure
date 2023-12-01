//In js we will you will need to convert the array into a proper binary tree structure before applying the recursive maxDepth function.
class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

class Solution {
  maxDepth(root) {
      // Base Condition
      if (root === null) return 0;

      // Hypothesis
      let left = this.maxDepth(root.left);
      let right = this.maxDepth(root.right);

      // Induction
      return Math.max(left, right) + 1;
  }

  arrayToBinaryTree(arr, index = 0) {
      if (index < arr.length && arr[index] !== null) {
          return new TreeNode(
              arr[index],
              this.arrayToBinaryTree(arr, 2 * index + 1),
              this.arrayToBinaryTree(arr, 2 * index + 2)
          );
      }
      return null;
  }
}

// Example usage
let solution = new Solution();
let treeArray = [3, 9, 20, null, null, 15, 7];
let tree = solution.arrayToBinaryTree(treeArray);
let result = solution.maxDepth(tree);
console.log(result);  // Output: 3
