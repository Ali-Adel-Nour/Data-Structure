
//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

function buildTreeRecursive(preorder, indexMap, preStart, inStart, size) {
  if (size <= 0) return null;

  const rootValue = preorder[preStart];
  const inorderIndex = indexMap.get(rootValue);
  const leftSize = inorderIndex - inStart;

  const left = buildTreeRecursive(preorder, indexMap, preStart + 1, inStart, leftSize);
  const right = buildTreeRecursive(preorder, indexMap, preStart + 1 + leftSize, inorderIndex + 1, size - 1 - leftSize);

  return new TreeNode(rootValue, left, right);
}

var buildTree = function(preorder, inorder) {
   const indexMap = new Map();
  inorder.forEach((value, index) => {
      indexMap.set(value, index);
  });
  return buildTreeRecursive(preorder, indexMap, 0, 0, preorder.length);
};