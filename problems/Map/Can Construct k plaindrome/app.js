function canConstruct(s, k) {
  if (s.length < k) {
      return false;
  }

  const count = new Map();
  for (const char of s) {
      count.set(char, (count.get(char) || 0) + 1);
  }

  let odd = 0;
  for (const cnt of count.values()) {
      odd += cnt % 2;
  }

  return odd <= k;
}