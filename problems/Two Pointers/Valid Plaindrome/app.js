//https://leetcode.com/problems/valid-palindrome/?

//Using Regex
// const isPalindrome = s => {
//   s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
//   for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
//     if (s.charAt(i) !== s.charAt(j)) return false;
//   }
//   return true;
// }



//without regex
const isPalindrome = s => {
  let cleaned = '';

  // Build a string with only lowercase alphanumeric characters
  for (let c of s) {
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) {
      cleaned += c.toLowerCase();
    }
  }

  // Initialize two pointers
  let left = 0;
  let right = cleaned.length - 1;

  // Use two pointers to check for palindrome
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false; // Characters don't match, not a palindrome
    }
    left++;
    right--;
  }

  return true; // All characters matched, it's a palindrome
};
