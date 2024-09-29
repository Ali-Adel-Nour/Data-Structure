//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/


var lengthOfLongestSubstring = function(s){
  let longest = 0

  const counter = new Map();

  let l = 0

  for(let right = 0; right <s.length; right++){
    const cur = s[right];

    if (counter.has(cur)) {
      counter.set(cur, counter.get(cur) + 1);
    } else {
      counter.set(cur, 1);
    }
    while (counter.get(cur) > 1) {
      counter.set(s[l], counter.get(s[l]) - 1);
      l++;
  }
  longest = Math.max(longest, right - l + 1);
}
return longest;
};

