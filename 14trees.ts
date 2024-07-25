/*
A tree is a hierarchical data structure consisting of nodes, with a single node as the root from which zero or more child nodes originate. Each node can have child nodes, making the structure look like an upside-down tree.

Terminology

	1.	Node: An element in the tree.
	2.	Root: The topmost node of the tree.
	3.	Parent: A node that has one or more children.
	4.	Child: A node that has a parent.
	5.	Leaf: A node with no children.
	6.	Subtree: A tree consisting of a node and its descendants.
	7.	Height: The number of edges from the root to the deepest leaf.
	8.	Depth: The number of edges from the root to a given node.

Types of Trees

	1.	Binary Tree: Each node has at most two children.
	2.	Binary Search Tree (BST): A binary tree where the left child is less than the parent node, and the right child is greater.
	3.	Balanced Tree: A tree where the height difference between left and right subtrees is minimal.
	4.	AVL Tree: A self-balancing binary search tree.
	5.	Red-Black Tree: Another self-balancing binary search tree with extra properties for balancing.
	6.	Trie: A tree used for storing a dynamic set of strings where the keys are usually strings.

  BFS (Breadth-First Search) and DFS (Depth-First Search) in Tree Traversal

Breadth-First Search (BFS)

BFS, also known as Level-Order Traversal, explores all the nodes at the present depth level before moving on to nodes at the next depth level. It uses a queue to keep track of the nodes to be explored.

Here’s how BFS works:

	1.	Start at the root node.
	2.	Visit all the nodes at the current depth level.
	3.	Move to the next level and repeat until all levels are visited.

  Depth-First Search (DFS)

DFS explores as far as possible along each branch before backtracking. It can be implemented in three main ways:

	1.	Pre-Order Traversal: Visit the node, then left subtree, then right subtree.
	2.	In-Order Traversal: Visit the left subtree, then the node, then the right subtree.
	3.	Post-Order Traversal: Visit the left subtree, then the right subtree, then the node.

DFS Implementations in TypeScript


Key Differences

	1.	BFS:
	•	Explores nodes level by level.
	•	Uses a queue.
	•	Good for finding the shortest path in an unweighted tree.
	2.	DFS:
	•	Explores as far as possible along each branch before backtracking.
	•	Can be implemented using a stack (implicit stack via recursion or an explicit stack).
	•	Good for exploring all nodes and paths in the tree.

Both BFS and DFS are fundamental algorithms for tree traversal, each with its own advantages and use cases.
*/

class BSTNode<T> {
  constructor(
    public value: T,
    public left: BSTNode<T> | null = null,
    public right: BSTNode<T> | null = null
  ) {}
}

class BSTree<T> {
  constructor(private root: BSTNode<T> | null = null) {}

  // private insertNode(node: BSTNode<T>, newNode: BSTNode<T>): void {
  //   if (newNode.value < node.value) {
  //     if (node.left === null) {
  //       node.left = newNode;
  //     } else {
  //       this.insertNode(node.left, newNode);
  //     }
  //   } else {
  //     if (node.right === null) {
  //       node.right = newNode;
  //     } else {
  //       this.insertNode(node.right, newNode);
  //     }
  //   }
  // }

  // insert(value: T): void {
  //   const newNode = new BSTNode(value);
  //   if (!this.root) {
  //     this.root = newNode;
  //     return;
  //   }
  //   this.insertNode(this.root, newNode);
  // }
  insert(value: T): void {
    const newNode = new BSTNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }
  search(value: T): BSTNode<T> | null {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }

    return null;
  }
  delete(value: T): void {
    this.root = this.deleteNode(this.root, value);
  }

  private deleteNode(node: BSTNode<T> | null, value: T): BSTNode<T> | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.deleteNode(node.right, minNode.value);
      return node;
    }
  }
  private findMinNode(node: BSTNode<T>): BSTNode<T> {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
  inOrderTraversal(node: BSTNode<T> | null, result: T[] = []): T[] {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  preOrderTraversal(node: BSTNode<T> | null, result: T[] = []): T[] {
    if (node !== null) {
      result.push(node.value);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  }

  postOrderTraversal(node: BSTNode<T> | null, result: T[] = []): T[] {
    if (node !== null) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  levelOrderTraversal(): T[] {
    const result: T[] = [];
    const queue: (BSTNode<T> | null)[] = [];

    if (this.root !== null) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      const node = queue.shift();
      if (node !== null) {
        result.push(node!.value);
        if (node!.left !== null) {
          queue.push(node!.left);
        }
        if (node!.right !== null) {
          queue.push(node!.right);
        }
      }
    }

    return result;
  }
}
