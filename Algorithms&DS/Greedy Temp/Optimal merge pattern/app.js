class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }
      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }
      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

function optimalMergePattern(fileSizes) {
  const minHeap = new MinHeap();

  // Insert all file sizes into the min-heap
  for (const size of fileSizes) {
    minHeap.insert(size);
  }

  let totalCost = 0;

  // Keep merging until only one file remains
  while (minHeap.heap.length > 1) {
    const smallest = minHeap.extractMin();
    const secondSmallest = minHeap.extractMin();
    const mergeCost = smallest + secondSmallest;

    totalCost += mergeCost;

    // Add the merged file size back to the heap
    minHeap.insert(mergeCost);
  }

  return totalCost;
}

// Example Usage
const fileSizes = [4, 3, 2, 6];
console.log(optimalMergePattern(fileSizes)); // Output: 29
