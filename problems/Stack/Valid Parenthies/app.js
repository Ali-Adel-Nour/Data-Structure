var isValid = function(s) {
  const stack = [];
  const openingBrackets = "({[";
  const closingBrackets = ")}]";

  for (let char of s) {
      if (openingBrackets.includes(char)) {
          stack.push(char);
      } else if (closingBrackets.includes(char)) {
          if (stack.length === 0 || openingBrackets[closingBrackets.indexOf(char)] !== stack.pop()) {
              return false;
          }
      } else {
          // Invalid characters, return false immediately
          return false;
      }
  }

  // If the stack is empty, all opening brackets had matching closing brackets
  return stack.length === 0;
};