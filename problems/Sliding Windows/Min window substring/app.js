var minWindow = function(s, t) {
  const m = s.length;
  const checkCount = new Map();
  const windowCount = new Map();
  let satisfied = 0;
  let required = 0;

  // Populate checkCount for characters in t
  for (const c of t) {
      if (checkCount.has(c)) {
          checkCount.set(c, checkCount.get(c) + 1);
      } else {
          required++;
          checkCount.set(c, 1);
      }
  }

  let length = m + 1;
  let window = -1;
  let l = 0;

  for (let r = 0; r < m; ++r) {
      const char = s.charAt(r);
      if (checkCount.has(char)) {
          windowCount.set(char, windowCount.get(char) + 1 || 1);
          if (windowCount.get(char) === checkCount.get(char)) {
              satisfied++;
          }
      }

      while (satisfied === required) {
          if (
              r - l + 1 < length ||
              (r - l + 1 === length && s.substring(l, r + 1) < s.substring(window, window + length))
          ) {
              window = l;
              length = r - l + 1;
          }

          const left = s.charAt(l);
          if (checkCount.has(left)) {
              windowCount.set(left, windowCount.get(left) - 1);
              if (windowCount.get(left) < checkCount.get(left)) {
                  satisfied--;
              }
          }
          l++;
      }
  }

  return window >= 0 ? s.substring(window, window + length) : "";
};


//other solution
var minWindow = function(s, t) {
  if (s.length < t.length) {
      return "";
  }

  const charCount = new Map();
  for (const ch of t) {
      charCount.set(ch, (charCount.get(ch) || 0) + 1);
  }

  let targetCharsRemaining = t.length;
  let minWindow = [0, Number.POSITIVE_INFINITY];
  let startIndex = 0;

  for (let endIndex = 0; endIndex < s.length; endIndex++) {
      const ch = s[endIndex];
      if (charCount.has(ch) && charCount.get(ch) > 0) {
          targetCharsRemaining--;
      }
      charCount.set(ch, (charCount.get(ch) || 0) - 1);

      if (targetCharsRemaining === 0) {
          while (true) {
              const charAtStart = s[startIndex];
              if (charCount.has(charAtStart) && charCount.get(charAtStart) === 0) {
                  break;
              }
              charCount.set(charAtStart, (charCount.get(charAtStart) || 0) + 1);
              startIndex++;
          }

          if (endIndex - startIndex < minWindow[1] - minWindow[0]) {
              minWindow = [startIndex, endIndex];
          }

          charCount.set(s[startIndex], (charCount.get(s[startIndex]) || 0) + 1);
          targetCharsRemaining++;
          startIndex++;
      }
  }

  return minWindow[1] >= s.length ? "" : s.slice(minWindow[0], minWindow[1] + 1);
};