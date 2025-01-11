//Tabultion
var minimumTotal = function(triangle) {

  for (let row = triangle.length - 2; row >= 0; row--) {
      for (let col = 0; col < triangle[row].length; col++) {

          triangle[row][col] += Math.min(
              triangle[row + 1][col],
              triangle[row + 1][col + 1]
          );
      }
  }

  return triangle[0][0];
}

//Memoization
function minimumTotal(triangle) {
  const memo = new Map(); // A cache to store results for each position

  function dfs(row, col) {
      // If we're out of bounds, return 0 (base case)
      if (row === triangle.length) return 0;

      // Check if the result is already computed
      const key = `${row}-${col}`;
      if (memo.has(key)) return memo.get(key);

      // Compute the minimum path sum for the current position
      const currentValue = triangle[row][col];
      const leftPath = dfs(row + 1, col); // Explore the left child
      const rightPath = dfs(row + 1, col + 1); // Explore the right child
      const result = currentValue + Math.min(leftPath, rightPath);

      // Store the result in the cache
      memo.set(key, result);

      return result;
  }

  return dfs(0, 0); // Start from the top of the triangle
}

