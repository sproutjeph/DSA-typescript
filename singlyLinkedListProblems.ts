/**
 * Basic Operations:
Implement a method to find the middle element of the linked list in one pass.
Write a method to detect if the linked list has a cycle.
 */

class Node<T> {
  constructor(public data: T, public next: Node<T> | null = null) {}
}

class LinkedList<T> {
  constructor(private head: Node<T> | null = null, private _length = 0) {}

  // add at the beginning of the list
  prepend(data: T) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this._length++;
  }

  // add at the end of the list
  append(data: T) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this._length++;
  }

  // remove at the beginning of the list
  removeFirst(): T | null {
    if (!this.head) return null;
    const removedData = this.head.data;
    this.head = this.head.next;
    this._length--;
    return removedData;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    console.log(this._length);
  }
}
