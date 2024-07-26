/*
A priority queue is a specialized queue data structure where each element is associated with a priority. Elements with higher priority are served before elements with lower priority. If two elements have the same priority, they are served according to their order in the queue.

Types of Priority Queues

	1.	Min-Priority Queue: The element with the lowest priority is served first.
	2.	Max-Priority Queue: The element with the highest priority is served first.

Applications of Priority Queues

	•	Task scheduling in operating systems.
	•	Dijkstra’s shortest path algorithm.
	•	Huffman coding in data compression.
	•	Simulations (e.g., discrete event simulations).

Implementing a Priority Queue using a Heap

Heaps are efficient for implementing priority queues because they allow for quick insertion and removal of the highest (or lowest) priority element.

Priority Queue Operations

	1.	Insertion: Adds a new element with a given priority to the queue.
	2.	Deletion: Removes the element with the highest (or lowest) priority.
	3.	Peek: Retrieves the element with the highest (or lowest) priority without removing it.
	4.	Heapify Up: Ensures the heap property is maintained after insertion.
	5.	Heapify Down: Ensures the heap property is maintained after deletion.

Complexity Analysis

	•	Insertion: O(log n) due to heapify up.
	•	Deletion: O(log n) due to heapify down.
	•	Peek: O(1).

Conclusion

Priority queues are essential data structures for efficiently managing and accessing elements based on their priority. They are widely used in various applications, including task scheduling, graph algorithms, and simulations. Understanding their implementation using heaps will help you utilize them effectively in your projects.
*/

class MinPriorityQueue<T> {
  private heap: { value: T; priority: number }[] = [];

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

  insert(value: T, priority: number): void {
    const node = { value, priority };
    this.heap.push(node);
    this.heapifyUp();
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = this.parentIndex(index);
      if (this.heap[parent].priority > this.heap[index].priority) {
        this.swap(parent, index);
        index = parent;
      } else {
        break;
      }
    }
  }

  extractMin(): T | null {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop()!.value;
    }

    const root = this.heap[0].value;
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);

    return root;
  }

  private heapifyDown(index: number): void {
    let smallest = index;
    const left = this.leftChildIndex(index);
    const right = this.rightChildIndex(index);

    if (
      left < this.heap.length &&
      this.heap[left].priority < this.heap[smallest].priority
    ) {
      smallest = left;
    }

    if (
      right < this.heap.length &&
      this.heap[right].priority < this.heap[smallest].priority
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  peek(): T | null {
    return this.heap.length === 0 ? null : this.heap[0].value;
  }
}

class MaxPriorityQueue<T> {
  private heap: { value: T; priority: number }[] = [];

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

  insert(value: T, priority: number): void {
    const node = { value, priority };
    this.heap.push(node);
    this.heapifyUp();
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = this.parentIndex(index);
      if (this.heap[parent].priority < this.heap[index].priority) {
        this.swap(parent, index);
        index = parent;
      } else {
        break;
      }
    }
  }

  extractMax(): T | null {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop()!.value;
    }

    const root = this.heap[0].value;
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);

    return root;
  }

  private heapifyDown(index: number): void {
    let largest = index;
    const left = this.leftChildIndex(index);
    const right = this.rightChildIndex(index);

    if (
      left < this.heap.length &&
      this.heap[left].priority > this.heap[largest].priority
    ) {
      largest = left;
    }

    if (
      right < this.heap.length &&
      this.heap[right].priority > this.heap[largest].priority
    ) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  peek(): T | null {
    return this.heap.length === 0 ? null : this.heap[0].value;
  }
}

const minPQ = new MinPriorityQueue<string>();
minPQ.insert("task1", 2);
minPQ.insert("task2", 1);
minPQ.insert("task3", 3);

console.log(minPQ.peek()); // Output: "task2" (highest priority)
console.log(minPQ.extractMin()); // Output: "task2"
console.log(minPQ.peek()); // Output: "task1"

const maxPQ = new MaxPriorityQueue<string>();
maxPQ.insert("task1", 2);
maxPQ.insert("task2", 1);
maxPQ.insert("task3", 3);

console.log(maxPQ.peek()); // Output: "task3" (highest priority)
console.log(maxPQ.extractMax()); // Output: "task3"
console.log(maxPQ.peek()); // Output: "task1"
