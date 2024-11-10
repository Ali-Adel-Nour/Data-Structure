function bfs(root) {
  let queue = [root];
  let visited = new Set([root]);
  let level = 0;
  while (queue.length > 0) {
      const n = queue.length;  // get # of nodes in the current level
      for (let i = 0; i < n; i++) {
          const node = queue.shift();
          for (const neighbor of get_neighbors(node)) {
              if (visited.has(neighbor)) continue;
              queue.push(neighbor);
              visited.add(neighbor);
          }
      }
      // increment level after we have processed all nodes of the level
      level++;
  }
}
