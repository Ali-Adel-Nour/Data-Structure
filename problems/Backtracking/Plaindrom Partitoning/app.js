//https://leetcode.com/problems/palindrome-partitioning/

function isPalindrome(word) {
  let l = 0;
  let r = word.length - 1;
  while (l < r) {
      if (word.charAt(l) !== word.charAt(r)) return false;
      l++;
      r--;
  }
  return true;
}

var partition = function(s) {
   const ans = [];
  const n = s.length;
  function dfs(start, part) {
      if (start === n) {
          ans.push([...part]);
          return;
      }
      for (let end = start + 1; end < n + 1; end++) {
          const prefix = s.substring(start, end);
          if (isPalindrome(prefix)) {
              part.push(prefix);
              dfs(end, part);
              part.pop();
          }
      }
  }
  dfs(0, []);
  return ans;
};