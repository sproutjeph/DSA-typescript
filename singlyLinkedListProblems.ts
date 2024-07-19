class Node<T> {
  constructor(public data: T, public next: Node<T> | null = null) {}
}

class LinkedList<T> {
  constructor(
    private head: Node<T> | null = null,
    private tail: Node<T> | null = null,
    private _length = 0
  ) {}

  get length() {
    return this._length;
  }

  //add at the beginning of the list
  prepend(data: T) {
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

  // Add at the end of the list
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

    let current = this.head;
    while (current.next!.next) {
      current = current.next!;
    }
    const removedData = current.next!.data;
    current.next = null;
    this._length--;
    return removedData;
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
// list.append("Chisom");
// list.prepend("oluchi2");
list.removeFirst();
list.print();

class Node1<T> {
  constructor(public data: T, public next: Node<T> | null = null) {}
}

class LinkedList1<T> {
  constructor(
    private head: Node1<T> | null = null,
    private tail: Node1<T> | null = null,
    private _length = 0
  ) {}

  get length(): number {
    return this._length;
  }

  prepend(data: T) {
    const newNode = new Node1(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this._length++;
  }

  append(data: T) {
    const newNode = new Node1(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = this.tail;
      this.tail = newNode;
    }
    this._length++;
  }

  removeFirst(): T | null {
    if (!this.head) return null;

    let removedData = this.head.data;
    this.head = this.head.next;
    this._length--;
    return removedData;
  }

  removeLast(): T | null {
    if (!this.head) return null;

    if (this._length === 1) return this.removeFirst();

    let current = this.head;
    while (current.next!.next) {
      current = current.next!;
    }
    const removedData = current.next!.data;
    current.next = null;
    this._length--;
    return removedData;
  }
}
