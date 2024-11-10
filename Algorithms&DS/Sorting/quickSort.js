function sortListInterval(unsortedList, start, end) {
  // If segment is 1 or 0, it's sorted
  if (end - start <= 1) return;

  // Using last element as the pivot
  const pivot = unsortedList[end - 1];
  let startPtr = start, endPtr = end - 1;

  // Partitioning process
  while (startPtr < endPtr) {
      // Find the next element from the left that is larger than the pivot
      while (unsortedList[startPtr] < pivot && startPtr < endPtr) {
          startPtr++;
      }

      // Find the next element from the right that is smaller than or equal to the pivot
      while (unsortedList[endPtr] >= pivot && startPtr < endPtr) {
          endPtr--;
      }

      // Swap if pointers haven't met
      if (startPtr != endPtr) {
          const temp = unsortedList[startPtr];
          unsortedList[startPtr] = unsortedList[endPtr];
          unsortedList[endPtr] = temp;
      }
  }

  // Place pivot in its final position
  const temp = unsortedList[startPtr];
  unsortedList[startPtr] = unsortedList[end - 1];
  unsortedList[end - 1] = temp;

  // Sort left and right of the pivot
  sortListInterval(unsortedList, start, startPtr);
  sortListInterval(unsortedList, startPtr + 1, end);
}

function sortList(unsortedList) {
  sortListInterval(unsortedList, 0, unsortedList.length);
  return unsortedList;
}