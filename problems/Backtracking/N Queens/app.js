var solveNQueens = function(n) {
  const result = [];        // This will store all valid board configurations
const board = Array(n).fill().map(() => Array(n).fill('.'));  // Create an empty NxN board

function backtrack(row, cols, diagonals1, diagonals2) {
    // Base case: If we've placed queens in all rows, we've found a solution
    if (row === n) {
        const solution = board.map(row => row.join(''));  // Convert the board to a valid string representation
        result.push(solution);
        return;
    }

    // Try placing a queen in each column of the current row
    for (let col = 0; col < n; col++) {
        // Pruning: Check if placing a queen at (row, col) is valid
        if (cols.has(col) || diagonals1.has(row - col) || diagonals2.has(row + col)) {
            continue;  // Skip this position if it causes conflicts
        }

        // Place the queen
        board[row][col] = 'Q';

        // Update the state (mark the column and diagonals as "occupied")
        cols.add(col);
        diagonals1.add(row - col);  // Difference of row and col identifies a diagonal
        diagonals2.add(row + col);  // Sum of row and col identifies the other diagonal

        // Recur to place queens in the next row
        backtrack(row + 1, cols, diagonals1, diagonals2);

        // Backtrack: Remove the queen and revert the state
        board[row][col] = '.';
        cols.delete(col);
        diagonals1.delete(row - col);
        diagonals2.delete(row + col);
    }
}

// Initialize the sets for tracking columns and diagonals
backtrack(0, new Set(), new Set(), new Set());
return result;
};