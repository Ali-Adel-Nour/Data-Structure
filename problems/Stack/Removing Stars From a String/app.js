var removeStars = function(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
      if (s[i] === "*") {

          if (stack.length > 0) {
              stack.pop();
          }
      } else {
          stack.push(s[i]);
      }
  }


  return stack.join('');
};