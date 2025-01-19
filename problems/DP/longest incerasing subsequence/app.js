function generateSubsets(nums) {
  const res = [[]];
  function dfs(i, cur) {
      if (i === nums.length) {
          return;
      }
      cur.push(nums[i]);
      res.push([...cur]);
      dfs(i + 1, cur);
      cur.pop();
      dfs(i + 1, cur);
  }
  dfs(0, []);
  return res;
}


function isIncreasing(nums) {
  const n = nums.length;
  for (let i = 1; i < n; ++i) {
      if (nums[i - 1] >= nums[i]) {
          return false;
      }
  }
  return true;
}
var lengthOfLIS = function(nums) {
  const dp = [];
  for (const num of nums) {
      let i = 0, j = dp.length;
      while (i < j) {
          const mid = Math.floor((i + j) / 2);
          if (dp[mid] < num) i = mid + 1;
          else j = mid;
      }
      if (j < dp.length) dp[j] = num;
      else dp.push(num);
  }
  return dp.length;
};
