function removeDuplicates(arr) {
  // WRITE YOUR BRILLIANT CODE HERE
  let l = 0;

  for (let r = 1; r < arr.length; r++) {
      if (arr[r] !== arr[l]) {
          l++;
          arr[l] = arr[r];
      }
  }

  // The new length is l + 1
  return l + 1;

}