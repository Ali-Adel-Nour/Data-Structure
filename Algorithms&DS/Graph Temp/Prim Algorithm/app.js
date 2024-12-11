
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