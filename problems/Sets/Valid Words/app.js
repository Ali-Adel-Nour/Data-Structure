var isValid = function(word) {

  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const consonants = new Set(['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']);
  const numbers = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);

  if (word.length < 3) return false;

  let hasVowel = false;
  let hasConsonant = false;
  let hasNumber = false;

  for (let char of word) {
      if (vowels.has(char)) {
          hasVowel = true;
      } else if (consonants.has(char)) {
          hasConsonant = true;
      } else if (numbers.has(char)) {
          hasNumber = true;
      } else {
          return false;
      }
  }


  return hasVowel && hasConsonant && (hasNumber || word.match(/[a-zA-Z]/g).length >=3);
};