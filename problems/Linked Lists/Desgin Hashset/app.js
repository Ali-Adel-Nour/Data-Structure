// Node class for LinkedList
var ListNode = function(val) {
  this.val = val;
  this.next = null;
}

var MyHashSet = function() {
  // Initialize with size and bucket array
  this.size = 1000; // Size of bucket array
  this.bucket = new Array(this.size).fill(null);
};

MyHashSet.prototype.add = function(key) {
  // Get index using modulo as hash function
  const index = key % this.size;

  // If bucket is empty, create new node
  if (!this.bucket[index]) {
      this.bucket[index] = new ListNode(key);
      return;
  }

  // Check if key already exists and handle collision
  let current = this.bucket[index];

  // If key is at head
  if (current.val === key) return;

  // Traverse to find key or reach end
  while (current.next) {
      if (current.next.val === key) return;
      current = current.next;
  }

  // Add new node at end
  current.next = new ListNode(key);
};

MyHashSet.prototype.remove = function(key) {
  const index = key % this.size;

  // If bucket is empty
  if (!this.bucket[index]) return;

  // If key is at head
  if (this.bucket[index].val === key) {
      this.bucket[index] = this.bucket[index].next;
      return;
  }

  // Traverse to find and remove key
  let current = this.bucket[index];
  while (current.next) {
      if (current.next.val === key) {
          current.next = current.next.next;
          return;
      }
      current = current.next;
  }
};

MyHashSet.prototype.contains = function(key) {
  const index = key % this.size;

  // If bucket is empty
  if (!this.bucket[index]) return false;

  // Traverse to find key
  let current = this.bucket[index];
  while (current) {
      if (current.val === key) return true;
      current = current.next;
  }

  return false;
};
