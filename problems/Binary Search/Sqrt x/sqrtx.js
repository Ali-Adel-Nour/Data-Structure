var mySqrt = function(x) {
  let left = 0;
  let right = x;

  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      let midSquared = mid * mid;

      if (midSquared === x) {
          return mid;
      } else if (midSquared < x) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  // If exact square root not found, return the floor of the square root
  return right;
};