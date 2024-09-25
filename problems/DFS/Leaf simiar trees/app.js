//https://leetcode.com/problems/leaf-similar-trees/
function dfs(root, leaves) {
  if (!root) return; // Base case: empty node
  if (!root.left && !root.right) {
      leaves.push(root.val); // Collect leaf node
  }
  dfs(root.left, leaves);  // Explore left subtree
  dfs(root.right, leaves); // Explore right subtree
}

var leafSimilar = function(root1, root2) {
  const leaves1 = [];
  const leaves2 = [];

  // Collect leaves from both trees
  dfs(root1, leaves1);
  dfs(root2, leaves2);

  // Compare the collected leaf sequences
  return leaves1.join() === leaves2.join();
};
