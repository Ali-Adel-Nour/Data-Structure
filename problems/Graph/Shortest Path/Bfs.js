function shortestPath(graph, a, b) {
  function getNeighbors(node) {
      return graph[node];
  }
  function bfs(root, target) {
      const queue = [root];
      const visited = new Set();
      visited.add(root);
      let level = 0;
      while (queue.length > 0) {
          for (let i = 0; i < queue.length; i++) {
              const node = queue.shift();
              if (node === target) return level;
              for (const neighbor of getNeighbors(node)) {
                  if (visited.has(neighbor)) continue;
                  queue.push(neighbor);
                  visited.add(neighbor);
              }
          }
          level += 1;
      }
      return level;
  }
  return bfs(a, b);
}