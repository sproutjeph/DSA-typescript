class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList<T> {
  head: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Add a node at the end
  append(value: T): void {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // Add a node at the beginning
  prepend(value: T): void {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }

  // Delete a node by value
  delete(value: T): void {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }

    if (current.next !== null) {
      current.next = current.next.next;
      this.length--;
    }
  }

  // Remove and return the last node in the list
  pop(): T | null {
    if (this.head === null) {
      return null;
    }

    if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      this.length--;
      return value;
    }

    let current = this.head;
    while (current.next && current.next.next !== null) {
      current = current.next;
    }

    const value = current.next!.value;
    current.next = null;
    this.length--;
    return value;
  }

  // Remove and return the first node in the list
  shift(): T | null {
    if (this.head === null) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
  }

  // Get the value of the node at a specific index
  get(index: number): T | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current !== null) {
        current = current.next;
      }
    }

    return current !== null ? current.value : null;
  }

  // Set the value of the node at a specific index
  set(index: number, value: T): boolean {
    if (index < 0 || index >= this.length) {
      return false;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current !== null) {
        current = current.next;
      }
    }

    if (current !== null) {
      current.value = value;
      return true;
    }

    return false;
  }

  // Insert a new node with a specified value at a specific index
  insert(index: number, value: T): boolean {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.prepend(value);
      return true;
    }

    const newNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (current !== null) {
        current = current.next;
      }
    }

    if (current !== null) {
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
      return true;
    }

    return false;
  }

  // Remove a node at a specific index
  remove(index: number): T | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (current !== null) {
        current = current.next;
      }
    }

    if (current !== null && current.next !== null) {
      const value = current.next.value;
      current.next = current.next.next;
      this.length--;
      return value;
    }

    return null;
  }

  // Reverse the linked list
  reverse(): void {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  // Find a node by value
  find(value: T): Node<T> | null {
    let current = this.head;
    while (current !== null && current.value !== value) {
      current = current.next;
    }
    return current;
  }

  // Print all values in the linked list
  print(): void {
    let current = this.head;
    const values: T[] = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

// Example usage:
const list = new SinglyLinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print(); // Output: 0 -> 1 -> 2 -> 3
console.log(list.length); // Output: 4
list.reverse();
list.print(); // Output: 3 -> 2 -> 1 -> 0
console.log(list.length); // Output: 4

// Big O of singly Linked lists
// insertion = O(1)
// Removal O(1) or O(N)
// Seraching O(N)
// Access O(N)

// Singly Linked List are an excellent alternative to arrays
// when insertion and deletion at the beginning are frequently required

// Arrays contain a built in index whereas Linked List do not

// The idea of a list data structure that consists of nodes is the foundation for other strctures like stacks and queues
