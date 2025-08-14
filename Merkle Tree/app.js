class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    
    getRoot(leaves = this.leaves) {
        if (leaves.length === 1) {
            return leaves[0];
        }
        const layer = [];
        for (let i = 0; i < leaves.length; i += 2) {
            const left = leaves[i];
            const right = leaves[i + 1];
            if (right) {
                layer.push(this.concat(left, right));
            }
            else {
                layer.push(left);
            }
        }
        return this.getRoot(layer);
    }
    
    getProof(index, layer = this.leaves, proof = []) {
        if (layer.length === 1) return proof;
        
        const newLayer = [];
        for (let i = 0; i < layer.length; i += 2) {
            let left = layer[i];
            let right = layer[i + 1];
            
            if (!right) {
                newLayer.push(left);
            } else {
                newLayer.push(this.concat(left, right));
                
    
                if (i === index || i + 1 === index) {
                    let isTargetLeft = (index % 2 === 0);
                    proof.push({
                        data: isTargetLeft ? right : left,
                        left: !isTargetLeft
                    });
                }
            }
        }
        return this.getProof(Math.floor(index / 2), newLayer, proof);
    }
}

module.exports = MerkleTree;