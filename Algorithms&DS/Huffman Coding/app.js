// Node class represents each character and its frequency in the Huffman tree
class Node {
    constructor(char, freq) {
        this.char = char; // Character
        this.freq = freq; // Frequency of the character
        this.left = null; // Left child node
        this.right = null; // Right child node
    }
}

// MinHeap class is used to create a priority queue for the Huffman tree
class MinHeap {
    constructor() {
        this.nodes = []; // Array to hold the nodes
    }

    // Insert a new node into the min-heap
    insert(node) {
        this.nodes.push(node); // Add the node to the end of the array
        this.bubbleUp(); // Maintain the heap property
    }

    // Maintain the min-heap property by moving the newly added node up
    bubbleUp() {
        let index = this.nodes.length - 1; // Start from the last index
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2); // Calculate parent index
            // If the current node's frequency is greater than or equal to the parent's, break
            if (this.nodes[index].freq >= this.nodes[parentIndex].freq) break;
            // Swap the current node with its parent
            [this.nodes[index], this.nodes[parentIndex]] = [this.nodes[parentIndex], this.nodes[index]];
            index = parentIndex; // Move up to the parent index
        }
    }

    // Remove and return the root node (the node with the smallest frequency)
    remove() {
        const root = this.nodes[0]; // Store the root node
        const end = this.nodes.pop(); // Remove the last node
        if (this.nodes.length > 0) {
            this.nodes[0] = end; // Move the last node to the root
            this.bubbleDown(); // Maintain the heap property
        }
        return root; // Return the root node
    }

    // Maintain the min-heap property by moving the root node down
    bubbleDown() {
        let index = 0; // Start from the root index
        const length = this.nodes.length;
        const element = this.nodes[0]; // Store the root element

        while (true) {
            let leftChildIndex = 2 * index + 1; // Calculate left child index
            let rightChildIndex = 2 * index + 2; // Calculate right child index
            let leftChild, rightChild;
            let swap = null; // Variable to hold the index of the child to swap with

            // Check if the left child exists and is less than the element
            if (leftChildIndex < length) {
                leftChild = this.nodes[leftChildIndex];
                if (leftChild.freq < element.freq) {
                    swap = leftChildIndex; // Mark left child for swapping
                }
            }

            // Check if the right child exists and is less than the element or left child
            if (rightChildIndex < length) {
                rightChild = this.nodes[rightChildIndex];
                if (
                    (swap === null && rightChild.freq < element.freq) ||
                    (swap !== null && rightChild.freq < leftChild.freq)
                ) {
                    swap = rightChildIndex; // Mark right child for swapping
                }
            }

            // If no swap is needed, break the loop
            if (swap === null) break;
            // Swap the element with the child
            this.nodes[index] = this.nodes[swap];
            this.nodes[swap] = element;
            index = swap; // Move down to the child index
        }
    }

    // Check if the min-heap is empty
    isEmpty() {
        return this.nodes.length === 0; // Return true if there are no nodes
    }
}

// Function to build the Huffman tree from the input text
function buildHuffmanTree(text) {
    const frequencyMap = {}; // Object to hold the frequency of each character
    // Count the frequency of each character in the text
    for (const char of text) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1; // Increment frequency
    }

    const minHeap = new MinHeap(); // Create a new min-heap
    // Create a node for each character and insert it into the min-heap
    for (const char in frequencyMap) {
        minHeap.insert(new Node(char, frequencyMap[char]));
    }

    // Build the Huffman tree
    while (minHeap.nodes.length > 1) {
        // Remove the two nodes with the smallest frequency
        const left = minHeap.remove();
        const right = minHeap.remove();
        // Create a new internal node with these two nodes as children
        const merged = new Node(null, left.freq + right.freq);
        merged.left = left; // Set left child
        merged.right = right; // Set right child
        minHeap.insert(merged); // Insert the merged node back into the min-heap
    }

    return minHeap.remove(); // Return the root of the Huffman tree
}

// Function to generate Huffman codes from the Huffman tree
function generateCodes(node, prefix = '', codes = {}) {
    // If the node is a leaf (contains a character)
    if (node.char !== null) {
        codes[node.char] = prefix; // Assign the code to the character
    } else {
        // Traverse the left child with '0' prefix
        generateCodes(node.left, prefix + '0', codes);
        // Traverse the right child with '1' prefix
        generateCodes(node.right, prefix + '1', codes);
    }
    return codes; // Return the generated codes
}

// Function to encode the input text using Huffman coding
function huffmanEncode(text) {
    const root = buildHuffmanTree(text); // Build the Huffman tree
    const codes = generateCodes(root); // Generate codes from the tree
    let encoded = ''; // Initialize an empty string for the encoded text
    // Replace each character in the text with its corresponding Huffman code
    for (const char of text) {
        encoded += codes[char]; // Append the code to the encoded string
    }
    return { encoded, codes }; // Return the encoded string and the codes
}

// Function to decode the encoded string using the Huffman tree
function huffmanDecode(encoded, codes) {
    // Reverse the codes to map codes back to characters
    const reversedCodes = Object.fromEntries(Object.entries(codes).map(([k, v]) => [v, k]));
    let currentCode = ''; // Initialize an empty string for the current code
    let decoded = ''; // Initialize an empty string for the decoded text

    // Traverse the encoded string bit by bit
    for (const bit of encoded) {
        currentCode += bit; // Append the bit to the current code
        // If the current code matches a code in the reversed codes
        if (currentCode in reversedCodes) {
            decoded += reversedCodes[currentCode]; // Append the character to the decoded string
            currentCode = ''; // Reset the current code
        }
    }
    return decoded; // Return the decoded string
}

// Example usage
const text = "hello huffman"; // Input text to encode
const { encoded, codes } = huffmanEncode(text); // Encode the text
console.log("Encoded:", encoded); // Output the encoded string
console.log("Codes:", codes); // Output the generated Huffman codes
const decoded = huffmanDecode(encoded, codes); // Decode the encoded string
console.log("Decoded:", decoded); // Output the decoded string