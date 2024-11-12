function numIslands(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
      return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(row, col) {
      if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === '0') {
          return;
      }

      grid[row][col] = '0'; // Mark the cell as visited

      // Explore neighbors in all four directions
      dfs(row + 1, col);
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row, col - 1);
  }

  let islandCount = 0;

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === '1') {
              islandCount++;
              dfs(i, j);
          }
      }
  }

  return islandCount;
}



//BFS

var numIslands = function(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;

    function getNeighbors(coord) {
        const res = [];
        const [row, col] = coord;
        const deltaRow = [-1, 0, 1, 0];
        const deltaCol = [0, 1, 0, -1];
        for (let i = 0; i < deltaRow.length; i++) {
            const r = row + deltaRow[i];
            const c = col + deltaCol[i];
            if (0 <= r && r < numRows && 0 <= c && c < numCols) {
                res.push([r, c]);
            }
        }
        return res;
    }

    function bfs(start) {
        const queue = [start];
        const [r, c] = start;
        grid[r][c] = "0"; // Mark as visited by changing "1" to "0"
        while (queue.length > 0) {
            const node = queue.shift();
            for (const neighbor of getNeighbors(node)) {
                const [nr, nc] = neighbor;
                if (grid[nr][nc] === "0") continue; // Check if it's water or already visited
                queue.push(neighbor);
                grid[nr][nc] = "0"; // Mark as visited
            }
        }
    }

    let count = 0;
    // BFS starting from each unvisited land cell
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            if (grid[r][c] === "0") continue; // Skip water cells
            bfs([r, c]);
            // BFS would find 1 connected island, increment count
            count++;
        }
    }
    return count;
};
