function strassenMatrixMultiplication(A, B) {
  const n = A.length;

  // Base case: If the matrix is 1x1, return the product of the two elements
  if (n === 1) {
      return [[A[0][0] * B[0][0]]];
  }

  // Split matrices into quadrants
  const mid = Math.floor(n / 2);
  const { A11, A12, A21, A22 } = splitMatrix(A, mid);
  const { B11, B12, B21, B22 } = splitMatrix(B, mid);

  // Compute the 7 products (P1 to P7)
  const P1 = strassenMatrixMultiplication(addMatrices(A11, A22), addMatrices(B11, B22));
  const P2 = strassenMatrixMultiplication(addMatrices(A21, A22), B11);
  const P3 = strassenMatrixMultiplication(A11, subtractMatrices(B12, B22));
  const P4 = strassenMatrixMultiplication(A22, subtractMatrices(B21, B11));
  const P5 = strassenMatrixMultiplication(addMatrices(A11, A12), B22);
  const P6 = strassenMatrixMultiplication(subtractMatrices(A21, A11), addMatrices(B11, B12));
  const P7 = strassenMatrixMultiplication(subtractMatrices(A12, A22), addMatrices(B21, B22));

  // Compute the resulting quadrants of matrix C
  const C11 = addMatrices(subtractMatrices(addMatrices(P1, P4), P5), P7);
  const C12 = addMatrices(P3, P5);
  const C21 = addMatrices(P2, P4);
  const C22 = addMatrices(subtractMatrices(addMatrices(P1, P3), P2), P6);

  // Combine the quadrants into a single matrix
  return combineMatrix(C11, C12, C21, C22);
}

function splitMatrix(matrix, mid) {
  const A11 = [], A12 = [], A21 = [], A22 = [];
  for (let i = 0; i < mid; i++) {
      A11.push(matrix[i].slice(0, mid));
      A12.push(matrix[i].slice(mid));
      A21.push(matrix[mid + i].slice(0, mid));
      A22.push(matrix[mid + i].slice(mid));
  }
  return { A11, A12, A21, A22 };
}

function addMatrices(A, B) {
  const n = A.length;
  const C = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          C[i][j] = A[i][j] + B[i][j];
      }
  }
  return C;
}

function subtractMatrices(A, B) {
  const n = A.length;
  const C = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          C[i][j] = A[i][j] - B[i][j];
      }
  }
  return C;
}

function combineMatrix(C11, C12, C21, C22) {
  const n = C11.length * 2;
  const C = Array.from({ length: n }, () => Array(n).fill(0));
  const mid = n / 2;
  for (let i = 0; i < mid; i++) {
      for (let j = 0; j < mid; j++) {
          C[i][j] = C11[i][j];
          C[i][j + mid] = C12[i][j];
          C[i + mid][j] = C21[i][j];
          C[i + mid][j + mid] = C22[i][j];
      }
  }
  return C;
}

function padMatrix(matrix) {
  const n = matrix.length;
  const nextPowerOfTwo = 2 ** Math.ceil(Math.log2(n));
  const padded = Array.from({ length: nextPowerOfTwo }, () => Array(nextPowerOfTwo).fill(0));
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          padded[i][j] = matrix[i][j];
      }
  }
  return padded;
}

// Example usage
let A = [
  [1, 2],
  [3, 4]
];
let B = [
  [5, 6],
  [7, 8]
];

// Pad matrices to the next power of two
A = padMatrix(A);
B = padMatrix(B);

const result = strassenMatrixMultiplication(A, B);
console.log(result);
