class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = new Map();
    }
    if (!this.table[index].has(key)) {
      this.size++;
    }
    this.table[index].set(key, value);
  }

  get(key) {
    const index = this._hash(key);
    return this.table[index] ? this.table[index].get(key) : undefined;
  }

  remove(key) {
    const index = this._hash(key);
    if (this.table[index] && this.table[index].has(key)) {
      this.table[index].delete(key);
      this.size--;
      return true;
    }
    return false;
  }

  display() {
    this.table.forEach((map, index) => {
      if (map) {
        const chainedValues = Array.from(map.entries()).map(
          ([key, value]) => `[ ${key}: ${value} ]`
        );
        console.log(`${index}: ${chainedValues}`);
      }
    });
  }
}

const ht = new HashTable();
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);
ht.set("Canada", 400)
ht.display();

console.log(ht.get("Canada"));