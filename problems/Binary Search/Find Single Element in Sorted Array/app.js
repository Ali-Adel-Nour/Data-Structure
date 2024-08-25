var singleNonDuplicate = function(nums) {
  function toTheLeft(idx) {
     if (idx === nums.length - 1) {
         return true;
     } else if (idx % 2 === 1) {
         // Check if the index is odd
         return nums[idx] !== nums[idx - 1];
     } else {
         // Else, we assume it is even
         return nums[idx] !== nums[idx + 1];
     }
 }

 let left = 0, right = nums.length - 1, ans = -1;

 while (left <= right) {
     let mid = Math.floor((left + right) / 2);
     if (toTheLeft(mid)) {
         ans = mid;
         right = mid - 1;
     } else {
         left = mid + 1;
     }
 }

 return nums[ans];
}
