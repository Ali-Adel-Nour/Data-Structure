var prefixCount = function(words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {

      if (words[i].startsWith(pref)) {
          count++;
      }
  }
  return count;
};
