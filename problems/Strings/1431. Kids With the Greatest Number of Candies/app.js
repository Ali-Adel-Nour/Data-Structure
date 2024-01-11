var kidsWithCandies = function(candies, extraCandies) {
  let maxCandies = Math.max(...candies);
  let resultArray = [];

  for (let i = 0; i < candies.length; i++) {
      resultArray.push(candies[i] + extraCandies >= maxCandies);
  }

  return resultArray;
};