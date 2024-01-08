//not right in all cases
/*
const rotateArray = (nums) => {
  let k = 5;
  let arr = [1, 2, 3, 4, 5];

  if (arr.length === 5 && 5 % k === 0) {
    return arr;
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[(i + k) % arr.length] = arr[i];
  }
  return result;
};

console.log(rotateArray());
*/

 /*
var reverse = function(nums, start,end) {

  while(start<end){
        [nums[start],nums[end]] = [nums[end],nums[start]];
        start++;
        end--;
    }
}

const rotate = function(nums,k){
    k = k%nums.length; //k=102 ,length =5, 2 rotations
    //nums.reverse();
    reverse(nums,0,nums.length-1);
    //start =0, end = k-1
    reverse(nums,0,k-1);
    //start = k, end = length-1
    reverse(nums,k, nums.length-1);
    return nums;
};
*/

//better solution

var rotate = function(nums, k) {
  k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts

  let reverse = function(i, j){
   while(i < j){
       let temp = nums[i]
       nums[i] = nums[j]
       nums[j] = temp
       i++
       j--
   }
  } // suppose  ----->--->
 reverse(0, nums.length-1); // reverse   <--<------
  reverse(0, k-1) // reverse first part ---><----
  reverse(k, nums.length-1)// reverse second part --->----->

};