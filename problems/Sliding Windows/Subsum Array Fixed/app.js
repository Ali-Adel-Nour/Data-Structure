function subarraySumFixed(nums, k) {
  var windowSum = 0;
  for (var i = 0; i < k; ++i) {
    windowSum = windowSum + nums[i];
  }
  var largest = windowSum;
  for (var right = k; right < nums.length; ++right) {
      const left = right - k;
      windowSum = windowSum - nums[left];
      windowSum = windowSum + nums[right];
      largest = Math.max(largest, windowSum);
  }
  return largest;
}