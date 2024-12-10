//https://leetcode.com/problems/insert-into-a-binary-search-tree/



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var insertIntoBST = function(root, val) {
  if(root == null){

      return new TreeNode (null)
  }

     if (root.val < val) {
      root.right = insertIntoBST(root.right, val);
  } else if (root.val > val) {
      root.left = insertIntoBST(root.left, val);
  }
  return root
}
