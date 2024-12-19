class HeapItem {
  constructor(item, priority = item) {
      this.item = item;
      this.priority = priority;
  }
}

class MinHeap {
  constructor() {
      this.heap = [];
  }

  push(node) {
      // insert the new node at the end of the heap array
      this.heap.push(node);
      // find the correct position for the new node
      this.bubble_up();
  }

  bubble_up() {
      let index = this.heap.length - 1;

      while (index > 0) {
          const element = this.heap[index];
          const parentIndex = Math.floor((index - 1) / 2);
          const parent = this.heap[parentIndex];

          if (parent.priority <= element.priority) break;
          // if the parent is bigger than the child then swap the parent and child
          this.heap[index] = parent;
          this.heap[parentIndex] = element;
          index = parentIndex;
      }
  }

  pop() {
      const min = this.heap[0];
      this.heap[0] = this.heap[this.size() - 1];
      this.heap.pop();
      this.bubble_down();
      return min;
  }

  bubble_down() {
      let index = 0;
      let min = index;
      const n = this.heap.length;

      while (index < n) {
          const left = 2 * index + 1;
          const right = left + 1;
          // check if left or right child is smaller than parent
          if ((left < n && this.heap[left].priority < this.heap[min].priority) ||
          (right < n && this.heap[right].priority < this.heap[min].priority)) {
              // pick the smaller child if both child is present
              if (right < n) {
                  min = this.heap[left].priority < this.heap[right].priority ? left : right;
              } else {
                  min = left;
              }
          }

          if (min === index) break;
          [this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
          index = min;
      }
  }

  peek() {
      return this.heap[0];
  }

  size() {
      return this.heap.length;
  }
}


// Function to simulate MaxHeap using MinHeap
class MaxHeap {
  constructor() {
      this.minHeap = new MinHeap();
  }

  push(value) {
      // Negate the value before pushing into MinHeap
      this.minHeap.push(new HeapItem(value, -value));
  }

  pop() {
      // Pop from MinHeap and negate the value to get the original
      const poppedItem = this.minHeap.pop();
      return -poppedItem.priority;
  }

  peek() {
      const topItem = this.minHeap.peek();
      return -topItem.priority;
  }

  size() {
      return this.minHeap.size();
  }
}

// Example usage
const maxHeap = new MaxHeap();
const values = [3, 1, 2];

// Insert values into MaxHeap
values.forEach(value => maxHeap.push(value));

// Retrieve values from MaxHeap
console.log("MaxHeap values in descending order:");
while (maxHeap.size() > 0) {
  console.log(maxHeap.pop());
}