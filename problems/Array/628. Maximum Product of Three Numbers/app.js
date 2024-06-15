//Sorting Time Complexity: O(n log n)

function maximumProduct(nums) {
  // Sort the array
  nums.sort((a, b) => a - b);
  const n = nums.length;

  // Calculate the product of the last three numbers
  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];

  // Calculate the product of the first two numbers and the last number
  const product2 = nums[0] * nums[1] * nums[n - 1];

  // Return the maximum of the two products
  return Math.max(product1, product2);
}




//Optimized Linear Solution Time Complexity: O(n)


function maximumProduct(nums) {
  let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
  let min1 = Infinity, min2 = Infinity;

  for (const num of nums) {
      if (num > max1) {
          max3 = max2;
          max2 = max1;
          max1 = num;
      } else if (num > max2) {
          max3 = max2;
          max2 = num;
      } else if (num > max3) {
          max3 = num;
      }

      if (num < min1) {
          min2 = min1;
          min1 = num;
      } else if (num < min2) {
          min2 = num;
      }
  }

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
}

// Example usage:
console.log(maximumProduct([1, 2, 3])); // Output: 6
console.log(maximumProduct([1, 2, 3, 4])); // Output: 24
console.log(maximumProduct([-1, -2, -3])); // Output: -6


