//Path Compression

class UnionFind {
  constructor() {
      this.id = new Map();
  }

  find(x) {
      if (!this.id.has(x)) {
          return x;
      }

      if (this.id.get(x) !== x) {
          this.id.set(x, this.find(this.id.get(x)));
      }
      return this.id.get(x);
  }

  union(x, y) {
      this.id.set(this.find(x), this.find(y));
  }
}