
//https://vjudge.net/contest/647652#problem/A

function equalizeArray(arr) {
  let n = arr.length;
  let Frequency = Array(101).fill(0);  // Initialize the frequency array for elements 1 to 100

  // Populate the frequency array
  for (let i = 0; i < n; i++) {
      Frequency[arr[i]]++;
  }

  let maxFreq = 0;
  let maxElement = 0;

  // Find the element with the maximum frequency
  for (let i = 1; i < 101; i++) {  // Start from 1 because 0 is unused
      if (Frequency[i] > maxFreq) {
          maxFreq = Frequency[i];
          maxElement = i;
      }
  }

  // Calculate the minimum deletions required
  let deletions = n - maxFreq;

  return deletions;
}

// Example usage
let arr = [3, 3, 2, 2, 1, 3];
let result = equalizeArray(arr);
console.log(result);
