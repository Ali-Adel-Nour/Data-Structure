function getKnightShortestPath(x, y) {
  function getNeighbors(coord) {
      const res = [];
      const [row, col] = coord;
      const deltaRow = [-2, -2, -1, 1, 2, 2, 1, -1];
      const deltaCol = [-1, 1, 2, 2, 1, -1, -2, -2];
      for (let i = 0; i < deltaRow.length; i++) {
          const r = row + deltaRow[i];
          const c = col + deltaCol[i];
          res.push([r, c]);
      }
      return res;
  }

  function bfs(start) {
      const visited = new Set();
      let steps = 0;
      const queue = [start];
      while (queue.length > 0) {
          const n = queue.length;
          for (let i = 0; i < n; i++) {
              const node = queue.shift();
              if (node[0] === y && node[1] === x) return steps;
              for (const neighbor of getNeighbors(node)) {
                  const neighborStr = neighbor.join(",");
                  if (visited.has(neighborStr)) continue;
                  queue.push(neighbor);
                  visited.add(neighborStr);
              }
          }
          steps++;
      }
      return steps;
  }

  return bfs([0, 0]);
}
