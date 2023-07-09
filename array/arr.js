/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const key = 9;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === key) {
        console.log(`Key ${key} found at index ${i}`);
        break;
    }
}

*/

//optimze the performance of linear search
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const key = 9;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === key) {
        if (i > 0) {
            // Transpose the element with the previous element
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
        }
        // Move the element to the front/head of the array
        if (i > 0) {
            let temp = arr[i];
            arr.splice(i, 1);
            arr.unshift(temp);
        }
        console.log(`Key ${key} found at index ${i}`);
        break;
    }
}

console.log(`Length of arr is ${arr.length}`);