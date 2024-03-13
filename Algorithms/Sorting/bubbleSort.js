function sortList(unsortedList){
  const n = unsortedList.length;

  for (var i = 0; i < n-1; i++){
    // Track whether a swap occurred in this pass
    let swapped = false;
    for (var j = 0; j < n-1-i; j++) {

        // Swap if the element found is greater than the next element
        if (unsortedList[j] > unsortedList[j + 1]) {
            const temp = unsortedList[j];
            unsortedList[j] = unsortedList[j + 1];
            unsortedList[j + 1] = temp;
            swapped = true;
        }
    }

    // If no two elements were swapped, the list is sorted
    if (!swapped) return unsortedList;
}
return unsortedList;
  }
console.log(sortList([5,8,7,20,11,51,100]))