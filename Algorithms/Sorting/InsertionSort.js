function sortList(unsortedList) {
  for (let i = 1; i < unsortedList.length; i++) {
    let current = i;
    while (current > 0 && unsortedList[current] < unsortedList[current - 1]) {
      const temp = unsortedList[current];
      // swaps current smaller element with the element before it
      unsortedList[current] = unsortedList[current - 1];
      unsortedList[current - 1] = temp;
      current--;
    }
  }
  return unsortedList;
}

console.log(sortList([10, 1, 20]));
