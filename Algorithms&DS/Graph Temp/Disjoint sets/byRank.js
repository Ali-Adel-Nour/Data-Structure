class UnionFind {
  constructor() {
      this.id = new Map();
      this.rank = new Map();
  }

  // find the Set ID of Node x
  find(x) {
      // get the value associated with key x, if it's not in the map return x
      let y = this.id.has(x) ? this.id.get(x) : x;
      // check if the current node is a Set ID node
      if (y !== x) {
          // change the hash value of node x to Set ID value of node y
          y = this.find(y);
          this.id.set(x, y);
      }
      return y;
  }

  // union two different sets setting one Set's parent to the other parent
  union(x, y) {
      // check if keys exist in our rank map; if not, add them
      if (!this.rank.has(this.find(x))) {
          this.rank.set(this.find(x), 0);
      }
      if (!this.rank.has(this.find(y))) {
          this.rank.set(this.find(y), 0);
      }
      if (this.rank.get(this.find(x)) < this.rank.get(this.find(y))) {
          this.id.set(this.find(x), this.find(y));
      } else {
          this.id.set(this.find(y), this.find(x));
          // if rank is the same then we update x rank and increment by 1
          // we make y's parent equal to x's parent, so x has increased depth
          if (this.rank.get(this.find(x)) == this.rank.get(this.find(y))) {
              this.rank.set(this.find(x), this.rank.get(this.find(x)) + 1);
          }
      }
  }
}
