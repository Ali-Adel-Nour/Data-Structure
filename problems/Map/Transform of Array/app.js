//https://leetcode.com/problems/rank-transform-of-an-array/

//Using Set

var arrayRankTransform = function(arr) {
  const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);


 const rankMap = {};
 uniqueSorted.forEach((value, index) => {
     rankMap[value] = index + 1;
 });


 return arr.map(value => rankMap[value]);
};