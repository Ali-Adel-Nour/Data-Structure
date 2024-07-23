var intersection = function(nums) {
  if (nums.length === 0) return [];


  let commonElements = new Set(nums[0]);


  for (let i = 1; i < nums.length; i++) {

      let currentSet = new Set(nums[i]);


      commonElements = new Set([...commonElements].filter(x => currentSet.has(x)));
  }


  return Array.from(commonElements).sort((a, b) => a - b);
};