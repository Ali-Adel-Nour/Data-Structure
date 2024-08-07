
//https://leetcode.com/problems/group-anagrams/submissions/1348065737/

var groupAnagrams = function(strs) {
  const mp = new Map();
  const ans = [];

  for (const str of strs) {
      const sortedStr = str.split('').sort().join('');
      if (mp.has(sortedStr)) {
          ans[mp.get(sortedStr)].push(str);
      } else {
          mp.set(sortedStr, ans.length);
          ans.push([str]);
      }
  }

  return ans;
};
