//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

//Recursive

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


var lowestCommonAncestor = function(root, p, q) {
  if (root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};


//Iterative


var lowestCommonAncestor = function(root, p, q) {
  while (root) {
      if (root.val < p.val && root.val < q.val) {
          root = root.right;
      }
      else if (root.val > p.val && root.val > q.val) {
          root = root.left;
      } else {
          break;
      }
  }
  return root;
};