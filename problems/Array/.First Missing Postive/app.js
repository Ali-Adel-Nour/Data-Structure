function firstMissingPositive(nums) {
  const n = nums.length;


  for (let i = 0; i < n; i++) {

    while (
      nums[i] > 0 &&              // Only process positive numbers
      nums[i] <= n &&             // Number must be <= n (since answer is <= n+1)
      nums[i] !== nums[nums[i] - 1] // Avoid infinite loops (duplicates)
    ) {

      const correctIdx = nums[i] - 1;
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
    }
  }


  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }


  return n + 1;
}