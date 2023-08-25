function producExceptSelf(nums){
  const result = []
  const prefix = 1
  const postfix = 1



  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
}
for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    result[i] *= postfix;
}

return result;
}