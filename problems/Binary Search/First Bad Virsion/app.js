
//https://leetcode.com/problems/first-bad-version/description/
var solution = function(isBadVersion) {

  return function(n) {
       let left = 1;
      let right = n;
      let ans = -1;

      while (left <= right) {
          let mid = left + Math.floor((right - left) / 2);

          if (isBadVersion(mid)) {
              ans = mid;
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }

      return ans;
  };

};