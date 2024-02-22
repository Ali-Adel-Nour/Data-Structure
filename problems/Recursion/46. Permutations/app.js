var permute = function (nums) {
  const permutation = [];
  function helper(nums,i){
      if(i=== nums.length-1){
          permutation.push(nums.slice());
          return;
      }
      for(let j=i;j<nums.length;j++){
          //swap i,j
          [nums[i],nums[j]] = [nums[j],nums[i]];
          //recursive
          helper(nums,i+1);
          //swap i,j
          [nums[i],nums[j]] = [nums[j],nums[i]];
      }
  }
  helper(nums,0);
  return permutation;
};
