

var sumOddLengthSubarrays = function(arr) {
  // Step 1: Create the prefix sum map
  const prefixSums = new Map([[0, 0]]);  // Map to store prefix sums
  let curSum = 0;

  // Step 2: Calculate prefix sums
  for (let i = 0; i < arr.length; i++) {
      curSum += arr[i];
      prefixSums.set(i + 1, curSum);  // Store the sum up to index i
  }

  // Step 3: Find all odd-length subarrays and calculate their sum
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
      // For each start index i, find subarrays of odd lengths
      for (let j = i; j < arr.length; j++) {
          let subarrayLength = j - i + 1;
          if (subarrayLength % 2 === 1) {  // Check if length is odd
              totalSum += prefixSums.get(j + 1) - prefixSums.get(i);
          }
      }
  }

  return totalSum;
};
