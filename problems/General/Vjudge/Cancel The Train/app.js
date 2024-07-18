function minTrainCancellations(n, m) {
  const collisions = {};

  // Identify collisions
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === j) {
        if (!collisions[i]) collisions[i] = [];
        collisions[i].push([i, j]);
      }
    }
  }

  let cancellations = 0;
  const cancelledTrains = new Set();

  // Process collisions
  for (const time in collisions) {
    const points = collisions[time];

    for (const [b, l] of points) {
      if (!cancelledTrains.has(b) && !cancelledTrains.has(l)) {
        cancelledTrains.add(b);
        cancellations++;
        break;
      }
    }
  }

  return cancellations;
}

// Example usage
const n = 1; // Number of trains from the bottom end
const m = 2; // Number of trains from the left end
console.log(minTrainCancellations(n, m)); // Output: 3
