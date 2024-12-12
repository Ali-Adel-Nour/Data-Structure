const maxSubarraySumCircular = function (nums) {
  let max = -Infinity;
  let currentMax = 0;
  let min = Infinity;
  let currentMin = 0;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
      currentMax = Math.max(currentMax + nums[i], nums[i]);
      max = Math.max(max, currentMax);
      currentMin = Math.min(currentMin + nums[i], nums[i]);
      min = Math.min(min, currentMin);
      total += nums[i];
  }

  return max > 0 ? Math.max(max, total - min) : max;
};