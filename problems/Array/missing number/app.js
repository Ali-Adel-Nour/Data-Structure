function missingNumber(nums) {
  let i = 0;
  while (i < nums.length) {
    const correctIdx = nums[i];
    if (nums[i] < nums.length && nums[i] !== nums[correctIdx]) {
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
    } else {
      i++;
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j) return j;
  }
  return nums.length;
}