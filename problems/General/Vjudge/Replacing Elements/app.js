//https://vjudge.net/contest/633136#problem/I
function canTransformToThreshold(n, d, arr) {
  // Check if all elements are already <= d
  if (Math.max(...arr) <= d) {
    return "YES";
  }

  // Find the two smallest elements in the array
  arr.sort((a, b) => a - b);
  let smallest = arr[0];
  let secondSmallest = arr[1];

  // Check if their sum is <= d
  if (smallest + secondSmallest <= d) {
    return "YES";
  } else {
    return "NO";
  }
}
console.log(canTransformToThreshold(5, 3, [1, 2, 3, 4, 5])); // YES