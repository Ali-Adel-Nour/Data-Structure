function sortList(unsortedList) {
  const n = unsortedList.length;
  for (var i = 0; i < n; i++) {
      // Assume the current position as minimum
      let minIndex = i;

      // Find the minimum element's index from the rest of the list
      for (var j = i; j < n; j++) {
          if (unsortedList[j] < unsortedList[minIndex]) {
              minIndex = j;
          }
      }

      // Swap the minimum element with the first element
      [unsortedList[i], unsortedList[minIndex]] = [unsortedList[minIndex], unsortedList[i]];
  }
  return unsortedList;
}