function findBoundary(arr) {
  // WRITE YOUR BRILLIANT CODE HERE
  let left = 0;
  let right = 0

  while(left <= right){

  let mid = left + Math.floor((right - left) / 2);

         if (arr[mid] === true) return mid;
          if (arr[mid] < false) {
          // middle less than target, discard left half by making left search boundary `mid + 1`
          left = mid + 1;
      } else {
          // middle greater than target, discard right half by making right search boundary `mid - 1`
          right = mid - 1;
      }
  }
  // if we get here we didn't hit above return so we didn't find target
  return -1;
}

