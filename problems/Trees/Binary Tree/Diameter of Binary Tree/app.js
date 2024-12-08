let maxDiameter = 0;

// Helper function to calculate the height of the tree
function dfs(node) {
    if (node === null) {
        return 0; // Base case: height of a null node is 0
    }

    // Recursive call to calculate height of left and right subtrees
    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);

    // Update the diameter at the current node
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

    // Return the height of the current node
    return 1 + Math.max(leftHeight, rightHeight);
}

// Start the DFS from the root
dfs(root);

// Return the maximum diameter
return maxDiameter;
