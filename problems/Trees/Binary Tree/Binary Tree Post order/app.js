

var postorderTraversal = function(root) {
  if(root === null) return [];


const leftValues = postorderTraversal(root.left);
const rightValues = postorderTraversal(root.right);

const rootValue = root.val;



// Combine the values: left subtree, root, right subtree
return [...leftValues,  ...rightValues,rootValue];

};


// iterative

var postorderTraversal = function(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
      if (root) {
          res.unshift(root.val); // Add the current node's value to the beginning of the result array
          stack.push(root.left); // Push the left child onto the stack
          root = root.right; // Move to the right child
      } else {
          root = stack.pop(); // Pop a node from the stack to explore its left subtree
      }
  }

  return res;
};
