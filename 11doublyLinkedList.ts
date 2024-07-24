/*
A doubly linked list is a data structure consisting of nodes, where each node contains:

Data
A reference (or link) to the next node
A reference to the previous node
*/

class Node<T> {
  constructor(
    public data: T,
    public next: Node<T> | null = null,
    public prev: Node<T> | null = null
  ) {}
}

class DoublyLinkedList<T> {
  constructor(
    private head: Node<T> | null = null,
    private tail: Node<T> | null = null,
    private _length = 0
  ) {}

  prepend(data: T): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  append(data: T) {
    const newNode = new Node(data);
    if (this._length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this._length++;
    return this;
  }

  removeLast(): T | null {
    if (!this.head) return null;
    const removedNode = this.tail;
    if (this._length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode!.prev;
      this.tail!.next = null;
      removedNode!.prev = null;
    }
    this._length--;
    return removedNode!.data;
  }

  removeFirst(): T | null {
    if (this._length === 0) return null;
    const removedData = this.head!.data;
    if (this.head === this.tail) {
      //if there is only one element
      this.head = null;
      this.tail = null;
    } else {
      // if there are more elements
      this.head = this.head!.next;
      this.head!.prev = null;
    }
    return removedData;
  }
  // Traverse forward
  traverseForward(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  // Traverse backward
  traverseBackward(): T[] {
    const result: T[] = [];
    let current = this.tail;
    while (current) {
      result.push(current.data);
      current = current.prev;
    }
    return result;
  }
  // Search for a node
  search(data: T): Node<T> | null {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  // Delete a node
  delete(data: T): void {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head!.prev = null;
        } else if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail!.next = null;
        } else {
          current.prev!.next = current.next;
          current.next!.prev = current.prev;
        }
        return;
      }
      current = current.next;
    }
  }
  // Get the size of the list
  size(): number {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Check if the list is empty
  isEmpty(): boolean {
    return this.head === null;
  }

  // Clear the list
  clear(): void {
    this.head = null;
    this.tail = null;
  }
}

const list = new DoublyLinkedList();
console.log(list.append(30));
