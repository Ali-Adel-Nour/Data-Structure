//Using Object
function calculateFrequency(arr) {
  const frequency = {};

  for (let element of arr) {
      // Increment the count for each element
      if (frequency[element] !== undefined) {
          frequency[element]++;
      } else {
          frequency[element] = 1;
      }
  }

  return frequency;
}


//using Map
function calculateFrequency(arr) {
  // Initialize a Map to store frequency counts
  const frequency = new Map();

  // Iterate over each element in the input array
  for (let element of arr) {
      // If the element is already in the Map, increment its count
      if (frequency.has(element)) {
          frequency.set(element, frequency.get(element) + 1);
      } else {
          // If the element is not in the Map, add it with a count of 1
          frequency.set(element, 1);
      }
  }

  return frequency;
}
