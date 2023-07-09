function createDiagonalMatrix(n, value) {
  const matrix = [];

  for (let i = 0; i < n; i++) {
    const row = [];

    for (let j = 0; j < n; j++) {
      row.push(i === j ? value : 0);
    }

    matrix.push(row);
  }

  return matrix;
}

// Usage example
const diagonalMatrix = createDiagonalMatrix(4, 5);
console.log(diagonalMatrix);