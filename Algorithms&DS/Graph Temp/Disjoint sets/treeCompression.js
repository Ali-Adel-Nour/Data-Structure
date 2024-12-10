class UnionFind {
  // initialize the data structure that maps the node to its set ID
  constructor() {
      this.id = new Map();
  }

  // find the Set ID of Node x
  find(x) {
      let y = this.id.has(x) ? this.id.get(x) : x;
      // check if the current node is a Set ID node
      if (y !== x) {
          // set the value to Set ID node of node y
          y = this.find(y);
          // change the hash value of node x to Set ID value of node y
          this.id.set(x, y);
      }
      return y;
  }

  // union two different sets setting one Set's parent to the other parent
  union(x, y) {
      this.id.set(this.find(x), this.find(y));
  }
}