// Node class for representing elements in the linked list
class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

// DisjointSet class using linked list representation
class DisjointSet {
  constructor() {
      this.sets = new Map(); // Map to store sets, with representatives as keys
  }

  // MakeSet: Create a new set with a single element
  makeSet(element) {
      const newNode = new Node(element);
      newNode.next = newNode; // Circular reference for single-node linked list
      this.sets[element] = newNode;
  }

  // Find the representative (root) of the set containing 'element'
  find(element) {
      return this.sets[element];
  }

  // Union two sets containing elements 'x' and 'y'
  union(x, y) {
      const rootX = this.find(x);
      const rootY = this.find(y);

      if (rootX === rootY) {
          return; // Elements are already in the same set
      }

      // Append the linked list of set y to the linked list of set x
      let current = rootX;
      while (current.next !== rootX) {
          current = current.next;
      }
      current.next = rootY;

      // Update the representative of set y to be the same as set x's representative
      this.sets[y] = rootX;
  }

  // Check if two elements 'x' and 'y' belong to the same set
  isConnected(x, y) {
      return this.find(x) === this.find(y);
  }
}

// Example usage
const disjointSet = new DisjointSet();

disjointSet.makeSet(1);
disjointSet.makeSet(2);
disjointSet.makeSet(3);
disjointSet.makeSet(4);

disjointSet.union(1, 2);
disjointSet.union(3, 4);

console.log(disjointSet.isConnected(1, 3)); // Should be false

disjointSet.union(2, 4);

console.log(disjointSet.isConnected(1, 3)); // Should be true
