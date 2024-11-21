var longestPalindrome = function(s) {
  let charFrequency = {};
  let length = 0;

  // Count the frequency of each character
  for (let char of s) {
      charFrequency[char] = (charFrequency[char] || 0) + 1;

      // If the count is even, we can use both occurrences in the palindrome
      if (charFrequency[char] % 2 === 0) {
          length += 2; // Add 2 to the length for each even count
      }
  }

  // If there's any character with an odd frequency, we can add one more in the middle
  return length < s.length ? length + 1 : length;
};

// Example usage:
console.log(longestPalindrome("abccccdd")); // Output: 7