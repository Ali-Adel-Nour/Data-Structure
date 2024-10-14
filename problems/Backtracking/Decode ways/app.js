var numDecodings = function(s) {

  const memo = {};

  function backtracking(remaining) {

      if (remaining === "") {
          return 1;
      }


      if (remaining in memo) {
          return memo[remaining];
      }

      let count = 0;


      const firstDigit = parseInt(remaining[0]);
      if (firstDigit >= 1 && firstDigit <= 9) {
          count += backtracking(remaining.slice(1));
      }


      if (remaining.length >= 2) {
          const firstTwoDigits = parseInt(remaining.slice(0, 2));
          if (firstTwoDigits >= 10 && firstTwoDigits <= 26) {
              count += backtracking(remaining.slice(2));
          }
      }


      memo[remaining] = count;
      return count;
  }

  return backtracking(s);
};