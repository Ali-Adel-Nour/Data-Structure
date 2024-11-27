const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
const target = 123450;

function serialize(position) {
  let total = 0;
  for (const line of position) {
      for (const entry of line) {
          total *= 10;
          total += entry;
      }
  }
  return total;
}


function deserialize(state) {
  const result = [];
  result.push([]);
  result.push([]);
  for (let i = 1; i >= 0; i--) {
      for (let j = 2; j >= 0; j--) {
          const exponent = i * 3 + j;
          const digit = Math.floor(state / 10 ** exponent) % 10;
          result[1 - i].push(digit);
      }
  }
  return result;
}
var slidingPuzzle = function(board) {
    const initState = serialize(board);
  if (initState === target) return 0;
  const movesMap = new Map();
  const movesQueue = [];
  movesMap.set(initState, 0);
  movesQueue.push(initState);
  while (movesQueue.length > 0) {
      const topState = movesQueue.shift();
      let row = 0;
      let col = 0;
      const topPosition = deserialize(topState);
      for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 3; j++) {
              if (topPosition[i][j] === 0) {
                  row = i;
                  col = j;
              }
          }
      }
      for (const [deltaRow, deltaCol] of directions) {
          const newRow = row + deltaRow;
          const newCol = col + deltaCol;
          if (newRow >= 0 && newRow < 2 && newCol >= 0 && newCol < 3) {
              const newPosition = deserialize(topState);
              newPosition[row][col] = topPosition[newRow][newCol];
              newPosition[newRow][newCol] = topPosition[row][col];
              const newState = serialize(newPosition);
              if (!movesMap.has(newState)) {
                  movesMap.set(newState, movesMap.get(topState) + 1);
                  movesQueue.push(newState);
                  if (newState === target) {
                      return movesMap.get(newState);
                  }
              }
          }
      }
  }
  return -1;
};