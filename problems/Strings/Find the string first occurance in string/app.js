//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/submissions/1446029067/?envType=study-plan-v2&envId=top-interview-150


var strStr = function(haystack, needle) {

  return haystack.indexOf(needle);


};


//Two pinters
var strStr = function(haystack, needle) {
  if(needle === "" || needle === haystack) return 0;

  let left = 0;
  let right = needle.length;

  while(left < haystack.length){
      let strToBeSearched = haystack.slice(left,right);
      if(strToBeSearched === needle){
          return left;
      } else {
          left++;
          right++;
      }
  }
  return -1;
}