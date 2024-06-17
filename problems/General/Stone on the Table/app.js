// Function to calculate the minimum number of stones to remove
function minStonesToRemove(n, s) {
  let removeCount = 0;

  // Iterate through the string and count the number of stones to remove
  for (let i = 1; i < n; i++) {
      if (s[i] === s[i - 1]) {
          // If current stone is the same as the previous one, increment removeCount
          removeCount++;
      }
  }

  return removeCount;
}


