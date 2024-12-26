
let { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function primMST(graph) {
    const visited = new Set();
    let totalWeight = 0;
    const edges = [];
    const minHeap = new MinPriorityQueue({ priority: (item) => item[2] }); // Use weight as priority

    // Start from first vertex
    const start = Array.from(graph.keys())[0];
    visited.add(start);

    // Add all edges from the starting vertex to the min-heap
    for (let [neighbor, weight] of graph.get(start)) {
        minHeap.enqueue([start, neighbor, weight]);
    }

    // Keep going until all vertices are visited
    while (visited.size < graph.size) {
        const minEdge = minHeap.dequeue();

        if (!minEdge) break; // No more edges to process

        const [from, to, weight] = minEdge.element;

        // Skip if the neighbor has already been visited
        if (visited.has(to)) continue;

        // Add the minimum edge to our result
        edges.push(minEdge.element);
        visited.add(to);
        totalWeight += weight;

        // Add all edges from the newly visited vertex to the min-heap
        for (let [neighbor, weight] of graph.get(to)) {
            if (!visited.has(neighbor)) {
                minHeap.enqueue([to, neighbor, weight]);
            }
        }
    }

    return { edges, totalWeight };
}



function primMST(graph) {
  const visited = new Set();
  let totalWeight = 0;
  const edges = [];

  // Start from first vertex
  const start = Array.from(graph.keys())[0];
  visited.add(start);

  // Keep going until all vertices are visited
  while (visited.size < graph.size) {
      let minWeight = Infinity;
      let minEdge = null;

      // Find minimum weight edge from visited to unvisited vertices
      for (let vertex of visited) {
          for (let [neighbor, weight] of graph.get(vertex)) {
              if (!visited.has(neighbor) && weight < minWeight) {
                  minWeight = weight;
                  minEdge = [vertex, neighbor, weight];
              }
          }
      }

      // Add the minimum edge to our result
      if (minEdge) {
          const [from, to, weight] = minEdge;
          edges.push(minEdge);
          visited.add(to);
          totalWeight += weight;
      }
  }

  return { edges, totalWeight };
}



//using Set
function primMST(graph) {
  const visited = new Set();
  let totalWeight = 0;
  const edges = [];

  // Start from first vertex
  const start = Array.from(graph.keys())[0];
  visited.add(start);

  // Keep going until all vertices are visited
  while (visited.size < graph.size) {
      let minWeight = Infinity;
      let minEdge = null;

      // Find minimum weight edge from visited to unvisited vertices
      for (let vertex of visited) {
          for (let [neighbor, weight] of graph.get(vertex)) {
              if (!visited.has(neighbor) && weight < minWeight) {
                  minWeight = weight;
                  minEdge = [vertex, neighbor, weight];
              }
          }
      }

      // Add the minimum edge to our result
      if (minEdge) {
          const [from, to, weight] = minEdge;
          edges.push(minEdge);
          visited.add(to);
          totalWeight += weight;
      }
  }

  return { edges, totalWeight };
}