//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array
function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let first = -1, last = -1;


  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) {
          first = mid;
          right = mid - 1;
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  left = 0;
  right = nums.length - 1;


  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) {
          last = mid;
          left = mid + 1;
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return [first, last];
}

console.log( searchRange([5,7,7,8,8,10], 8));