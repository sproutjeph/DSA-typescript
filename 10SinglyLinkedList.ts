/*
What is a linked list?
A data structure that contains a head, tail and length property.
Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

Each Node has a address of where the next node is
We can only move from start to end
Comparisons with Arrays
Lists
• Do not have indexes!,
• Connected via nodes with a next pointer
• Random access is not allowed
Arrays
• Indexed in order!
• Insertion and deletion can be expensive
• Can quickly be accessed at a specific index

size flexibility:

Arrays have a fixed size (in most languages)
Linked lists can grow or shrink dynamically


Access time:

Arrays offer O(1) random access
Linked lists require O(n) time for access


Insertion/Deletion:

Arrays are slower (O(n) for arbitrary positions)
Linked lists are faster (O(1) if position is known)
*/

// class Node<T> {
//   data: T;
//   next: Node<T> | null;
//   constructor(data: T, next: Node<T> | null = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

class Node<T> {
  constructor(public data: T, public next: Node<T> | null = null) {}
}

class LinkedList<T> {
  constructor(private head: Node<T> | null = null, private _length = 0) {}

  //add at the beginning of the list
  prepend(data: T) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this._length++;
  }

  // Add at the end of the list
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

  // remove from the beginning
  removeFirst(): T | null {
    if (!this.head) return null;
    const removedData = this.head.data;
    this.head = this.head.next;
    this._length--;
    return removedData;
  }

  // remove from the End
  pop(): T | null {
    if (!this.head) return null;
    if (this._length === 1) return this.removeFirst();

    //For lists with more than one element, we need to traverse to the second-to-last node
    let current = this.head;
    while (current.next!.next) {
      current = current.next!;
    }
    const removedData = current.next!.data;
    current.next = null;
    this._length--;
    return removedData;
  }

  // Remove at a specific position
  removeAt(position: number): T | null {
    if (position < 0 || position >= this._length) return null;
    if (position === 0) return this.removeFirst();

    //Traversing to the node before the one to be removed
    let current = this.head;
    for (let i = 0; i < position - 1; i++) {
      current = current!.next;
    }
    const removedData = current!.next!.data;
    current!.next = current!.next!.next;
    this._length--;
    return removedData;
  }

  // Get element at a specific position
  getAtPosition(position: number): T | null {
    if (position < 0 || position >= this._length) return null;

    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current!.next;
    }
    return current?.data!;
  }

  // Insert At a specific position
  insertAt(data: T, position: number): boolean {
    if (position < 0 || position > this._length) return false;
    if (position === 0) {
      this.prepend(data);
      return true;
    }
    if (position === this._length) {
      this.append(data);
      return true;
    }

    let newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < position - 1; i++) {
      current = current?.next!;
    }
    newNode.next = current?.next!;
    current!.next = newNode;
    this._length++;

    return true;
  }

  // Find the position of an element
  getPositionOf(data: T): number {
    let current = this.head;
    let position = 0;

    while (current) {
      if (current.data === data) return position;
      current = current.next;
      position++;
    }
    return -1;
  }

  get length() {
    return this._length;
  }

  isEmpty(): boolean {
    return this._length === 0;
  }

  clear(): void {
    this.head = null;
    this._length = 0;
  }

  toArray(): T[] {
    let result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  reverse(): void {
    if (this._length <= 1) return;

    let prev: Node<T> | null = null;
    let current: Node<T> | null = this.head;
    let next: Node<T> | null = null;

    while (current !== null) {
      // Store next node
      next = current.next;

      // Reverse current node's pointer
      current.next = prev;
      // move pointer one position ahead
      prev = current;
      current = next;
    }
    // update head to point to the last node (which is now the first)
    this.head = prev;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    console.log(this.length);
  }
}

let list = new LinkedList();
list.prepend("oluchi");
list.append("Mbah");
list.append("Chisom");
list.prepend("oluchi2");
// list.removeFirst();
list.print();
list.reverse();
console.log(list.toArray());
