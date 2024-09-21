

const KEYBOARD = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function dfs(startIndex, path, res, digits) {
  if (startIndex === digits.length) {
      res.push(path.join(""));
      return;
  }
  const nextNumber = digits.charAt(path.length);
  for (const letter of KEYBOARD[nextNumber]) {
      path.push(letter);
      dfs(startIndex + 1, path, res, digits);
      path.pop();
  }
}

var letterCombinations = function(digits) {
  if (digits.length === 0 ) {
      return [];
  }

  const res = []
  dfs(0 ,[], res,digits)
  return res
};