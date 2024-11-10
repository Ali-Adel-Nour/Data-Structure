function sortList(unsortedList) {
  const n = unsortedList.length;

  // Base case: A list of size 1 or 0 is already sorted
  if (n <= 1) return unsortedList;

  // Split the list into left and right halves
  const midpoint = Math.floor(n / 2);
  const leftList = sortList(unsortedList.slice(0, midpoint));
  const rightList = sortList(unsortedList.slice(midpoint));

  const res = [];
  let leftPtr = 0, rightPtr = 0;

  // Merge the sorted left and right lists with two pointers
  while (leftPtr < midpoint || rightPtr < n - midpoint) {
      if (leftPtr === midpoint) {  // If left list is empty, append element from right
          res.push(rightList[rightPtr]);
          rightPtr++;
      } else if (rightPtr === n - midpoint) {  // If right list is empty, append element from left
          res.push(leftList[leftPtr]);
          leftPtr++;
      } else if (leftList[leftPtr] <= rightList[rightPtr]) {  // Append smaller element from left
          res.push(leftList[leftPtr]);
          leftPtr++;
      } else {  // Append smaller element from right
          res.push(rightList[rightPtr]);
          rightPtr++;
      }
  }

  return res;
}