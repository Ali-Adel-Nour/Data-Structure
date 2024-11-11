//DFS

var floodFill = function(image, sr, sc, color) {
    const num_rows = image.length;
    const num_cols = image[0].length;
    const originalColor = image[sr][sc];

    // If the original color is the same as the new color, return the image
    if (originalColor === color) return image;

    function getNeighbors(coord) {
        const [row, col] = coord;

        const delta_row = [-1, 0, 1, 0];
        const delta_col = [0, 1, 0, -1];

        const res = [];

        for (let i = 0; i < delta_row.length; i++) {
            const neighbor_row = row + delta_row[i];
            const neighbor_col = col + delta_col[i];
            if (0 <= neighbor_row && neighbor_row < num_rows &&
                0 <= neighbor_col && neighbor_col < num_cols) {
                res.push([neighbor_row, neighbor_col]);
            }
        }
        return res;
    }

    function dfs(coord) {
        const [row, col] = coord;

        // Change the color of the current pixel
        image[row][col] = color;

        // Get the neighbors of the current pixel
        for (const neighbor of getNeighbors(coord)) {
            const neighborRow = neighbor[0];
            const neighborCol = neighbor[1];

            // Check if the neighbor has the original color
            if (image[neighborRow][neighborCol] === originalColor) {
                dfs(neighbor); // Recursively call dfs for the neighbor
            }
        }
    }

    // Start DFS from the starting node (sr, sc)
    dfs([sr, sc]);
    return image; // Return the modified image
};


//BFS

var floodFill = function(image, sr, sc, color) {
  const num_rows = image.length;
  const num_cols = image[0].length;
  const originalColor = image[sr][sc];


  if (originalColor === color) return image;

  function getNeighbors(coord) {
      const [row, col] = coord;

      const delta_row = [-1, 0, 1, 0];
      const delta_col = [0, 1, 0, -1];

      const res = [];

      for (let i = 0; i < delta_row.length; i++) {
          const neighbor_row = row + delta_row[i];
          const neighbor_col = col + delta_col[i];
          if (0 <= neighbor_row && neighbor_row < num_rows &&
              0 <= neighbor_col && neighbor_col < num_cols) {
              res.push([neighbor_row, neighbor_col]);
          }
      }
      return res;
  }

  function bfs(root) {
      const queue = [root];
      const visited = new Set();
      visited.add(root.toString());

      while (queue.length > 0) {
          const node = queue.shift();
          const [row, col] = node;


          image[row][col] = color;

          for (const neighbor of getNeighbors(node)) {
              if (visited.has(neighbor.toString())) continue;
              if (image[neighbor[0]][neighbor[1]] === originalColor) {
                  queue.push(neighbor);
                  visited.add(neighbor.toString());
              }
          }
      }
  }


  bfs([sr, sc]);
  return image;
};

