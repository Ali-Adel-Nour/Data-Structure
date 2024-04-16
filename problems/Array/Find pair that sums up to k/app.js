

//Brute Force O(n 2)
function pair(arr,k){
  let sum = []

  for(let i = 0; i < arr.length; i++){


    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === k){
        sum.push([arr[i], arr[j]]);
      }
    }
  }

return sum;

}


//Two Pointers O(n log n)
function pair(arr, k) {
  arr.sort((a,b) => a-b);
  let sum = [];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currentSum = arr[left] + arr[right];

    if (currentSum === k) {
      sum.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (currentSum < k) {
      left++;
    } else {
      right--;
    }
  }

  return sum;
}



//Using Set O(n)
function pair(arr, k) {

  let seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    let target = k - arr[i];
    if (seen.has(target)) {
      return true;
    }
    seen.add(arr[i]);
  }

  return false;

}

console.log(pair([1, 2, 3, 4, 5], 7)); // Output: [[2, 5], [3, 4]])