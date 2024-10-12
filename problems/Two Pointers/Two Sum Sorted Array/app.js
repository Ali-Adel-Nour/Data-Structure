//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150


var twoSum = function(numbers, target) {

  let l = 0;
     let r = numbers.length - 1;
     while (l < r) {
         const two_sum = numbers[l] + numbers[r];
         if (two_sum === target) {
             return [l+1, r+1];
         }
         if (two_sum < target) {
             l++;
         } else {
             r--;
         }
     }


 };