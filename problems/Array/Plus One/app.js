//https://leetcode.com/problems/plus-one
var plusOne = function(digits) {

  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {

          digits[i]++;
          return digits;
      }

      digits[i] = 0;
  }

  digits.unshift(1);

  //or using
//     let res = new Array(digits.length+1)
//     let j = 0
//     for(let i=0; i<res.length; i++){
//     if(i==0){
//     res[i] = 1
//    }else{
//    res[i] = digits[j]
//    }
// }
// return res
  return digits;
};
