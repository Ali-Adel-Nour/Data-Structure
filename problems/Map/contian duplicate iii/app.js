//https://leetcode.com/problems/contains-duplicate-iii/
//Brute force
//time limit execeed
function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (j - i <= indexDiff && Math.abs(nums[i] - nums[j]) <= valueDiff) {
              return true;
          }
      }
  }
  return false;
}



//sliding window

function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) {
  const sortedWindow = [];

  for (let i = 0; i < nums.length; i++) {
      // Binary search to find the correct position to insert nums[i]
      let pos = binarySearch(sortedWindow, nums[i]);

      // Check if there's any number in the sortedWindow within the valueDiff
      if ((pos > 0 && Math.abs(nums[i] - sortedWindow[pos - 1]) <= valueDiff) ||
          (pos < sortedWindow.length && Math.abs(nums[i] - sortedWindow[pos]) <= valueDiff)) {
          return true;
      }

      // Insert the current number in the sortedWindow
      sortedWindow.splice(pos, 0, nums[i]);

      // Maintain the window size
      if (sortedWindow.length > indexDiff) {
          sortedWindow.splice(binarySearch(sortedWindow, nums[i - indexDiff]), 1);
      }
  }

  return false;
}

function binarySearch(arr, target) {
  let left = 0, right = arr.length;
  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) left = mid + 1;
      else right = mid;
  }
  return left;
}
