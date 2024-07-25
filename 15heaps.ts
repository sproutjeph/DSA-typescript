/*
A heap is a specialized tree-based data structure that satisfies the heap property. There are two main types of heaps: Max-Heaps and Min-Heaps.

Types of Heaps

	1.	Max-Heap: In a max-heap, the value of each node is greater than or equal to the values of its children. The largest value is at the root.
	2.	Min-Heap: In a min-heap, the value of each node is less than or equal to the values of its children. The smallest value is at the root.

Properties of Heaps

	•	Heaps are complete binary trees.
	•	For a max-heap, the root node has the maximum value.
	•	For a min-heap, the root node has the minimum value.

Common Operations

	1.	Insertion: Adding a new element to the heap.
	2.	Deletion: Removing the root element from the heap.
	3.	Peek: Retrieving the root element without removing it.
	4.	Heapify: Ensuring the heap property is maintained.
*/

// Max Heap

class MaxHeap {
  private heap: number[] = [];

  private parentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private rightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = this.parentIndex(index);
      if (this.heap[parent] < this.heap[index]) {
        this.swap(parent, index);
        index = parent;
      } else {
        break;
      }
    }
  }

  extractMax(): number | null {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop()!;
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);

    return root;
  }

  private heapifyDown(index: number): void {
    let largest = index;
    const left = this.leftChildIndex(index);
    const right = this.rightChildIndex(index);

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  peek(): number | null {
    return this.heap.length === 0 ? null : this.heap[0];
  }
}

// Min Heap

class MinHeap {
  private heap: number[] = [];

  private parentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private rightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = this.parentIndex(index);
      if (this.heap[parent] > this.heap[index]) {
        this.swap(parent, index);
        index = parent;
      } else {
        break;
      }
    }
  }

  extractMin(): number | null {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop()!;
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);

    return root;
  }

  private heapifyDown(index: number): void {
    let smallest = index;
    const left = this.leftChildIndex(index);
    const right = this.rightChildIndex(index);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  peek(): number | null {
    return this.heap.length === 0 ? null : this.heap[0];
  }
}

// Usage Example
const maxHeap = new MaxHeap();
maxHeap.insert(3);
maxHeap.insert(10);
maxHeap.insert(5);
console.log(maxHeap.peek()); // Output: 10
console.log(maxHeap.extractMax()); // Output: 10
console.log(maxHeap.peek()); // Output: 5

const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(10);
minHeap.insert(5);
console.log(minHeap.peek()); // Output: 3
console.log(minHeap.extractMin()); // Output: 3
console.log(minHeap.peek()); // Output: 5

/*
Heap Applications

	1.	Priority Queues: Heaps are often used to implement priority queues.
	2.	Heap Sort: A comparison-based sorting algorithm that uses a binary heap data structure.
	3.	Graph Algorithms: Algorithms like Dijkstra’s shortest path use heaps for efficient priority queue operations.
	4.	Scheduling Algorithms: Used in operating systems for task scheduling.

*/
