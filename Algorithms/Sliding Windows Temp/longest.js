function slidingWindowFlexibleLongest(input) {
 // initialize window, ans
  var left = 0;
  for (var right = 0; right < input.length; ++right) {
      //append input[right] to window
      while (invalid(window)) {     // update left until window is valid again
          ans = max(ans, window);
         // remove input[left] from window
          ++left;
      }
      ans = max(ans, window);       // window is guaranteed to be valid here
  }
  return ans;
}