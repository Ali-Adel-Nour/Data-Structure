var maxSubArray = function(nums) {
  let maxNum = nums[0]

  for(let i = 1 ; i<nums.length;i++){
      nums[i] = Math.max(nums[i],nums[i] + nums[i-1])
       maxNum = Math.max(maxNum,nums[i])
  }
  return maxNum
};