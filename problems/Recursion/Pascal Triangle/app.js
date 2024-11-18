var getRow = function(rowIndex) {
  if (rowIndex === 0) {
      return [1];
  } else if (rowIndex === 1) {
      return [1, 1];
  } else {
      const prevRow = getRow(rowIndex - 1);
      const currentRow = [1];
      for (let i = 1; i < rowIndex; i++) {
          currentRow.push(prevRow[i - 1] + prevRow[i]);
      }
      currentRow.push(1);
      return currentRow;
  }
}


//Iterative

var getRow = function(rowIndex) {
  const row = [1]; // Start with the first element (always 1)

  for (let i = 1; i <= rowIndex; i++) {
      const newRow = [1]; // Each row starts with 1
      for (let j = 1; j < i; j++) {
          newRow.push(row[j - 1] + row[j]); // Sum of elements above
      }
      newRow.push(1); // Each row ends with 1
      row = newRow; // Update the row for the next iteration
  }

  return row;
};
