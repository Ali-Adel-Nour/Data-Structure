//https://leetcode.com/problems/find-closest-number-to-zero/description/

var findClosestNumber = function(nums) {
  let closest = nums[0];
  for (let i = 1; i < nums.length; i++) {

      if (Math.abs(nums[i]) < Math.abs(closest) ||
          (Math.abs(nums[i]) === Math.abs(closest) && nums[i] > closest)) {
          closest = nums[i];
      }
  }
  return closest;
};