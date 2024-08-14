//https://leetcode.com/problems/koko-eating-bananas/



function canFinishEating(piles, h, k) {
  let hoursUsed = 0;
  for (let p of piles) {
      hoursUsed += Math.ceil(p / k);
  }
  return hoursUsed <= h;
}
function minEatingSpeed(piles, h) {
  let left = 1;
  let right = 1000000000;
  let ans = -1;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (canFinishEating(piles, h, mid)) {
          ans = mid;
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  return ans;
}