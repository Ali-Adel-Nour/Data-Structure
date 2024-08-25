function subarraySumLongest(nums, target) {
  let left = 0;
  let windowSum = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
      windowSum += nums[right];

      // If the window sum exceeds the target, shrink from the left
      while (windowSum > target && left <= right) {
          windowSum -= nums[left];
          left++;
      }

      // Update maxLength if the current window's sum is within the target
      if (windowSum <= target) {
          maxLength = Math.max(maxLength, right - left + 1);
      }
  }

  return maxLength;
}


// function subarraySumLongest(nums, target) {
//   var windowSum = 0, length = 0;
//   var left = 0;
//   for (var right = 0; right < nums.length; ++right) {
//       windowSum = windowSum + nums[right];
//       while (windowSum > target) {
//           windowSum = windowSum - nums[left];
//           ++left;
//       }
//       length = Math.max(length, right-left+1);
//   }
//   return length;
// }