class Solution
{

    //Function to merge two nodes a and b.
      union_(a, b, par, rank1) {
        const rootX = this.find(a, par);
        const rootY = this.find(b, par);

        if (rootX === rootY) {
            return; // Elements are already in the same set
        }

        // Rank heuristic: Attach the smaller tree to the root of the larger tree
        if (rank1[rootX] < rank1[rootY]) {
            par[rootX] = rootY;
        } else if (rank1[rootX] > rank1[rootY]) {
            par[rootY] = rootX;
        } else {
            par[rootY] = rootX;
            rank1[rootX]++;
        }
    }

    // Function to find the representative (root) element of the set containing 'x'
  // Collapsing find operation
    find(x, par) {
        if (par[x] !== x) {
            par[x] = this.find(par[x], par);
        }
        return par[x];
    }

    // Function to check whether 2 nodes are connected or not.
    isConnected(x, y, par, rank1) {
        return this.find(x, par) === this.find(y, par);
    }
}