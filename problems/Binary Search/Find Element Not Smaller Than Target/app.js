function firstNotSmaller(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let boundary_index = -1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] >= target) {
          boundary_index = mid;
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return boundary_index;
}

console.log( firstNotSmaller([1, 3, 3, 5, 8, 8, 10],2))