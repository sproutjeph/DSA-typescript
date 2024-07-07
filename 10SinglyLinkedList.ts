/*
What is a linked list?
A data structure that contains a head, tail and length property.
Linked Lists consist of nodes, and each node has a value and a pointer to another node or null


Comparisons with Arrays
Lists
• Do not have indexes!,
• Connected via nodes with a next pointer
• Random access is not allowed
Arrays
• Indexed in order!
• Insertion and deletion can be expensive
• Can quickly be accessed at a specific index
*/

class Node<T> {
  data: T;
  next: Node<T> | null;
  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private _length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  get length(): number {
    return this._length;
  }

  // Add a new node to the end of the list
  append(data: T) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this._length++;

    return this;
  }

  // Remove and return the last item
  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    let data: T;
    if (this.head === this.tail) {
      data = this.head.data;
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next!;
      }
      data = this.tail!.data;
      current.next = null;
      this.tail = current;
    }

    this._length--;
    return data;
  }

  // Remove and return the first item
  shift(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    const shiftedNode = this.head;
    this.head = this.head.next;
    this._length--;

    if (this._length === 0) {
      this.tail = null;
    }

    return shiftedNode.data;
  }

  // Add a new node to the beginning of the list
  unshift(data: T): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this._length++;
  }

  get(position: number): Node<T> | null {
    if (position < 0 || position >= this._length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current!.next;
    }

    return current;
  }

  // Set element at a specific position
  set(position: number, data: T): boolean {
    const node = this.get(position);
    if (node) {
      node.data = data;
      return true;
    }
    return false;
  }

  // Insert a new node at a specific position
  insertAt(data: T, position: number): void {
    if (position < 0 || position > this._length) {
      throw new Error("Invalid position");
    }

    if (position === 0) {
      this.unshift(data);
    } else if (position === this._length) {
      this.append(data);
    } else {
      const newNode = new Node(data);
      let current = this.head;
      for (let i = 0; i < position - 1; i++) {
        current = current!.next;
      }
      newNode.next = current!.next;
      current!.next = newNode;
      this._length++;
    }
  }

  // Remove a node with specific data or at a specific index
  remove(data: T, index?: number): boolean {
    if (this.length === 0) {
      return false;
    }

    if (typeof index === "number") {
      if (index < 0 || index >= this._length) {
        return false;
      }
      if (index === 0) {
        this.shift();
        return true;
      }
      if (index === this._length - 1) {
        this.pop();
        return true;
      }
      const prevNode = this.get(index - 1);
      if (prevNode && prevNode.next) {
        prevNode.next = prevNode.next.next;
        this._length--;
        return true;
      }
    } else {
      if (this.head!.data === data) {
        this.shift();
        return true;
      }

      let previous = this.head;
      let current = this.head!.next;

      while (current !== null) {
        if (current.data === data) {
          if (current === this.tail) {
            this.pop();
          } else {
            previous!.next = current.next;
            this._length--;
          }
          return true;
        }
        previous = current;
        current = current.next;
      }
    }

    return false;
  }

  reverse(): void {
    if (this._length <= 1) {
      return;
    }

    let prev: Node<T> | null = null;
    let current: Node<T> | null = this.head;
    let next: Node<T> | null = null;

    // Swap head and tail
    this.tail = this.head;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  // Print the list
  print(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append("Hello");
list.append("jeph");
list.append("Oluchi");
list.append("Marry");
list.append("Dear");
// list.unshift("chisom");
list.print();
console.log("--------------");

list.reverse();
list.print();

// list.pop();
// console.log(`Get me a wife ${list.get(3)}`);

// list.print();
