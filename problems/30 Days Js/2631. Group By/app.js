/*
Array.prototype.groupBy = function(fn){
  const res = {}

  for(const obj of this){
    const key = fn(obj)
    res[key] = res[key] || [];
    res[key].push(obj)
  }
  return res


}
*/

Array.prototype.groupBy = function(fn) {
  // Reduce the array into a single object
  return this.reduce((grouped, item) => {
    // Apply the provided callback function to get the key
    const key = fn(item);

    // If the key doesn't exist in the grouped object, create a new array for it
    if (!grouped[key]) {
      grouped[key] = [];
    }

    // Push the current item to the array associated with the key
    grouped[key].push(item);

    // Return the updated grouped object for the next iteration
    return grouped;
  }, {});
};