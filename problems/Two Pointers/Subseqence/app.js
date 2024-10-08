var isSubsequence = function(s, t) {
  let i = 0;
  let j = 0;

  //for optimization and edge case
  if (s.length > t.length) return false;

  while (j < t.length) {
      if (i < s.length && s[i] === t[j]) {
          i++;
      }
      j++;
  }

  return i === s.length;
};