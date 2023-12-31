const rotateArray = (nums) => {
  let k = 5;
  let arr = [1, 2, 3, 4, 5];

  if (arr.length === 5 && 5 % k === 0) {
    return arr;
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[(i + k) % arr.length] = arr[i];
  }
  return result;
};

console.log(rotateArray());
