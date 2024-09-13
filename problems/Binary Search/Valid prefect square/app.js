var isPerfectSquare = function(num) {
  let left = 1;
  let right = num;

  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);

      if (mid * mid === num) {
          return true;
      } else if (mid * mid > num) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  return false;
};