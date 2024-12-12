function slidingWindowFixed(input, windowSize) {
  //ans = window = input[0..windowSize)
  for (const right = windowSize; right < input.length; ++right) {
      const left = right - windowSize;
      //remove input[left] from window
      //append input[right] to window
      ans = optimal(ans, window);
  }
  return ans
}



function closeDuplicates(nums, k) {
  let window = new Set();     //Cur window of size <= k
  let L = 0;

  for (let R = 0; R < nums.length; R++) {
      if (R - L + 1 > k) {
          window.delete(nums[L]);
          L++;
      }
      if (window.has(nums[R])) {
          return true;
      }
      window.add(nums[R]);
  }
  return false;
}