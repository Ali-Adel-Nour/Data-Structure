class UnionFind {
  constructor() {
      this.id = new Map();
  }

  find(x) {
      let y = this.id.has(x) ? this.id.get(x) : x;
      if (y !== x) {
          y = this.find(y);
          this.id.set(x, y);
      }
      return y;
  }

  union(x, y) {
      this.id.set(this.find(x), this.find(y));
  }
}

function mstForest(trees, pairs) {
  pairs.sort((a, b) => a[2] - b[2]);
  const dsu = new UnionFind();
  let ret = 0;
  for (const [a, b, d] of pairs) {
      if (dsu.find(a) !== dsu.find(b)) {
          dsu.union(a, b);
          ret += d;
      }
  }
  return ret;
}
