const removeDuplicates = s => {
  const stack = [];
  for (const char of s) {
    if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
};