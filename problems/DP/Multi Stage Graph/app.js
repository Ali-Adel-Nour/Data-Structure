function multiStageGraph(costMatrix, stages) {
  const n = costMatrix.length - 1; // Number of nodes (0-based indexing)
  const cost = Array(n + 1).fill(0); // Minimum cost to reach the destination from each node
  const d = Array(n + 1).fill(0); // Store the next node in the path
  const path = Array(stages).fill(0); // Final path across the stages

  // Initialize the cost of the destination node
  cost[n] = 0;

  // Dynamic programming approach (backward calculation)
  for (let i = n - 1; i >= 1; i--) {
    let minCost = Number.MAX_SAFE_INTEGER; // Initialize minimum cost for the current node
    for (let k = i + 1; k <= n; k++) {
      if (costMatrix[i][k] !== 0 && costMatrix[i][k] + cost[k] < minCost) {
        minCost = costMatrix[i][k] + cost[k];
        d[i] = k; // Store the next node for the optimal path
      }
    }
    cost[i] = minCost; // Store the minimum cost for the current node
  }

  // Build the path from source to destination
  path[0] = 1; // Source node (assuming it is node 1)
  path[stages - 1] = n; // Destination node
  for (let i = 1; i < stages - 1; i++) {
    path[i] = d[path[i - 1]];
  }

  // Return the results
  return { minCost: cost[1], path };
}

// Example usage:
const costMatrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // Node 0 (not used)
  [0, 0, 2, 1, 3, 0, 0, 0, 0], // Costs from Node 1
  [0, 0, 0, 0, 0, 2, 3, 0, 0], // Costs from Node 2
  [0, 0, 0, 0, 0, 6, 7, 0, 0], // Costs from Node 3
  [0, 0, 0, 0, 0, 6, 8, 9, 0], // Costs from Node 4
  [0, 0, 0, 0, 0, 0, 0, 0, 6], // Costs from Node 5
  [0, 0, 0, 0, 0, 0, 0, 0, 4], // Costs from Node 6
  [0, 0, 0, 0, 0, 0, 0, 0, 5], // Costs from Node 7
  [0, 0, 0, 0, 0, 0, 0, 0, 0]  // Costs from Node 8 (destination)
];
const stages = 4; // Number of stages in the graph

const result = multiStageGraph(costMatrix, stages);
console.log("Minimum Cost:", result.minCost);
console.log("Path:", result.path);
