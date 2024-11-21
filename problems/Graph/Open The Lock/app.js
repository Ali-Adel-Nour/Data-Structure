function openLock(deadends, target) {
  const deadSet = new Set(deadends);
  if (deadSet.has("0000")) return -1;

  const queue = ["0000"];
  const visited = new Set(["0000"]);
  let turns = 0;

  while (queue.length > 0) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
          const node = queue.shift();
          if (node === target) return turns;

          for (const neighbor of get_neighbors(node)) {
              if (!visited.has(neighbor) && !deadSet.has(neighbor)) {
                  queue.push(neighbor);
                  visited.add(neighbor);
              }
          }
      }
      turns++;
  }
  return -1;
}

function get_neighbors(coord) {
  const res = [];
  for (let i = 0; i < 4; i++) {
      const digit = parseInt(coord[i]);
      for (let j = -1; j <= 1; j += 2) {
          const newDigit = (digit + j + 10) % 10;
          const newCoord = coord.slice(0, i) + newDigit + coord.slice(i + 1);
          res.push(newCoord);
      }
  }
  return res;
}