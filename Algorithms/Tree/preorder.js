class Node {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function preOrderTraversal(root) {
  if (root !== null) {
      console.log(root.val);
      preOrderTraversal(root.left);
      preOrderTraversal(root.right);
  }
}