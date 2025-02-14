var wordPattern = function(pattern, s) {
  const pMap = new Map()
  const sMap = new Map()
  const words = s.split(" ")

  if (pattern.length != words.length) return false

  for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i]
      const word = words[i]
      if (!pMap.has(char)) {
          pMap.set(char, word)
      } else if (pMap.get(char) !== word) return false
  }

  for (let i = 0; i < words.length; i++) {
      const char = pattern[i]
      const word = words[i]
      if (!sMap.has(word)) {
          sMap.set(word, char)
      } else if (sMap.get(word) !== char) return false
  }

  return true
};