

//using stack  Time: O(n)  Space: O(n)


var balancedStringSplit = function(s) {
  let stack = [];
 let count = 0;

 for (let char of s) {
     // If stack is empty, push the character
     if (stack.length === 0) {
         stack.push(char);
         continue;
     }

     // If the top character of the stack is different from the current character, pop the stack
     if (stack[stack.length - 1] !== char) {
         stack.pop();
     } else {
         // Otherwise, push the current character
         stack.push(char);
     }

     // If the stack becomes empty, we have found a balanced substring
     if (stack.length === 0) {
         count++;
     }
 }

 return count;
}



// var balancedStringSplit = function(s) {

//   let matches = 0;
// let balance = 0;

// for (let i = 0; i < s.length; i++) {

//   if (s[i] === "R") {
//     balance -= 1;
//   } else if (s[i] === "L") {
//     balance += 1;
//   }

//   if (balance === 0) {
//     matches += 1;
//   }
// }

// return matches;
// };