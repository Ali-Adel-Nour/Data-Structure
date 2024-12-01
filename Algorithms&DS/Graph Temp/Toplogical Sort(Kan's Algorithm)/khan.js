// Function to calculate the in-degree of each node in the graph
function findInDegree(graph) {
  // Create a map to store the in-degree of each node
  const inDegree = new Map();

  // Initialize the in-degree of each node to 0
  for (let node of graph.keys()) {
      inDegree.set(node, 0);
  }

  // Calculate the in-degree for each node by iterating through the graph
  for (let node of graph.keys()) {
      // For each neighbor of the current node, increment its in-degree
      for (let neighbor of graph.get(node)) {
          inDegree.set(neighbor, inDegree.get(neighbor) + 1);
      }
  }

  // Return the map containing the in-degree of each node
  return inDegree;
}

// Function to perform topological sorting on a directed graph
function topoSort(graph) {
  // Array to store the result of the topological sort
  const res = [];

  // Queue to manage nodes with in-degree of 0
  const q = [];

  // Get the in-degree of each node in the graph
  const inDegree = findInDegree(graph);

  // Add all nodes with in-degree of 0 to the queue
  for (let node of inDegree.keys()) {
      if (inDegree.get(node) == 0) {
          q.push(node);
      }
  }

  // Process nodes in the queue until it's empty
  while (q.length > 0) {
      // Remove the front node from the queue
      const node = q.shift();
      // Add the node to the result array
      res.push(node);

      // Decrease the in-degree of each neighbor of the current node
      for (let neighbor of graph.get(node)) {
          inDegree.set(neighbor, inDegree.get(neighbor) - 1);
          // If the in-degree of the neighbor becomes 0, add it to the queue
          if (inDegree.get(neighbor) == 0) {
              q.push(neighbor);
          }
      }
  }

  // If the result size matches the graph size, return the result; otherwise, return null (cycle detected)
  return (graph.size === res.length) ? res : null;
}