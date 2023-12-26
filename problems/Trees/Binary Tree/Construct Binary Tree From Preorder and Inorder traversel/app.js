// Recursion
/*
var buildTree = function(preorder, inorder) {
  if (inorder.length > 0) {
      var ind = inorder.indexOf(preorder.shift());
      var root = new TreeNode(inorder[ind]);
      root.left = buildTree(preorder, inorder.slice(0, ind));
      root.right = buildTree(preorder, inorder.slice(ind + 1));
      return root;
  }
  return null;
};
*/

//loop
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) {
      return null;
  }

  var root = new TreeNode(preorder[0]);
  var stack = [root];
  var inorderIndex = 0;

  for (var i = 1; i < preorder.length; i++) {
      var preVal = preorder[i];
      var node = stack[stack.length - 1];

      if (node.val !== inorder[inorderIndex]) {
          node.left = new TreeNode(preVal);
          stack.push(node.left);
      } else {
          while (stack.length && stack[stack.length - 1].val === inorder[inorderIndex]) {
              node = stack.pop();
              inorderIndex++;
          }
          node.right = new TreeNode(preVal);
          stack.push(node.right);
      }
  }
  return root;
};
