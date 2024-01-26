var chunk = function(arr, size) {
  let array = [];
  for (let i = 0; i < arr.length; i += size) {
      array.push(arr.slice(i, i + size));
  }
  return array;
};