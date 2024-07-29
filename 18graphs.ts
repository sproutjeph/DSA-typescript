/*
Part 1: Graph Theory Basics

Definition:
A graph is a data structure consisting of a finite set of vertices (or nodes) and a set of edges connecting these vertices.
Types of Graphs:
a. Undirected Graph: Edges have no direction.
b. Directed Graph (Digraph): Edges have direction.
c. Weighted Graph: Edges have associated weights or costs.
d. Unweighted Graph: Edges have no weights.
Graph Representation:
a. Adjacency Matrix
b. Adjacency List
Graph Terminology:

Vertex (Node)
Edge
Adjacent vertices
Degree of a vertex
Path
Cycle
Connected graph
Strongly connected graph
Tree (a connected acyclic graph)


Common Graph Problems:

Traversal (DFS, BFS)
Shortest path
Minimum spanning tree
Cycle detection
Topological sorting
*/

class Graph {
  constructor(private adjacencyList: Map<number, number[]> = new Map()) {}

  addVertex(vertex: number): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: number, vertex2: number): void {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList.get(vertex1)!.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1);
  }
  removeEdge(vertex1: number, vertex2: number): void {
    this.adjacencyList.set(
      vertex1,
      this.adjacencyList.get(vertex1)!.filter((v) => v !== vertex2)
    );
    this.adjacencyList.set(
      vertex2,
      this.adjacencyList.get(vertex2)!.filter((v) => v !== vertex1)
    );
  }

  removeVertex(vertex: number): void {
    while (this.adjacencyList.get(vertex)!.length) {
      const adjacentVertex = this.adjacencyList.get(vertex)!.pop()!;
      this.removeEdge(vertex, adjacentVertex);
    }
    this.adjacencyList.delete(vertex);
  }

  //search
  depthFirstSearch(start: number): number[] {
    const result: number[] = [];
    const visited: Set<number> = new Set();

    const dfs = (vertex: number) => {
      visited.add(vertex);
      result.push(vertex);

      const neighbors = this.adjacencyList.get(vertex) || [];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };

    dfs(start);
    return result;
  }

  // Iterative Depth-First Search
  iterativeDFS(start: number): number[] {
    const result: number[] = [];
    const visited: Set<number> = new Set();
    const stack: number[] = [start];

    while (stack.length > 0) {
      const vertex = stack.pop()!;
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);

        const neighbors = this.adjacencyList.get(vertex) || [];
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }

    return result;
  }

  breadthFirstSearch(start: number): number[] {
    const result: number[] = [];
    const visited: Set<number> = new Set();
    const queue: number[] = [start];

    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift()!;
      result.push(vertex);

      const neighbors = this.adjacencyList.get(vertex) || [];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  print(): void {
    for (let [vertex, neighbors] of this.adjacencyList) {
      console.log(vertex + " -> " + neighbors.join(", "));
    }
  }
}
// Usage example
const graph = new Graph();
graph.addVertex(1);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
// graph.addEdge(1, 2);
// graph.addEdge(2, 3);
graph.print();
