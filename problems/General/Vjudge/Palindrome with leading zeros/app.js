//https://vjudge.net/contest/633136#problem/H

function isPalindrome(n) {
  let str = n.toString();
  let reversedStr = str.split('').reverse().join('');


  if (str === reversedStr) {
      return "Yes";
  }


  let zeros = "";
  for (let i = 0; i < str.length; i++) {
      zeros += "0";
      let newStr = zeros + str;
      let reversedNewStr = newStr.split('').reverse().join('');
      if (newStr === reversedNewStr) {
          return "Yes";
      }
  }


  return "No";
}