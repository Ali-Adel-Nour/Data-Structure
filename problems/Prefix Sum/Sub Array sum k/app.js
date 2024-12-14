var subarraySum = function(nums, k) {
  const prefixSums = new Map([[0, 1]]);
  let curSum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      curSum += nums[i];
      const complement = curSum - k;
      if (prefixSums.has(complement)) {
          count += prefixSums.get(complement);
      }
      prefixSums.set(curSum, (prefixSums.get(curSum) || 0) + 1);
  }
  return count;
};
