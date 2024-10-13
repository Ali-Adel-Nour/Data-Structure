
//https://leetcode.com/problems/word-break/

var wordBreak = function(s, wordDict) {
  const memo = {};

  function backtrack(remaining) {

      if (remaining === "") {
          return true;
      }


      if (remaining in memo) {
          return memo[remaining];
      }


      for (let word of wordDict) {

          if (remaining.startsWith(word)) {
              const nextRemaining = remaining.slice(word.length);


              if (backtrack(nextRemaining)) {
                  memo[remaining] = true;
                  return true;
              }
          }
      }


      memo[remaining] = false;
      return false;
  }

  return backtrack(s);
};