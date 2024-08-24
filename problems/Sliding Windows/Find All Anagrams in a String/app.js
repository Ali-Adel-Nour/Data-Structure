function findAllAnagrams(original, check) {
  const originalLen = original.length, checkLen = check.length;
  if (originalLen < checkLen) return [];

  const res = [];
  const checkCounter = Array(26).fill(0);
  const window = Array(26).fill(0);
  const a = 'a'.charCodeAt();   // ascii value of 'a'
  for (let i = 0; i < checkLen; i++) {
      checkCounter[check.charCodeAt(i) - a]++;
      window[original.charCodeAt(i) - a]++;
  }
  if (equals(window, checkCounter)) res.push(0);

  for (i = checkLen; i < originalLen; i++) {
      window[original.charCodeAt(i - checkLen) - a]--;
      window[original.charCodeAt(i) - a]++;
      if (equals(window, checkCounter)) res.push(i - checkLen + 1);
  }
  return res;
}

function equals(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i]);
}