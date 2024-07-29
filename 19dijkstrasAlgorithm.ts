/**
 Dijkstra’s Algorithm is a famous algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.

Here’s a step-by-step explanation of Dijkstra’s Algorithm and its implementation in TypeScript:

Steps of Dijkstra’s Algorithm

	1.	Initialization:
	•	Set the distance to the starting node to 0 and the distance to all other nodes to infinity.
	•	Mark all nodes as unvisited. Create a set of all the unvisited nodes called the unvisited set.
	2.	Visit the Unvisited Node with the Smallest Known Distance:
	•	For the current node, consider all its unvisited neighbors and calculate their tentative distances through the current node. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one. For example, if the current node A is marked with a distance of 6, and the distance from A to a neighbor B is 2, then the distance to B through A will be 6 + 2 = 8. If B was previously marked with a distance greater than 8 then change it to 8. Otherwise, keep the current value.
	3.	Mark the Current Node as Visited:
	•	Remove the current node from the unvisited set. A visited node will not be checked again.
	4.	Repeat:
	•	Continue this process until all the nodes have been visited. The algorithm ends when the shortest path to every node has been found.
 */

class PriorityQueue<T> {
  private items: { element: T; priority: number }[] = [];

  enqueue(element: T, priority: number) {
    const queueElement = { element, priority };
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 1, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }

  dequeue(): T | undefined {
    return this.items.shift()?.element;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

interface Graph {
  [key: string]: { node: string; weight: number }[];
}

const dijkstra = (graph: Graph, startNode: string) => {
  const distances: { [key: string]: number } = {};
  const visited: { [key: string]: boolean } = {};
  const pq = new PriorityQueue<string>();

  for (let node in graph) {
    distances[node] = Infinity;
    visited[node] = false;
  }

  distances[startNode] = 0;
  pq.enqueue(startNode, 0);

  while (!pq.isEmpty()) {
    const currentNode = pq.dequeue()!;
    visited[currentNode] = true;

    graph[currentNode].forEach((neighbor) => {
      if (!visited[neighbor.node]) {
        const newDistance = distances[currentNode] + neighbor.weight;

        if (newDistance < distances[neighbor.node]) {
          distances[neighbor.node] = newDistance;
          pq.enqueue(neighbor.node, newDistance);
        }
      }
    });
  }

  return distances;
};

// Example usage:
const graph: Graph = {
  A: [
    { node: "B", weight: 4 },
    { node: "C", weight: 1 },
  ],
  B: [
    { node: "A", weight: 4 },
    { node: "C", weight: 2 },
    { node: "D", weight: 5 },
  ],
  C: [
    { node: "A", weight: 1 },
    { node: "B", weight: 2 },
    { node: "D", weight: 8 },
  ],
  D: [
    { node: "B", weight: 5 },
    { node: "C", weight: 8 },
  ],
};

console.log(dijkstra(graph, "A"));

/*
Explanation

	•	PriorityQueue Class:
	•	This is a simple priority queue implementation to help us always process the node with the smallest distance first.
	•	The enqueue method adds elements to the queue based on their priority (distance).
	•	The dequeue method removes and returns the element with the highest priority (smallest distance).
	•	The isEmpty method checks if the queue is empty.
	•	Graph Interface:
	•	Defines a graph structure where each node points to an array of neighbors. Each neighbor is an object containing the node name and the weight of the edge.
	•	dijkstra Function:
	•	Initializes distances and visited status for each node.
	•	Sets the starting node distance to 0 and enqueues it with priority 0.
	•	Processes each node by visiting its neighbors and updating their distances if a shorter path is found through the current node.
	•	Continues this process until the priority queue is empty.
	•	Example Usage:
	•	Defines a simple graph and runs Dijkstra’s Algorithm from node ‘A’, printing the shortest distances to all other nodes.
*/
