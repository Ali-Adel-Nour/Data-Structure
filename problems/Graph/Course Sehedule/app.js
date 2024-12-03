var canFinish = function(numCourses, prerequisites) {
  let adj = new Map();

  // Initialize the adjacency list for each course
  for (let i = 0; i < numCourses; i++) {
      adj.set(i, []);
  }

  // Build the adjacency list from prerequisites
  for (let [src, dst] of prerequisites) {
      adj.get(dst).push(src); // dst must be completed before src
  }

  const topSort = [];
  const visit = new Set();
  const visiting = new Set(); // To detect cycles

  // Perform DFS for topological sorting
  for (let i = 0; i < numCourses; i++) {
      if (dfs(i, adj, visit, visiting, topSort)) {
          return false; // Cycle detected
      }
  }

  topSort.reverse(); // Reverse to get the correct order
  return true; // No cycles detected, courses can be finished
}

function dfs(src, adj, visit, visiting, topSort) {
  if (visiting.has(src)) {
      return true; // Cycle detected
  }
  if (visit.has(src)) {
      return false; // Already processed
  }

  visiting.add(src); // Mark as visiting
  for (let neighbor of adj.get(src)) {
      if (dfs(neighbor, adj, visit, visiting, topSort)) {
          return true; // Cycle detected in the neighbor
      }
  }

  visiting.delete(src); // Mark as visited
  visit.add(src); // Mark as processed
  topSort.push(src); // Add to topological sort
  return false; // No cycle detected
}