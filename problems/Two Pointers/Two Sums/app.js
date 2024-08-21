//https://leetcode.com/problems/two-sum/

var twoSum = function(array, targetValue) {
  let l = 0;
 let r = arr.length - 1;
 while (l < r) {
     const two_sum = arr[l] + arr[r];
     if (two_sum === target) {
         return [l, r];
     }
     if (two_sum < target) {
         l++;
     } else {
         r--;
     }
 }
}