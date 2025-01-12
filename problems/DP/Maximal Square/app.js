var maximalSquare = function(matrix) {
  if (!matrix.length) return 0;
  let dp = new Array(matrix.length+1).fill(0).map(()=>new Array(matrix[0].length+1).fill(0));
  let max = 0;
  for (let r=1;r<dp.length;r++) {
      for (let c=1;c<dp[0].length;c++) {
          if (matrix[r-1][c-1]!=0) {
              dp[r][c] = Math.min(dp[r][c-1], dp[r-1][c], dp[r-1][c-1])+1;
              max = Math.max(dp[r][c], max);
          }
      }
  }
  return max**2;
};