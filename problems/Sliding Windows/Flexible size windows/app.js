function subarraySumShortest(nums, target) {

  let windowSum = 0;
  let length = nums.length;
  let left = 0 ;

  for (let right = 0 ; right < nums.length ; right++) {

    windowSum += nums[right];
    while(windowSum >= target) {
      length = Math.min(length, right - left + 1);
      windowSum -= nums[left];
      left++;
  }
}
return length;
}