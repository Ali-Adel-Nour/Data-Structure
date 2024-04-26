var findInMountainArray = function(target, mountainArr) {
  let left = 0;
  let right = mountainArr.length() - 1;

  // Find the peak of the mountain array
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
          left = mid + 1;
      } else {
          right = mid;
      }
  }

  let peak = left;

  // Search in the ascending part
  left = 0;
  right = peak;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let midVal = mountainArr.get(mid);
      if (midVal === target) {
          return mid;
      } else if (midVal < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  // Search in the descending part
  left = peak;
  right = mountainArr.length() - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let midVal = mountainArr.get(mid);
      if (midVal === target) {
          return mid;
      } else if (midVal > target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return -1;
};