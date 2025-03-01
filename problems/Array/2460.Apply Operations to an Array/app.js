var applyOperations = function(nums) {
  let slow = 0;

  // First pass: apply operations
  for(let i = 0; i < nums.length - 1; i++) {
      if(nums[i] == nums[i + 1]) {
          nums[i] = nums[i] * 2;
          nums[i + 1] = 0;
      }
  }

  // Second pass: move non-zero elements to front
  for(let fast = 0; fast < nums.length; fast++) {
      if(nums[fast] !== 0) {
          [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
          slow++;
      }
  }

  return nums;
};
