function prefixSum(arr) {
  for(let i = 1; i < arr.length; i++) {
      arr[i] = arr[i] + arr[i - 1];
  }
  return arr;
}

// Example usage:
let arr = [1, 2, 3, 4];
let result = prefixSum(arr);
console.log(result);
