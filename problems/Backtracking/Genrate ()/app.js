//https://leetcode.com/problems/generate-parentheses/solutions/5873523/easy-solution-to-understand-beats-93-using-backtracking-dfs/


function dfs(n, open, close, path, res) {
  if (open === n && close === n) {
      res.push(path);
      return;
  }
  if (open < n) {
      dfs(n, open + 1, close, path + '(', res);
  }
  if (close < open) {
      dfs(n, open, close + 1, path + ')', res);
  }
}


var generateParenthesis = function(n) {
  const res = []
  dfs(n,0,0, '' , res)
  return res
};