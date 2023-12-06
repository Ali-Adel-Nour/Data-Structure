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