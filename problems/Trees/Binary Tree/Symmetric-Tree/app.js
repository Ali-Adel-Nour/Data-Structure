//Recursive
var isSymmetric = function(root) {

  if (root === null) {
      return true;
  }

  // Helper function to check if two subtrees are symmetric
  const isMirror = (left, right) => {
      // If either subtree is empty, they should be equal
      if (left === null && right === null) {
          return true;
      }

      // If one subtree is empty and the other is not, they are not equal
      if (left === null || right === null) {
          return false;
      }

      // Check if the current nodes are equal and their subtrees are symmetric
      return (
          left.val === right.val &&
          isMirror(left.left, right.right) &&
          isMirror(left.right, right.left)
      );
  };

  // Start the recursion with the left and right subtrees
  return isMirror(root.left, root.right);
};


//Iterative
var isSymmetric = function(root) {
  if (!root) {
      return true; // An empty tree is symmetric
  }

  // Use a queue for iterative approach
  let queue = [root.left, root.right];

  while (queue.length > 0) {
      // Take two nodes from the queue for comparison
      let leftNode = queue.shift();
      let rightNode = queue.shift();

      // If both nodes are null, continue checking the next pair
      if (!leftNode && !rightNode) {
          continue;
      }

      // If one node is null and the other is not, they are not symmetric
      if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
          return false;
      }

      // Add the left and right children of the current nodes to the queue
      queue.push(leftNode.left, rightNode.right);
      queue.push(leftNode.right, rightNode.left);
  }

  // All pairs are symmetric
  return true;
};