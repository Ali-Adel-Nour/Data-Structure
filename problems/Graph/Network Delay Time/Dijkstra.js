var networkDelayTime = function(times, n, k) {
  let adj = {};


  for (let i = 1; i <= n; i++) {
      adj[i] = [];
  }


  for (let time of times) {
      let [u, v, w] = time;
      adj[u].push([v, w]);
  }


  let minHeap = new MinPriorityQueue({ priority: (item) => item[0] });
  minHeap.enqueue([0, k]);  // [distance, node]

  let shortest = {};


  while (!minHeap.isEmpty()) {
      let [currentDistance, currentNode] = minHeap.dequeue().element;

      if (shortest.hasOwnProperty(currentNode)) {
          continue;
      }

      shortest[currentNode] = currentDistance;

      if (adj[currentNode]) {
          for (let [neighbor, weight] of adj[currentNode]) {
              if (!shortest.hasOwnProperty(neighbor)) {
                  minHeap.enqueue([currentDistance + weight, neighbor]);
              }
          }
      }
  }


  if (Object.keys(shortest).length !== n) {
      return -1;
  }


  return Math.max(...Object.values(shortest));
};
