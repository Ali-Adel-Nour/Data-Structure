var buildTree = function(inorder, postorder) {
  if (!inorder.length || !postorder.length) {
      return null;
  }
  var val = postorder.pop();
  var index = inorder.indexOf(val);
  var node = new TreeNode(val);
  node.right = buildTree(inorder.slice(index+1, inorder.length), postorder);
  node.left = buildTree(inorder.slice(0, index), postorder);
  return node;
};