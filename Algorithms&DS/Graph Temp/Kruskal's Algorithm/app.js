class UnionFind {
  constructor() {
      this.f = new Map();
  }

  find(x) {
      let y = this.f.has(x) ? this.f.get(x) : x;
      if (y != x) {
          y = this.find(y);
          this.f.set(x, y);
      }
      return y;
  }

  union(x, y) {
      this.f.set(this.find(x), this.find(y));
  }
}

class Edge {
  constructor(weight, a, b) {
      this.weight = weight;
      this.a = a;
      this.b = b;
  }
}

function cmp() {
  function compare(x, y) {
      return x.weight < y.weight;
  }
  return compare;
}

function minimumSpanningTree(n, edges) {
  // sort list, make sure to define custom comparator class cmp to sort edge based on weight from lowest to highest
  edges.sort(cmp());
  const dsu = new UnionFind();
  let ret = 0, cnt = 0;
  for (let edge of edges) {
      // check if edges belong to same set before merging and adding edge to mst
      if (dsu.find(edge.a) != dsu.find(edge.b)) {
          dsu.union(edge.a, edge.b);
          ret += edge.weight;
          cnt += 1;
          if (cnt == n - 1) break;
      }
  }
  return ret;
}