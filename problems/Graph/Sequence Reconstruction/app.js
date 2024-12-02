function sequenceReconstruction(original, seqs) {
  function countParents(graph) {
      const indegree = new Map();
      for (const node of graph.keys()) {
          indegree.set(node, 0);
      }
      for (const node of graph.keys()) {
          for (const neighbor of graph.get(node)) {
              indegree.set(neighbor, indegree.get(neighbor) + 1);
          }
      }
      return indegree;
  }

  function equals(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
function topoSort(graph) {
  const seq = [];
  const q = [];
  const indegree = countParents(graph);
  for (const node of indegree.keys()) {
      if (indegree.get(node) === 0) {
          q.push(node);
      }
  }
  while (q.length > 0) {
      // if there's > 1 item, then the recontruction is not unique
      if (q.length > 1) return false;
      const node = q.shift();
      seq.push(node);
      for (const neighbor of graph.get(node)) {
          indegree.set(neighbor, indegree.get(neighbor) - 1);
          if (indegree.get(neighbor) === 0) {
              q.push(neighbor);
          }
      }
  }
  return equals(seq, original);
}

const graph = new Map();
for (let i = 1; i <= original.length; i++) {
  graph.set(i, new Set());
}
for (const seq of seqs) {
  for (let i = 0; i < seq.length - 1; i++) {
      const earlyNum = seq[i];
      const lateNum = seq[i + 1];
      if (!graph.get(earlyNum).has(lateNum)) {
          graph.get(earlyNum).add(lateNum);
      }
  }
}
return topoSort(graph);
}