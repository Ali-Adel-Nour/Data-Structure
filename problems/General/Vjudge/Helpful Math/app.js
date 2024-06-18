// Url: https://vjudge.net/contest/445949#problem/B
let s = "3+2+1";


let sortedSum = s.split('+')
                 .map(Number)
                 .sort((a, b) => a - b)
                 .join('+');


console.log(sortedSum);




// // Input string
// let s = "3+2+1";

// // Step 1: Split the string into an array of number strings
// let numberStrings = s.split('+');

// // Step 2: Convert the strings to numbers
// let numbers = numberStrings.map(str => parseInt(str));

// // Step 3: Sort the array of numbers in ascending order
// numbers.sort((a, b) => a - b);

// // Step 4: Convert the sorted numbers back to strings
// let sortedNumberStrings = numbers.map(num => num.toString());

// // Step 5: Join the strings with '+'
// let sortedSum = sortedNumberStrings.join('+');

// // Output the result
// console.log(sortedSum);  // Output should be the correct sorted string

// // Test cases
// let testCases = ["3+2+1", "1+1+3+1+3", "2", "1+3+2+1", "3+3+3+2+2+1+1+1"];

// testCases.forEach(testCase => {
//   let numberStrings = testCase.split('+');
//   let numbers = numberStrings.map(str => parseInt(str));
//   numbers.sort((a, b) => a - b);
//   let sortedNumberStrings = numbers.map(num => num.toString());
//   let sortedSum = sortedNumberStrings.join('+');
//   console.log(`Input: ${testCase} | Sorted: ${sortedSum}`);
// });
