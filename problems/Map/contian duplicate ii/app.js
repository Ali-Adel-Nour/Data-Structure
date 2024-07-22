// Map Time Complixty (O(n)) Space Complixty (O(n))

var containsNearbyDuplicate = function(nums, k) {
  const indexMap = {};

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] in indexMap) {
          if (i - indexMap[nums[i]] <= k) {
              return true;
          }
      }
      indexMap[nums[i]] = i;
  }

  return false;
};


// Set Time Complixty (O( log n)) Space Complixty (O(n))


const numsSet = new Set();

for (let i = 0; i < nums.length; i++) {
    if (numsSet.has(nums[i])) {
        return true;
    }

    numsSet.add(nums[i]);

    if (numsSet.size > k) {
        numsSet.delete(nums[i - k]);
    }
}

return false;



//Brute Force (O(n^2)) Space Complixty (O(1)) but time limit exceed

var containsNearbyDuplicate = function(nums, k) {

for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i != j) {
          let result = Math.abs(i - j);
          if (result <= k) {
              return true;
          }
      }
  }
}
return false;
};