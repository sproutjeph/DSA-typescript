/*
What is a Stack?

A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means the last element added to the stack will be the first one to be removed.

Common Operations

	1.	push(element): Add an element to the top of the stack.
	2.	pop(): Remove the top element from the stack.
	3.	peek(): Get the top element of the stack without removing it.
	4.	isEmpty(): Check if the stack is empty.
	5.	size(): Get the number of elements in the stack.

Use Cases

	•	Function call management: Stacks are used to manage function calls and recursion in programming.
	•	Undo mechanisms: Applications like text editors use stacks to implement undo functionality.
	•	Expression evaluation: Stacks are used in evaluating and parsing expressions (e.g., converting infix to postfix notation).

*/

class Stack<T> {
  constructor(private items: T[] = []) {}

  // Add item to the top of the stack
  push(element: T): void {
    this.items.push(element);
  }
  pop() {
    this.items.pop();
  }

  print() {
    console.log(this.items);
  }
}

// const stack = new Stack();

// stack.push(10);
// stack.push(11);
// stack.push(12);
// stack.pop();
// stack.print();

class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {}
}

class LinkedListStack<T> {
  constructor(private head: Node<T> | null = null, private count: number = 0) {}

  // Add an element to the top of the stack
  push(element: T): void {
    const node = new Node(element);
    node.next = this.head;
    this.head = node;
    this.count++;
  }

  // Remove and return the top element of the stack
  pop(): T | null {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.count--;
    return value;
  }

  // Return the top element of the stack without removing it
  peek(): T | null {
    if (this.head === null) {
      return null;
    }
    return this.head.value;
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.head === null;
  }

  // Get the number of elements in the stack
  size(): number {
    return this.count;
  }

  // Clear all elements from the stack
  clear(): void {
    this.head = null;
    this.count = 0;
  }

  // Print the stack elements
  print(): void {
    let current = this.head;
    const elements: T[] = [];
    while (current !== null) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.toString());
  }
}

// Usage example
const stack = new LinkedListStack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false

stack.print(); // Output: 20,10
stack.clear();
console.log(stack.isEmpty()); // Output: true
