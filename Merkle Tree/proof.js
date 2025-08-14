const MerkleTree = require('./app.js');


function concat(a, b) {
    return a + b;
}


const leaves = ['A', 'B', 'C', 'D'];
const tree = new MerkleTree(leaves, concat);

console.log('Root:', tree.getRoot());
console.log('Proof for index 0:', tree.getProof(0));
console.log('Proof for index 2:', tree.getProof(2));