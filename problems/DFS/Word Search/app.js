var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;

  const dfs = (i, j, s) => {
      if (i < 0 || i >= m || j < 0 || j >= n)
          return false;
      if (board[i][j] !== word[s] || board[i][j] === '*')
          return false;
      if (s === word.length - 1)
          return true;

      const cache = board[i][j];
      board[i][j] = '*';
      const isExist = dfs(i + 1, j, s + 1) ||
                      dfs(i - 1, j, s + 1) ||
                      dfs(i, j + 1, s + 1) ||
                      dfs(i, j - 1, s + 1);
      board[i][j] = cache;

      return isExist;
  };

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (dfs(i, j, 0))
              return true;
      }
  }

  return false;
};