//But the problem this Algorithem is  running in 5000 ms so the this not efficient in big data set
const hasDuplicate = nums => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) {
      return true; // Duplicate found
    } else {
      arr.push(nums[i]); // Add element to the hash set
    }
  }
  return false; // No duplicates found
};



//Optemzing it to 79 ms


var containsDuplicate = function(nums) {
  const numSet = new Set();
for (const num of nums) {
  if (numSet.has(num)) {
    return true; // Duplicate found
  } else {
    numSet.add(num); // Add element to the set
  }
}
return false;
};