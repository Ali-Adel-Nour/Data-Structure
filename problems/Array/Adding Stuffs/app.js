function addingAllTheWeirdStuff(array1, array2) {
  // 1. Calculate the sum of all odd numbers in array2
  let oddSum = 0;
  for (let j = 0; j < array2.length; j++) {
    if (array2[j] % 2 !== 0) {
      oddSum += array2[j];
    }
  }

  // 2. Calculate the sum of all even numbers in array2
  let evenSum = 0;
  for (let j = 0; j < array2.length; j++) {
    if (array2[j] % 2 === 0) {
      evenSum += array2[j];
    }
  }

  // 3. Check if any element in array2 > 20
  let hasBigNumber = array2.some(num => num > 20);

  // 4. Apply the rules to array1
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] < 10) {
      array1[i] += oddSum;
    } else {
      array1[i] += evenSum;
    }

    if (hasBigNumber) {
      array1[i] += 1;
    }
  }

  return array1;
}
