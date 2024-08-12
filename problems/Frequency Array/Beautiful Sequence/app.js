function isBeautifulSequence(arr) {
  const frequency = Array(100001).fill(0);

  for (let i = 0; i < arr.length; i++) {
      frequency[arr[i]]++;
      // If any element appears more than once, the sequence is not beautiful
      if (frequency[arr[i]] > 1) {
          return "ne krasivo";
      }
  }

  return "prekrasnyy";
}



//using Set

function isBeautifulSequence(arr) {
  let elements = new Set();  // Set to track unique elements

  for (let i = 0; i < arr.length; i++) {
      // If the element is already in the set, the sequence is not beautiful
      if (elements.has(arr[i])) {
          return "ne krasivo";
      }
      elements.add(arr[i]);
  }

  return "prekrasnyy";
}