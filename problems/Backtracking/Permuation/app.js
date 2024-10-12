function backtrack(res, nums, used, permutation) {
  if (permutation.length === nums.length) {
      res.push([...permutation]);  // Push a copy of the permutation array to results
      return;
  }

  for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;  // Skip already used elements

      // Make a choice
      used[i] = true;
      permutation.push(nums[i]);

      // Recurse
      backtrack(res, nums, used, permutation);

      // Undo the choice
      used[i] = false;
      permutation.pop();
  }
}

var permute = function(nums) {
  let res = [];
  let used = Array(nums.length).fill(false);
  let permutation = [];
  backtrack(res, nums, used, permutation);
  return res;  // Return the array of permutations
};