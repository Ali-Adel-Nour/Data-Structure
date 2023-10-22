
//Iterative
function inorderTraversal(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}

//Recursive traversal

var inorderTraversal = function(root) {
  // Base case: if the root is null, return an empty array
  if(root === null) return [];

  // Recursive call to traverse the left subtree
  const leftValues = inorderTraversal(root.left);

  // Visit the node (root)
  const rootValue = root.val;

  // Recursive call to traverse the right subtree
  const rightValues = inorderTraversal(root.right);

  // Combine the values: left subtree, root, right subtree
  return [...leftValues, rootValue, ...rightValues];
};