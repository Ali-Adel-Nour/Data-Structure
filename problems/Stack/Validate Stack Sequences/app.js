var validateStackSequences = function(pushed, popped) {
  let stack = [];
  let i = 0;
  for (let num of pushed) {
      stack.push(num);
      while (i < popped.length && stack.length > 0 && popped[i] === stack[stack.length - 1]) {
          stack.pop();
          i++;
      }
  }
  return stack.length === 0;
};