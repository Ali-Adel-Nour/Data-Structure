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



//Putting numer on right place to make it stable

function stableSelectionSort(a, n)
{
    // Iterate through array elements
    for (let i = 0; i < n - 1; i++)
    {

        // Loop invariant : Elements till
        // a[i - 1] are already sorted.

        // Find minimum element from
        // arr[i] to arr[n - 1].
        let min = i;
        for (let j = i + 1; j < n; j++)
            if (a[min] > a[j])
                min = j;

        // Move minimum element at current i.
        let key = a[min];
        while (min > i)
        {
            a[min] = a[min - 1];
            min--;
        }

        a[i] = key;
    }
}
