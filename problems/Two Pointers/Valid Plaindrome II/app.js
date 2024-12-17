var validPalindrome = function(s) {
  let low = 0, high = s.length-1;
  while (low < high) {
      if (s[low] !== s[high]) {
          return isPalindrome(s, low+1, high) || isPalindrome(s, low, high-1);
      }
      low++, high--;
  }
  return true;

};

function isPalindrome(str, low, high) {
  while (low < high) {
      if (str[low] !== str[high]) return false;
      low++, high--;
  }
  return true;
}