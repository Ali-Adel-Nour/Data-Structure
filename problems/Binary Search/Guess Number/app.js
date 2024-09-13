var guessNumber = function(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
      let pick = left + Math.floor((right - left) / 2)

      let result = guess(pick);
      if (result === 0) {
          return pick;
      } else if (result === -1) {
          right = pick - 1;
      } else {
          left = pick + 1;
      }
  }
};