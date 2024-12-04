let { MinPriorityQueue } = require ("@datastructures-js/priority-queue");

function shortestPath(edges, n, src) {
    let adj = {};
    for (let i = 1; i <= n; i++) {
        adj[i] = [];
    }

    // Build the adjacency list from edges
    for (let edge of edges) {
        let { n1, n2, weight } = edge; // Destructure the edge object
        adj[n1].push([n2, weight]); // Add the edge to the adjacency list
    }

    let shortest = {};
    let minHeap = new MinPriorityQueue({
        priority: (item) => item[0]
    });
    minHeap.enqueue([0, src]); // Start from the source node with distance 0

    while (!minHeap.isEmpty()) {
        let [currentDistance, currentNode] = minHeap.dequeue().element;

        // Skip if already processed
        if (shortest.hasOwnProperty(currentNode)) {
            continue;
        }

        // Record shortest distance to this node
        shortest[currentNode] = currentDistance;

        // Update distances for neighbors
        for (let [neighbor, weight] of adj[currentNode]) {
            if (!shortest.hasOwnProperty(neighbor)) {
                minHeap.enqueue([currentDistance + weight, neighbor]);
            }
        }
    }

    // Return shortest distances from the source node
    return shortest;
}

