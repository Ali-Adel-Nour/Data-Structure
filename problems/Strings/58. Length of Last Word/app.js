

var lengthOfLastWord = function(s) {
  let removedSpaces = s.trim(); // Remove leading and trailing spaces
  let words = removedSpaces.split(' '); // Split the string by spaces to get all words
  let lastWord = words[words.length - 1]; // Get the last word
  return lastWord.length;
};