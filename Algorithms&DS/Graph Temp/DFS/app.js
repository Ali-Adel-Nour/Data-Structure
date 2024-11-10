function dfs(root) {
  const visited = new Set(); // Initialize visited set
  function dfsHelper(node) {
      if (!node) return;
      visited.add(node); // Mark the node as visited
      for (const neighbor of get_neighbors(node)) {
          if (!visited.has(neighbor)) {
              dfsHelper(neighbor); // Recursively visit unvisited neighbors
          }
      }
      for (const child of node.children) {
          if (!visited.has(child)) {
              dfsHelper(child); // Recursively visit unvisited children
          }
      }
  }
  dfsHelper(root); // Start DFS from the root
}