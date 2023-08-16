class DisjointSet{
  constructor(size){
    this.parent = new Array(size) // Array to store parent of each element

    this.rank = new Array(size) // Array to store rank (approximate depth) of each element


     // Initialize each element as its own parent and rank as 0
     for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
  }
  }

  // Find the representative (root) element of the set containing 'x'
  /*find(x) {
    if (this.parent[x] !== x) {
        // Path compression: Set the parent of x to its root
        this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
}
*/
// for optimization i will use collapsing find
find(x) {
  while (this.parent[x] !== x) {
    const parent = this.parent[x];
    this.parent[x] = this.parent[parent];
    x = parent;
  }
  return x;
}

// Union two sets containing elements 'x' and 'y'
union(x, y) {
  const rootX = this.find(x);
  const rootY = this.find(y);

  if (rootX === rootY) {
      return; // Elements are already in the same set
  }

  // Rank heuristic: Attach the smaller tree to the root of the larger tree
  if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
  } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
  } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
  }

  //updating the parent pointers of the elements in the smaller tree
  for (let i = 0; i < this.parent[y].length; i++) {
    this.parent[this.parent[y][i]] = this.parent[y];
  }
}

// Check if two elements 'x' and 'y' belong to the same set
isConnected(x, y) {
  return this.find(x) === this.find(y);
}
}
const setSize = 6;
const disjointSet = new DisjointSet(setSize);

disjointSet.union(0, 1);
disjointSet.union(2, 3);
disjointSet.union(4, 5);

console.log(disjointSet.isConnected(1, 2));
console.log(disjointSet.isConnected(1, 5));
