var reverseWords = function(s) {
  let sArr = s.split(" ");
  let temp = [];
  for(let i=0; i<sArr.length; i++){
      temp.push(sArr[i].split("").reverse().join(""));
  }return temp.join(" ");
};