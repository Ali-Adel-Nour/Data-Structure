//90ms
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

//5ms
function producExceptSelf(nums){
const length = nums.length;
const result = Array(length).fill(1);

let left = 1;
for (let i = 0; i < length; i++) {
    result[i] = left;
    left *= nums[i];
}

let right = 1;
for (let i = length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
}

return result;
}