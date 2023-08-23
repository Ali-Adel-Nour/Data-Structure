class Node {
  constructor(column, value) {
      this.column = column;
      this.value = value;
      this.next = null;
  }
}
class SparseMatrix {
  constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.matrix = new Array(rows);

      for (let i = 0; i < rows; i++) {
          this.matrix[i] = null; // Initialize each row as an empty linked list
      }
  }

  addElement(row, col, value) {
      if (row >= this.rows || col >= this.cols) {
          throw new Error("Invalid row or column index");
      }

      const newNode = new Node(col, value);
      newNode.next = this.matrix[row];
      this.matrix[row] = newNode;
  }

  // Other methods to perform operations on the sparse matrix

  print() {
      for (let i = 0; i < this.rows; i++) {
          let current = this.matrix[i];
          for (let j = 0; j < this.cols; j++) {
              if (current && current.column === j) {
                  process.stdout.write(`${current.value} `);
                  current = current.next;
              } else {
                  process.stdout.write(`0 `);
              }
          }
          console.log(); // Move to the next row
      }
  }

  // Method to perform matrix-vector multiplication
  matrixVectorMultiply(vector) {
      if (vector.length !== this.cols) {
          throw new Error("Invalid vector length");
      }

      const result = new Array(this.rows).fill(0);

      for (let i = 0; i < this.rows; i++) {
          let current = this.matrix[i];
          while (current) {
              result[i] += current.value * vector[current.column];
              current = current.next;
          }
      }

      return result;
  }
}

// Example usage
const sparseMatrix = new SparseMatrix(3, 3);
sparseMatrix.addElement(0, 1, 2);
sparseMatrix.addElement(1, 0, 3);
sparseMatrix.addElement(2, 2, 4);

console.log("Sparse Matrix:");
sparseMatrix.print();

const vector = [1, 2, 3];
const result = sparseMatrix.matrixVectorMultiply(vector);
console.log("\nMatrix-Vector Multiplication Result:", result);
