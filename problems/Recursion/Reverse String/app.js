var reverseString = function(arr, start = 0, end = arr.length - 1) {
  if (arr === null || !Array.isArray(arr)) {
      return "Input is not a valid array.";
  }

  if (start < end) {
      // Swap elements at the start and end indices
      [arr[start], arr[end]] = [arr[end], arr[start]];

      // Recursively reverse the rest of the array
      reverseString(arr, start + 1, end - 1);
  }

  return arr;
};