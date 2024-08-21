//https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
  let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] != 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
        }
    }
};