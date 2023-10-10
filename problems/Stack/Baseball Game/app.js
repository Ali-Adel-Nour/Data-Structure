var calPoints = function(operations) {
  let newArr = []
   for (let i = 0; i < operations.length; i++) {
       if (operations[i] != 'C' && operations[i] != 'D' && operations[i] != '+') {
           let value = parseInt(operations[i])
           newArr.push(value)
       }
       if (operations[i] == "C") {
           newArr.pop()
       } else if (operations[i] === "D") {
           let value = newArr[newArr.length - 1] * 2
           newArr.push(value)
       } else if (operations[i] === "+") {
           let newValue = newArr[newArr.length - 1] + newArr[newArr.length - 2]
           newArr.push(newValue)
       }
   }
   let total = newArr.reduce((acc, curr) => {
       return acc += curr
   }, 0)
   return total
};

//Rafactoring it
var calPoints = function(operations) {
  let scores = [];
  for (const op of operations) {
      if (op === 'C') {
          scores.pop();
      } else if (op === 'D') {
          scores.push(scores[scores.length - 1] * 2);
      } else if (op === '+') {
          scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
      } else {
          scores.push(parseInt(op));
      }
  }
  return scores.reduce((total, score) => total + score, 0);
};
