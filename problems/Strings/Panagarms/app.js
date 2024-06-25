function panagarm(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Create a set to store unique alphabetic characters
  const uniqueChars = new Set();

  // Iterate through each character in the string
  for (let char of str) {
    // Check if the character is a letter
    if (char >= 'a' && char <= 'z') {
      uniqueChars.add(char);
    }
  }
  const isPangram = uniqueChars.size === 26 ? 'YES' : 'NO';


  return isPangram

}
console.log(panagarm("toosmallword"));