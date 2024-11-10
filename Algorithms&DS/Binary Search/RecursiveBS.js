function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  // Base case: If the left index exceeds the right, the target is not in the array
  if (left > right) {
      return -1;
  }

  // Calculate the middle index
  let mid = left + Math.floor((right - left) / 2);

  // If the middle element is the target, return its index
  if (arr[mid] === target) {
      return mid;
  }

  // If the target is greater than the middle element, search the right half
  if (arr[mid] < target) {
      return binarySearch(arr, target, mid + 1, right);
  }

  // If the target is less than the middle element, search the left half
  return binarySearch(arr, target, left, mid - 1);
}

// Example usage:
let arr = [1, 3, 5, 7, 9, 11];
let target = 7;
console.log(binarySearch(arr, target));  // Output: 3
