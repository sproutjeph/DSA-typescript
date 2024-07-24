/*
A queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed. You can think of it like a line of people waiting for a service - the person who arrived first gets served first.

Real-life Use Cases:
Queues are used in many real-world scenarios, such as:

Task scheduling in operating systems
Print job spooling
Handling requests in web servers
Breadth-First Search in graph algorithms
Buffering in streaming services
Call center systems
Ticket booking systems

Basic Concepts:

Front: The front of the queue, where elements are removed.
Rear: The back of the queue, where new elements are added.
Enqueue: The operation of adding an element to the rear of the queue.
Dequeue: The operation of removing an element from the front of the queue.
*/
class Queue<T> {
  private items: T[] = [];

  // Add an element to the rear of the queue
  enqueue(element: T): void {
    this.items.push(element);
  }

  // Remove and return the element at the front of the queue
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // View the element at the front of the queue without removing it
  peek(): T | undefined {
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the number of elements in the queue
  size(): number {
    return this.items.length;
  }

  // Clear the queue
  clear(): void {
    this.items = [];
  }

  // Print the queue
  print(): void {
    console.log(this.items.toString());
  }
}

//implement a queue using a linked list in TypeScript. This approach provides O(1) time complexity for both enqueue and dequeue operations.

class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {}
}

class LinkedListQueue<T> {
  constructor(
    private head: Node<T> | null = null,
    private tail: Node<T> | null = null,
    private _size: number = 0
  ) {}

  // Add an element to the rear of the queue
  enqueue(element: T): void {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this._size++;
  }

  // Remove and return the element at the front of the queue
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const value = this.head!.value;
    this.head = this.head!.next;
    this._size--;
    if (this.isEmpty()) {
      this.tail = null;
    }
    return value;
  }

  // View the element at the front of the queue without removing it
  peek(): T | undefined {
    return this.head?.value;
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this._size === 0;
  }

  // Get the number of elements in the queue
  size(): number {
    return this._size;
  }

  // Clear the queue
  clear(): void {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  // Print the queue
  print(): void {
    let current = this.head;
    const elements: T[] = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }
}
