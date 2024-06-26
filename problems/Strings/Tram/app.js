//https://vjudge.net/contest/636002#problem/J
function tramCapacity(n, stops) {
  let maxCapacity = 0;
  let currentPassengers = 0;

  for (let i = 0; i < n; i++) {
      const [a, b] = stops[i];
      currentPassengers -= a; // Passengers exit
      currentPassengers += b; // Passengers enter
      if (currentPassengers > maxCapacity) {
          maxCapacity = currentPassengers;
      }
  }

  return maxCapacity;
}

// Example usage:
console.log(tramCapacity(4, [[0, 3], [2, 5], [4, 2], [4, 0]])); // Output: 6
console.log(tramCapacity(2, [[0, 2], [2, 0]])); // Output: 2
