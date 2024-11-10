function bfsTemplate(root) {
  // Handle the case of an empty tree
  if (root === null) return [];

  const queue = [root]; // Initialize the queue with the root node
  const results = []; // Prepare to store results

  while (queue.length > 0) {
      const levelSize = queue.length; // Number of nodes at the current level
      let levelResult = []; // Initialize an array to store values of the current level

      for (let i = 0; i < levelSize; i++) {
          const node = queue.shift(); // Dequeue the front node

          // Process the current node (e.g., store its value)
          levelResult.push(node.val); // Example: store the node's value

          // Add children to the queue for the next level
          if (node.left) queue.push(node.left); // Enqueue left child if it exists
          if (node.right) queue.push(node.right); // Enqueue right child if it exists
      }

      // Store the result for this level (e.g., all values at this level)
      results.push(levelResult); // Example: store values of the current level
  }

  return results; // Return the final results
}